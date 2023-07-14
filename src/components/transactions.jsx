import React from 'react'
import { ResponsiveWrapper } from '../hoc';

function transactions() {
  return (
    <h1 className="text-3xl font-bold">
      transactions
    </h1>
  )
}

export default ResponsiveWrapper(transactions);
