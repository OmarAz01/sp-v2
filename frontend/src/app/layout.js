import {Geist, Geist_Mono} from 'next/font/google'
import './globals.css'

export const metadata = {
  title: 'SupplementPicks – Compare the Best Supplements',
  description: 'Generated by create next app',
}

export default function RootLayout({children}) {
  return (
    <html lang='en'>
      <body className={`bg-background p-2`}>{children}</body>
    </html>
  )
}
