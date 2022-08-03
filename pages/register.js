import React from 'react'
import styles from '../styles/Home.module.css'
import InputField from '../components/InputField';
import NavBar from '../components/NavBar';

export default function Register() {
  return (
    <main className={styles.main}>
        <div className='bg-gray-200 rounded-2xl shadow-2xl flex w-2/3 text-center max-w-4xl'>
          <div className='w-5/5 p-5'>
            <InputField></InputField>
          </div> {/** Fields */}
        </div> {/** wrapper */}
    </main>
    
  )
}
