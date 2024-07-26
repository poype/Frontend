'use client'
// Error component has to be a client side component

import React from 'react'

interface Props {
  error: Error
}

const ErrorPage = ({ error }: Props) => {
  console.error(error);
  return (
    <div>An unexpected error has occured.</div>
  )
}

export default ErrorPage

// we can have error pages or error files at different levels of application routes.
// the error.tsx file in app folder can catch any error in any pages.
// But we can also create custom error pages for specific parts of our application.