import Footer from '@/components/shared/Footer'
import { Navbar } from '@/components/shared/Navbar'
import { Sidebar } from '@/components/shared/Sidebar'
import { getMe } from '@/services/getMe'
import React from 'react'

const Dashboard = async({children}:{children: React.ReactNode}) => {
  const user = await getMe()
  return (
    <div className="flex flex-col h-screen">
      <Navbar user={user}/>
      <div className="flex flex-1 overflow-hidden">
        <Sidebar user={user}/>
        <main className="flex-1 overflow-y-auto">
          {children}
        </main>
      </div>
      <Footer/>
    </div>
  )
}

export default Dashboard
