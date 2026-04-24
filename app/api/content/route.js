export async function GET(request) {
  const { searchParams } = new URL(request.url);
  const account = searchParams.get('account');
  const platform = searchParams.get('platform');

  const apiKey = 'apify_api_6RFbzG2fj2xqYHkUnoFmv4fPVhH6p13fnxS1';

  try {
    let actor = '';
    let input = {};

    if (platform === 'tiktok') {
      actor = 'clockworks/tiktok-scraper';
      input = {
        username: account,
        amount: 1, // Get latest 1 video
        maxAttempts: 1,
        resultsType: 'list'
      };
    } else if (platform === 'instagram') {
      actor = 'apify/instagram-profile-scraper';
      input = {
        username: account,
        resultsType: 'posts',
        postsAmount: 1
      };
    } else if (platform === 'youtube') {
      actor = 'streamers/youtube-shorts-scraper';
      input = {
        channelHandle: account,
        maxResults: 1
      };
    }

    // Call Apify API to start the actor
    const runResponse = await fetch(`https://api.apify.com/v2/acts/${actor}/runs`, {
      method: 'POST',
      headers: {
        'Authorization': `Bearer ${apiKey}`,
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(input)
    });

    if (!runResponse.ok) {
      throw new Error(`Apify API error: ${runResponse.statusText}`);
    }

    const runData = await runResponse.json();
    const runId = runData.data.id;

    // Poll for results (with timeout)
    let results = null;
    let attempts = 0;
    const maxAttempts = 30; // 30 attempts * 1 second = 30 second timeout

    while (attempts < maxAttempts) {
      await new Promise(resolve => setTimeout(resolve, 1000)); // Wait 1 second

      const statusResponse = await fetch(
        `https://api.apify.com/v2/acts/${actor}/runs/${runId}`,
        {
          headers: { 'Authorization': `Bearer ${apiKey}` }
        }
      );

      const statusData = await statusResponse.json();

      if (statusData.data.status === 'SUCCEEDED') {
        // Fetch the dataset results
        const datasetId = statusData.data.defaultDatasetId;
        const itemsResponse = await fetch(
          `https://api.apify.com/v2/datasets/${datasetId}/items`,
          {
            headers: { 'Authorization': `Bearer ${apiKey}` }
          }
        );

        const items = await itemsResponse.json();
        results = items[0]; // Get first (latest) item
        break;
      } else if (statusData.data.status === 'FAILED') {
        throw new Error('Apify actor run failed');
      }

      attempts++;
    }

    if (!results) {
      throw new Error('Timeout waiting for Apify results');
    }

    // Format response based on platform
    let formatted = {
      url: '',
      views: 0,
      likes: 0,
      comments: 0,
      timestamp: new Date().toLocaleString()
    };

    if (platform === 'tiktok') {
      formatted = {
        url: `https://www.tiktok.com/@${account}/video/${results.id}`,
        views: results.playCount || 0,
        likes: results.diggCount || 0,
        comments: results.commentCount || 0,
        timestamp: new Date(results.createTime * 1000).toLocaleString()
      };
    } else if (platform === 'instagram') {
      formatted = {
        url: `https://www.instagram.com/p/${results.shortCode}/`,
        views: results.displayUrl ? 'N/A' : 0,
        likes: results.likesCount || 0,
        comments: results.commentsCount || 0,
        timestamp: new Date(results.timestamp).toLocaleString()
      };
    } else if (platform === 'youtube') {
      formatted = {
        url: results.url || '',
        views: results.viewCount || 0,
        likes: results.likeCount || 0,
        comments: results.commentCount || 0,
        timestamp: results.uploadDate || new Date().toLocaleString()
      };
    }

    return Response.json(formatted);
  } catch (error) {
    console.error('Content fetch error:', error);
    return Response.json(
      { error: error.message },
      { status: 500 }
    );
  }
}
