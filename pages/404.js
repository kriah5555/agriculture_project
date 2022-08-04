import Link from 'next/link'
import styles from '../styles/Home.module.css'

export default function FourOhFour() {
  return (
    <main className={styles.main}>

    <div className='bg-gray-200 rounded-2xl shadow-2xl flex w-2/3 text-center max-w-4xl'>
          <div className='w-5/5 p-5'>
            <h1>404 - Page Not Found</h1>
            <Link href="/">
            <a>
                Go back home
            </a>
            </Link>
          </div> 
     </div>
     </main>


    
  )
}