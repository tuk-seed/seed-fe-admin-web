import React from 'react'
import { ResponsiveWrapper } from '../hoc';

function login() {
  return (
    <h1 className="text-3xl font-bold">
      login
    </h1>
  )
}

export default ResponsiveWrapper(login);
