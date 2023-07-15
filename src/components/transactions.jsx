import React from 'react'
import { ResponsiveWrapper } from '../hoc';

function transactions() {
  return (
    <h1 className="text-3xl font-bold">
      this the transactions page
    </h1>
  )
}

export default ResponsiveWrapper(transactions);
