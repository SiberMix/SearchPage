import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.scss'
import App from './components/App'

import { QueryClient, QueryClientProvider } from '@tanstack/react-query'

const querySelector = new QueryClient()
const root = ReactDOM.createRoot(document.getElementById('root'))
root.render(
  <React.StrictMode>
    <QueryClientProvider client={querySelector}>
      <App />
    </QueryClientProvider>
  </React.StrictMode>
)
