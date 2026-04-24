export async function GET(request) {
  const { searchParams } = new URL(request.url);
  const account = searchParams.get('account');
  const platform = searchParams.get('platform');
  const days = Number(searchParams.get('days')) || 7;

  const apiKey = process.env.APIFY_API_KEY;

  if (!apiKey) {
    return Response.json(
      { error: 'API key not configured' },
      { status: 500 }
    );
  }

  try {
    let actor = '';
    let input = {};

    if (platform === 'tiktok') {
      actor = 'clockworks/tiktok-scraper';
      input = {
        username: account,
        amount: 20,
        maxAttempts: 1,
        resultsType: 'list'
      };
    } else if (platform === 'instagram') {
      actor = 'apify/instagram-profile-scraper';
      input = {
        username: account,
        resultsType: 'posts',
        postsAmount: 20
      };
    } else if (platform === 'youtube') {
      actor = 'streamers/youtube-shorts-scraper';
      input = {
        channelHandle: account,
        maxResults: 20
      };
    }

    const runResponse = await fetch(`https://api.apify.com/v2/acts/${actor}/runs`, {
      method: 'POST',
      headers: {
        'Authorization': `Bearer ${apiKey}`,
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(input)
    });

    if (!runResponse.ok) {
      throw new Error(`Apify error: ${runResponse.statusText}`);
    }

    const runData = await runResponse.json();
    const runId = runData.data.id;

    let results = [];
    let attempts = 0;
    const maxAttempts = 30;

    while (attempts < maxAttempts) {
      await new Promise(resolve => setTimeout(resolve, 1000));

      const statusResponse = await fetch(
        `https://api.apify.com/v2/acts/${actor}/runs/${runId}`,
        { headers: { 'Authorization': `Bearer ${apiKey}` } }
      );

      const statusData = await statusResponse.json();

      if (statusData.data.status === 'SUCCEEDED') {
        const datasetId = statusData.data.defaultDatasetId;
        const itemsResponse = await fetch(
          `https://api.apify.com/v2/datasets/${datasetId}/items`,
          { headers: { 'Authorization': `Bearer ${apiKey}` } }
        );
        results = await itemsResponse.json();
        break;
      } else if (statusData.data.status === 'FAILED') {
        throw new Error('Actor failed');
      }

      attempts++;
    }

    if (!results || results.length === 0) {
      return Response.json({
        videos: [],
        stats: {
          views: 0,
          likes: 0,
          comments: 0
        }
      });
    }

    // Filter by date range
    const cutoffDate = new Date();
    cutoffDate.setDate(cutoffDate.getDate() - days);

    let filtered = results.filter(item => {
      let itemDate;
      if (platform === 'tiktok') {
        itemDate = new Date(item.createTime * 1000);
      } else if (platform === 'instagram') {
        itemDate = new Date(item.timestamp);
      } else if (platform === 'youtube') {
        itemDate = new Date(item.uploadDate);
      }
      return itemDate >= cutoffDate;
    });

    // Get top 9 videos
    const topVideos = filtered.slice(0, 9);

    // Aggregate stats
    let totalViews = 0;
    let totalLikes = 0;
    let totalComments = 0;

    filtered.forEach(item => {
      if (platform === 'tiktok') {
        totalViews += item.playCount || 0;
        totalLikes += item.diggCount || 0;
        totalComments += item.commentCount || 0;
      } else if (platform === 'instagram') {
        totalLikes += item.likesCount || 0;
        totalComments += item.commentsCount || 0;
      } else if (platform === 'youtube') {
        totalViews += item.viewCount || 0;
        totalLikes += item.likeCount || 0;
        totalComments += item.commentCount || 0;
      }
    });

    const engagementRate = totalViews > 0 
      ? ((totalLikes + totalComments) / totalViews * 100).toFixed(1)
      : 0;

    return Response.json({
      videos: topVideos,
      stats: {
        views: totalViews,
        likes: totalLikes,
        comments: totalComments,
        engagement: engagementRate,
        postsInRange: filtered.length
      }
    });

  } catch (error) {
    console.error('Analytics error:', error);
    return Response.json(
      { error: error.message },
      { status: 500 }
    );
  }
}
