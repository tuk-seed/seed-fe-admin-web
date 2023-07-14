import React from 'react'
import { ResponsiveWrapper } from '../hoc';

function home() {
  return (
    <h1 className="text-3xl font-bold">
      React is a free and open-source front-end JavaScript library for building user interfaces based on components. It is maintained by Meta and a community of individual developers and companies. React can be used to develop single-page, mobile, or server-rendered applications with frameworks like Next.js
  </h1>
  )
}

export default ResponsiveWrapper(home);
