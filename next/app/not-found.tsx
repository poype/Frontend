import React from 'react'

const NotFoundPage = () => {
  return (
    <div>The requested page doesn&apos;t exist</div>
  )
}

export default NotFoundPage

// if we put a sperate not-found.tsx file in one folder, it will use that file as not-found error page. 
// otherwise it will this file as not-found error page.