import React from 'react'
import { ResponsiveWrapper } from '../hoc';

function transactions() {
  return (
    <h1 className="text-3xl font-bold">
      This is how you can use the .env file in your React js project.

Now suppose you are working on a large scale project where you need to use separate custom variables for development and production. For example, you have a test API link for development and a live API link for production and you don’t want to manually change that in each file. So there is a built-in environment variable called NODE_ENV. If we writeprocess.env.NODE_ENV and start the server npm start it will print the mode you are currently working on. It will print development for npm start, production for npm build, and test for npm test.
    </h1>
  )
}

export default ResponsiveWrapper(transactions);
