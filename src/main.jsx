import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import Hero from './Hero'
import Featured from './Featured'


createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Hero></Hero>
    <Featured></Featured>
  </StrictMode>,
)
