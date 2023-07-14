import React from 'react'
import { ResponsiveWrapper } from '../hoc';

function customer_queue() {
  return (
    <h1 className="text-3xl font-bold">
      customer_queue
    </h1>
  )
}

export default ResponsiveWrapper(customer_queue);
