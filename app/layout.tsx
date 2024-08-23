import './globals.css'
import type { Metadata } from 'next'
import { Poppins } from 'next/font/google'
import Navbar from './components/nav/Navbar'
import Footer from './components/footer/Footer'

const poppins = Poppins({ subsets: ['latin'], weight:
  ['400', '500']
 })


export const metadata: Metadata = {
  title: 'SUIT COTTAGE',
  description: 'Mordern Online Suits Store For Men',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={`${poppins.className}
      text-slate-700`}>
        <div className='flex flex-col min-h-screen'>
          <Navbar/>
          <main className='flex-grow bg-pink-100'>
            {children}
          </main>
          <Footer/>
        </div>
      </body>
    </html>
  )
}
