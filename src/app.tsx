import React from 'react'
import { render } from 'react-dom'

import { App } from './component'

render(
  <App message="hello world" />,
  document.getElementById('app'),
)
