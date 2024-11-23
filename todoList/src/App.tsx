import React from 'react'
import ReactDOM from 'react-dom/client'

import './index.scss'
import List from './components/List'

const App = () => (
  <div className="max-w-6xl mx-auto mt-10 text-3xl">
    <List />
  </div>
)
const rootElement = document.getElementById('app')
if (!rootElement) throw new Error('Failed to find the root element')

const root = ReactDOM.createRoot(rootElement as HTMLElement)

root.render(<App />)