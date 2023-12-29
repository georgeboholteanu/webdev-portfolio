import type { Metadata } from 'next'
import { Inter, Poppins } from 'next/font/google'
import './globals.css'

// components
import Header from '@/components/Header';
import Footer from '@/components/Footer';

//theme
import { ThemeProvider } from '@/components/ThemeProvider'


const inter = Inter({ subsets: ['latin'] });
const poppins = Poppins({ subsets: ['latin'], weight: ['100', '200', '400', '700'] });

export const metadata: Metadata = {
  title: 'Hi! This is George!',
  description: 'Portfolio App',
  // icons: {
  //   icon: "/assets/gb-icon.ico",
  //   apple: "/assets/gb-icon.png"
  // }
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={`${poppins.className}`}>
        <ThemeProvider attribute="class" defaultTheme='dark'>
          <Header />
          {children}        
          <Footer />
        </ThemeProvider>
      </body>
    </html>
  )
}
