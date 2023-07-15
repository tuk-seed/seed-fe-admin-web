import React from 'react'
import { ResponsiveWrapper } from '../hoc';

function forgot_password() {
  return (
    <h1 className="text-3xl font-bold">
      forgot password
    </h1>
  )
}

export default ResponsiveWrapper(forgot_password);