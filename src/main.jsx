import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import Hero from './Hero'
import Featured from './Featured'
import Delivery from './Delivery'
import Hotdeal from './Hotdeal'
import NewsLetter from './NewsLetter'
import Footer from './Footer'


createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Hero></Hero>
    <Featured></Featured>
    <Delivery></Delivery>
    <Hotdeal></Hotdeal>
    <NewsLetter></NewsLetter>
    <Footer></Footer>
  </StrictMode>,
)
