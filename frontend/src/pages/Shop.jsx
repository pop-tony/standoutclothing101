import { Link } from 'react-router-dom'
import { formatPrice, PRODUCTS } from '../products.js'

export default function Shop(){
  return (
    <main className="page-width page-section">
      <div className="page-intro">
        <p className="eyebrow">Thoughtful things to wear</p>
        <h1>The shop</h1>
        <p>Everyday layers and easy favourites, selected in West Legon.</p>
      </div>
      <div className="product-grid shop-grid">
        {PRODUCTS.map((product,i)=>(
          <Link to={`/products/${product.slug}`} key={product.slug} className="product-tile">
            <div className="product-image-wrap"><img src={product.image} alt={product.name} className={`product-image${product.imageFit === 'contain' ? ' product-image-contained' : ''}`} /><span className="product-index">0{i+1}</span></div>
            <div className="product-meta"><div><h2>{product.name}</h2><p>{product.note}</p></div><span>{formatPrice(product.price)}</span></div>
          </Link>
        ))}
      </div>
    </main>
  )
}
