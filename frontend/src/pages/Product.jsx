import { useState } from 'react'
import { Link, useParams } from 'react-router-dom'
import { formatPrice, PRODUCTS } from '../products.js'

const sizes = ['S', 'M', 'L', 'XL']

export default function Product(){
  const { slug } = useParams()
  const product = PRODUCTS.find((item) => item.slug === slug)
  const [size, setSize] = useState('M')

  if(!product){
    return (
      <main className="page-width page-section">
        <div className="page-intro">
          <p className="eyebrow">That piece is not here</p>
          <h1>Product not found</h1>
          <Link className="text-link" to="/shop">Back to the shop</Link>
        </div>
      </main>
    )
  }

  return (
    <main className="page-width page-section product-detail-page">
      <Link to="/shop" className="text-link back-link">Back to the shop</Link>
      <section className="product-detail">
        <div className="product-detail-image-wrap">
          <img src={product.image} alt={product.name} className={`product-detail-image${product.imageFit === 'contain' ? ' product-image-contained' : ''}`} />
        </div>
        <div className="product-detail-copy">
          <p className="eyebrow">{product.note}</p>
          <h1>{product.name}</h1>
          <p className="product-detail-price">{formatPrice(product.price)}</p>
          <p className="product-description">{product.description}</p>
          <div className="size-picker">
            <p className="size-label">Choose a size <span>Selected: {size}</span></p>
            <div className="size-options" role="group" aria-label="Choose a size">
              {sizes.map((option) => (
                <button
                  key={option}
                  type="button"
                  className={size === option ? 'size-option selected' : 'size-option'}
                  aria-pressed={size === option}
                  onClick={() => setSize(option)}
                >
                  {option}
                </button>
              ))}
            </div>
          </div>
          <Link className="button button-dark order-product-button" to={`/order?product=${product.slug}&size=${size}`}>
            Continue to order
          </Link>
          <ul className="product-details-list">
            {product.details.map((detail) => <li key={detail}>{detail}</li>)}
          </ul>
        </div>
      </section>
    </main>
  )
}
