import './index.css'

import React from 'react'
import ReactDOM from 'react-dom'

import App from './App'

const render = (Component: React.FC) => {
  return ReactDOM.render(
    <Component />,

    document.getElementById('root')
  )
}

render(App)

if ((module as any).hot) {
  ;(module as any).hot.accept('./App', () => {
    const NextApp = require('./App').default
    render(NextApp)
  })
}
