import React from 'react'
import Container from '../Container'
import FooterList from './FooterList'
import Link from 'next/link'

const Footer = () => {
  return (
    <footer className="bg-slate-700
    text-slate-200 
    text-sm 
    mt-16">
      <Container>
        <div className="flex flex-col md:flex-row
        justify-between pt-16 pb-8">
          <FooterList>
            <h3 className="text-base font-bold
            mb-2">Shop Categories</h3>
            <Link href="#">Suits</Link>
            <Link href="#">Casual</Link>
            <Link href="#">Shirts</Link>
            <Link href="#">Wedding</Link>
            <Link href="#">Trousers</Link>
            <Link href="#">Jackets</Link>
          </FooterList>
        </div>
      </Container>
    </footer>
  )
}

export default Footer
