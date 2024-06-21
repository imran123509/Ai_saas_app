import SideBar from '@/components/share/SideBar'
import React from 'react'

function Layout({children}: {children: React.ReactNode}) {
  return (
    <main className='root'>
      <SideBar />
        <div className='root-container'>
          <div className='wraper'>
               {children}
          </div>
        </div>
      
    </main>
  )
}

export default Layout
