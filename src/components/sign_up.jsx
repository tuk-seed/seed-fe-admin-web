import React from 'react'
import { ResponsiveWrapper } from '../hoc';

function signup() {
  return (
    <h1 className="text-3xl font-bold">
      signup
    </h1>
  )
}

export default ResponsiveWrapper(signup);
