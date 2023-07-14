import React from 'react'
import { ResponsiveWrapper } from '../hoc';

function current_load() {
  return (
    <h1 className="text-3xl font-bold">
      current_load
    </h1>
  )
}

export default ResponsiveWrapper(current_load);
