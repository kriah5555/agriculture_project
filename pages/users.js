import React from 'react'
import Card from '../components/Card'

export default function UserList({ users }) {
    // console.log(users)

  return <>
    <div className='grid drid-col-1 gap-4 md:grid-cols-3 lg:grid-cols-4'>
            {users.map((user) => {
                return(
                    <Card user={user} key={user.id}></Card>
                )
            })}
    </div>
  </>

  
}

export async function getStaticProps() {
    const response = await fetch('https://jsonplaceholder.typicode.com/users')
    const data = await response.json()
    return {
        props: {
            users: data,
        }
    }
}
