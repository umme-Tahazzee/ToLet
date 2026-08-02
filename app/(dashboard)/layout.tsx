import { Navbar } from '@/components/shared/Navbar'
import { getMe } from '@/services/getMe'
import React from 'react'

const Dashboard = async({children}:{children: React.ReactNode}) => {
  const user = await getMe()
  return (
    <div>
      <Navbar user={user}/>
      <main>
        {children}
      </main>
    </div>
  )
}

export default Dashboard