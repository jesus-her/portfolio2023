import './globals.css'
import { Inter } from 'next/font/google'
import ActiveSectionContextProvider from '@/context/active-section-context'
import Footer from '@/components/footer'
import ThemeContextProvider from '@/context/theme-context'
import { Toaster } from 'react-hot-toast'
import NavBar from '@/components/navbar'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'Jesus H.',
  description: 'Jesus Hernandez Nava, personal portfolio'
}

export default function RootLayout ({
  children
}: {
  children: React.ReactNode
}) {
  return (
    <html lang='en' className='!scroll-smooth'>
      <body
        className={`${inter.className}  text-gray-950 relative pt-4
          dark:text-gray-50 dark:text-opacity-100 noise overflow-x-hidden `}
      >
        <ThemeContextProvider>
          <ActiveSectionContextProvider>
            <NavBar />

            {children}
            <Footer />

            <Toaster position='top-right' />
          </ActiveSectionContextProvider>
        </ThemeContextProvider>
      </body>
    </html>
  )
}
