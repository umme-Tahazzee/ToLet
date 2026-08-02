import Footer from '@/components/shared/Footer'
import { Navbar } from '@/components/shared/Navbar'
import { getMe } from '@/services/getMe'
import React from 'react'

const PublicLayout = async({children}:{children: React.ReactNode}) => {
  const user = await getMe()
  return (
    <div>
      <Navbar user={user}/>
      <main>
        {children}
      </main>
      <Footer/>
    </div>
  )
}

export default PublicLayout