import { useState } from 'react'
import { useSearchParams } from 'react-router-dom'
import { formatPrice, PRODUCTS } from '../products.js'

export default function Order(){
  const [searchParams] = useSearchParams()
  const initialProduct = PRODUCTS.find((product) => product.slug === searchParams.get('product')) || PRODUCTS[0]
  const [selectedProduct, setSelectedProduct] = useState(initialProduct)
  const [status, setStatus] = useState('')
  const [sending, setSending] = useState(false)

  async function submitOrder(event){
    event.preventDefault()
    const form = event.currentTarget
    setSending(true)
    setStatus('')
    try{
      const apiUrl = import.meta.env.VITE_API_URL || ''
      const response = await fetch(`${apiUrl}/api/orders`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(Object.fromEntries(new FormData(form))),
      })
      if(!response.ok) throw new Error('Order could not be sent')
      setStatus('Thanks, your order request has been received.')
      form.reset()
    }catch{
      setStatus('We could not send your request. Please try again or contact us on WhatsApp.')
    }finally{
      setSending(false)
    }
  }

  return (
    <main className="page-width page-section">
      <div className="page-intro">
        <p className="eyebrow">We would love to help</p>
        <h1>Place an order</h1>
        <p>Leave your details and we will get back to you to confirm availability and delivery.</p>
      </div>
      <div className="order-layout">
        <form className="order-form" onSubmit={submitOrder}>
          <label>Full name<input name="name" autoComplete="name" placeholder="Your name" required /></label>
          <label>WhatsApp number<input name="phone" type="tel" autoComplete="tel" placeholder="+233 ..." required /></label>
          <label>Item<select name="item" value={selectedProduct.slug} onChange={(event) => setSelectedProduct(PRODUCTS.find((product) => product.slug === event.target.value))}>{PRODUCTS.map((product) => <option key={product.slug} value={product.slug}>{product.name} - {formatPrice(product.price)}</option>)}</select></label>
          <label>Size<select name="size" defaultValue={searchParams.get('size') || 'M'}><option value="S">Small</option><option value="M">Medium</option><option value="L">Large</option><option value="XL">Extra large</option></select></label>
          <button className="button button-dark" type="submit" disabled={sending}>{sending ? 'Sending...' : 'Send order request'}</button>
          {status && <p className="form-status" role="status">{status}</p>}
        </form>
        <aside className="order-aside">
          <div className="order-product-preview">
            <img src={selectedProduct.image} alt={selectedProduct.name} />
            <div><p className="eyebrow">Your selection</p><h2>{selectedProduct.name}</h2><p>{selectedProduct.note}</p><strong>{formatPrice(selectedProduct.price)}</strong></div>
          </div>
          <p className="eyebrow">Find us</p>
          <h3>West Legon<br />Accra, Ghana</h3>
          <p>Monday to Saturday<br />9am to 7pm</p>
          <a className="text-link" href="https://wa.me/233">Message us on WhatsApp</a>
        </aside>
      </div>
    </main>
  )
}
