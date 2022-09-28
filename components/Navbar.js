import Link from 'next/link'
import React from 'react'

export default function Navbar() {
  return (
    <div>
        <div>
            <Link href='/'>
                <h1>Agriculture logo and text here</h1>
            </Link>
            <ul>
                <li>
                    <Link href='/'>Home</Link>
                </li>
                <li>
                    <Link href='/#gallery'>Gallery</Link>
                </li>
                <li>
                    <Link href='/portfolio'>Work</Link>
                </li>
                <li>
                    <Link href='/contact'>Contact</Link>
                </li>
            </ul>
        </div>
    </div>
  )
}
