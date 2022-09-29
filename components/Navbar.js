import Link from 'next/link'
import React, { useStats, useEffect} from 'react'
import { AiOutlineMenu, AiOutlineClose, AiFillWindows } from 'react-icons/ai'

export default function Navbar() {
    // const [nav, setNav] = useStats(false)
    // const handleNav = () => {
    //     setNav(!nav)
    // const [color, setColor] = useStats('transparent')
    // const [setextColor, setTextColor] = useStats('white')

    // useEffect(() => {
    //     const changeColor = () => {
    //         if(window.scrollBy >= 90) {
    //             setColor('#ffffff')
    //             setTextColor('#000000')
    //         } else {
    //             setColor('transparent')
    //             setTextColor('#ffffff')
    //         }
    //     }

    //     window.addEventListener('scroll', changeColor)
    // }, [])
  return (
    <div className='fixed left-0 top-0 w-full z=10 ease-in duration-300'>
        <div className='max-w-[1240px] m-auto flex justify-between items-center p-4 text-white'>
            <Link href='/'>
                <h1 className='fint-bold text-4xl'>Agriculture logo and text here</h1>
            </Link>
            <ul className=' hidden sm:flex'>
                <li className='p-4'>
                    <Link href='/'>Home</Link>
                </li>
                <li className='p-4'>
                    <Link href='/#gallery'>Gallery</Link>
                </li>
                <li className='p-4'>
                    <Link href='/portfolio'>Work</Link>
                </li>
                <li className='p-4'>
                    <Link href='/contact'>Contact</Link>
                </li>
            </ul>

            {/** mobile button */}
            <div className='block sm:hidden z-10'>
                <AiOutlineMenu size={20}/>  
            </div>
            {/** mobile menus */}
            <div className='sm:hidden absolute top-0 left-0 right-0 bottom-0 flex justify-center items-center w-full h-screen bg-black text-center ease-in duration-300'>
            <ul> 
                <li className='p-4 text-4xl hover:text-gray-500'>
                    <Link href='/'>Home</Link>
                </li>
                <li className='p-4 text-4xl hover:text-gray-500'>
                    <Link href='/#gallery'>Gallery</Link>
                </li>
                <li className='p-4 text-4xl hover:text-gray-500'>
                    <Link href='/portfolio'>Work</Link>
                </li>
                <li className='p-4 text-4xl hover:text-gray-500'>
                    <Link href='/contact'>Contact</Link>
                </li>
            </ul>
            </div>

        </div>
    </div>
  )
}
