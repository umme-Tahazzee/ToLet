import Footer from '@/components/shared/Footer'
import { Navbar } from '@/components/shared/Navbar'
import { getMe } from '@/services/getMe'
import React from 'react'
import DashboardSidebar from './_components/DashboardSidebar'

const Dashboard = async({children}:{children: React.ReactNode}) => {
  const user = await getMe()
  return (
    <div>
      <Navbar user={user}/>
      <main>
        {/* <DashboardSidebar/> */}
        {children}
      </main>
      <Footer/>
    </div>
  )
}

export default Dashboard