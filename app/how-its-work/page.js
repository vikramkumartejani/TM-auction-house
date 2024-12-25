import React from 'react'
import DashboardLayout from '../components/DashboardLayout'
import Tabs from './components/Tabs'
import Accordion from './components/Accordion'
import DashboardNavbar from '../components/DashboardNavbar'

const page = () => {
  return (
    <DashboardLayout>
        <div className='md:hidden block'>
          <DashboardNavbar/>
        </div>
        <div>
            <Tabs/>
        </div>
    </DashboardLayout>
  )
}

export default page