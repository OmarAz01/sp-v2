import {Geist, Geist_Mono} from 'next/font/google'
import Link from 'next/link'
import Image from 'next/image'
import './globals.css'
import Head from 'next/head'

export const metadata = {
  title: 'SupplementPicks – Compare the Best Supplements',
  description:
    'Discover top protein powders, pre-workouts, and more ranked by ingredients, price, and user reviews.',
  icons: [
    {
      rel: 'icon',
      type: 'image/png',
      sizes: '16x16',
      url: '/favicon-16x16.png',
    },
    {
      rel: 'apple-touch-icon',
      sizes: '180x180',
      url: '/apple-touch-icon.png',
    },
    {
      rel: 'manifest',
      url: '/site.webmanifest',
    },
    {
      rel: 'icon',
      url: '/favicon.ico',
    },
  ],
}

export default function RootLayout({children}) {
  return (
    <html lang='en'>
      <body className={`bg-background p-2 flex flex-col items-center`}>
        <header className='w-full max-w-screen-xl mx-auto'>
          <nav className='flex justify-between items-center w-full px-4 border-b border-borderColor'>
            <div className='flex items-center space-x-1'>
              <Link href='/' className='sm:text-2xl text-base font-bold text-brandName sm:pb-0.5'>
                SupplementPicks
              </Link>
              <Image src='/hero.png' alt='Hero Image' width={34} height={24} />
            </div>

            <ul className='flex space-x-6 text-textPrimary sm:text-lg text-base'>
              <li>
                <Link className='hover:underline' href='/directory'>
                  Directory
                </Link>
              </li>
            </ul>
          </nav>
        </header>
        <main className='max-w-screen-xl mx-auto mb-26 sm:mb-12 md:mb-0'>{children}</main>
        <footer className='border-t border-borderColor py-4 fixed bottom-0 w-full max-w-screen-xl bg-background z-10'>
          <div className='max-w-screen-xl mx-auto px-4 text-center text-textPrimary'>
            <p className='text-xs mt-2'>
              For inquiries, please email{' '}
              <Link href='mailto:omaralzoubi001@gmail.com' className='text-brandName'>
                omaralzoubi001@gmail.com
              </Link>
              .
            </p>
            <p className='text-xs mt-2'>
              <Link href='/privacy-policy' className='text-brandName font-bold hover:underline'>
                Privacy Policy
              </Link>{' '}
              |{' '}
              <Link href='/terms-of-service' className='text-brandName font-bold hover:underline'>
                Terms of Service
              </Link>
            </p>
            <p className='text-sm mt-2'>
              &copy;{new Date().getFullYear()} SupplementPicks. All rights reserved.
            </p>
          </div>
        </footer>
      </body>
    </html>
  )
}
