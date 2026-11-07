import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Header from './components/Header.jsx'
import Footer from './components/Footer.jsx'
import Home from './pages/Home.jsx'
import Shop from './pages/Shop.jsx'
import Collections from './pages/Collections.jsx'
import Lookbook from './pages/Lookbook.jsx'
import About from './pages/About.jsx'
import Product from './pages/Product.jsx'
import Order from './pages/Order.jsx'

export default function App(){
  return (
    <BrowserRouter future={{ v7_startTransition: true, v7_relativeSplatPath: true }}>
      <div className="min-h-screen flex flex-col">
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/shop" element={<Shop />} />
          <Route path="/collections" element={<Collections />} />
          <Route path="/lookbook" element={<Lookbook />} />
          <Route path="/about" element={<About />} />
          <Route path="/products/:slug" element={<Product />} />
          <Route path="/order" element={<Order />} />
        </Routes>
        <Footer />
      </div>
    </BrowserRouter>
  )
}
