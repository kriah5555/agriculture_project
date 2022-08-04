import React from 'react'
import Link from 'next/link'

export default function Card({user}) {
  return (
    <div className='card'>
        <Link href={`/user`}>
            <a>
                <img
                    src="https://c4.wallpaperflare.com/wallpaper/293/952/22/iron-man-marvel-comics-superhero-the-avengers-wallpaper-thumb.jpg"
                    alt={user.name}
                    className="rounded shadow"
                />
            </a>
        </Link>
        <dev className="flex flex-col items-center justify-center p-5">
            <Link href="https://c4.wallpaperflare.com/wallpaper/293/952/22/iron-man-marvel-comics-superhero-the-avengers-wallpaper-thumb.jpg">
               <a><h2 className='text-lg'></h2></a>
            </Link>
            <p className='mb-2'>{user.name}</p>
            <p>Role : user</p>
            <button className='primary-button rounded-lg bg-blue-400 w-72 hover:bg-green-400 hover:text-white' type="button">
                View details
            </button>
        </dev>
    </div>
  )
}
