export const metadata = {
  title: 'Content Partnership Dashboard',
  description: 'Clawbite & Detris Content Partnership Tracker',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body style={{ margin: 0 }}>{children}</body>
    </html>
  )
}
