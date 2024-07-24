import React, { ReactNode } from 'react'

interface Props {
  children: ReactNode;
}

const AdminLayout = ({ children }: Props) => {
  return (
    <div className='flex'>
      <aside className='bg-slate-200 p-5'>Admin Sidebar</aside>
      <div>{children}</div>
    </div>
  )
}

export default AdminLayout


// We use layout to create UI that is shared between multiple pages.
// the aside UI defined here will be shared by all pages which under admin folder