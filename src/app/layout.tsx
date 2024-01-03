import './globals.css';
import ThemeProvider from './components/Providers/ThemeContext';
import Navbar from './components/Navbar/index';
import Footer from './components/Footer/Footer';
import { EdgeStoreProvider } from '../lib/edgestore';
import Script from 'next/script';
export const metadata = {
  title: 'apniVidya',
  description: 'Generated by create next app',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <>
    <html lang="en" suppressHydrationWarning>
        <head />
        <body className={`flex flex-col items-center justify-center  `} >
          <EdgeStoreProvider>
          <ThemeProvider
          >
              <Navbar />
        {children}
       
        <Footer />
          </ThemeProvider>
          </EdgeStoreProvider>
      
      
      </body>
    </html>
    <Script src="https://checkout.razorpay.com/v1/checkout.js"
    />
    </>
  )
}
