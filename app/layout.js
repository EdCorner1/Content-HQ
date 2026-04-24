export const metadata = {
  title: 'Clawbite & Detris · Content Partnership Dashboard',
  description: 'Live content delivery and payment tracker',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link
          href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700;800&display=swap"
          rel="stylesheet"
        />
        <style>{`
          * { box-sizing: border-box; }
          html, body { margin: 0; padding: 0; }
          body { font-family: 'Inter', -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif; }
          @keyframes pulse {
            0%, 100% { opacity: 1; transform: scale(1); }
            50% { opacity: 0.4; transform: scale(0.85); }
          }
          button:hover { opacity: 0.9; }
          input:focus { border-color: #dc2626 !important; background: #fff !important; }
          @media (max-width: 768px) {
            h1 { font-size: 28px !important; }
          }
        `}</style>
      </head>
      <body>{children}</body>
    </html>
  )
}
