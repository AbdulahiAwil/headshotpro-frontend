import { getCurrentUserServer } from '@/lib/util'
import { getDashboardPath } from '@/lib/util/role-util'
import { redirect } from 'next/navigation'
import React from 'react'

const DashboardPage = async () => {

    const user = await getCurrentUserServer()

    const dashboardPath = getDashboardPath((user?.role))

    redirect(dashboardPath);
  
}

export default DashboardPage