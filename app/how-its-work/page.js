import React from 'react'
import DashboardLayout from '../components/DashboardLayout'
import Tabs from './components/Tabs'
import Accordion from './components/Accordion'

const page = () => {
  return (
    <DashboardLayout>
        <div>
            <Tabs/>
        </div>
    </DashboardLayout>
  )
}

export default page