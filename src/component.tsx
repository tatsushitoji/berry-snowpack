import React, { FC, useState } from 'react'

type Props = {
  message: string
}


export const App: FC<Props> = ({ message }) => {
  const [count, setCount] = useState(0)

  return (
    <>
      <h1>{message} {count}</h1>
      <button onClick={() => setCount(count + 1)}>increment</button>
    </>
  )
}
