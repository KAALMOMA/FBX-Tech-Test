import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import '../styles/globals.css'
import { UserProvider } from '@auth0/nextjs-auth0/client'
import Script from 'next/script'
import CubesBgInit from '@/components/CubesBgInit'

declare global {
  interface Window {
    Color4Bg?: any;
  }
}

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'FBX | Home',
  description: 'Empowering the Next Generation of Makers - Robotics kits, 3D printers, and hands-on curricula to bring STEM learning to life.',
  icons: {
    icon: '/images/fbx-logo-small.png',
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
      </head>
      <body className={inter.className}>
        <UserProvider>
          {/* Animated Background Container */}
          <div id="box"></div>
          {/* Load the animated background script */}
          <Script src="/scripts/RandomCubesBg.min.js" strategy="afterInteractive" />
          <CubesBgInit />
          <Script id="init-cubes-bg" strategy="afterInteractive">
            {`
              if (window.Color4Bg && window.Color4Bg.RandomCubesBg) {
                new window.Color4Bg.RandomCubesBg({
                  dom: "box",
                  colors: ["#dedede", "#d4d4d4", "#e8e8e8", "#ebebeb"],
                  loop: true,
                });
              }
            `}
          </Script>
          {children}
        </UserProvider>
      </body>
    </html>
  )
} 