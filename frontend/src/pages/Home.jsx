import { useEffect, useRef } from 'react'
import { Link } from 'react-router-dom'
import { formatPrice, PRODUCTS } from '../products.js'

export default function Home(){
  const heroRotationRef = useRef(null)
  const rotationLabelRef = useRef(null)

  useEffect(() => {
    let frame = 0
    const updateRotation = () => {
      cancelAnimationFrame(frame)
      frame = requestAnimationFrame(() => {
        const scrollableHeight = document.documentElement.scrollHeight - window.innerHeight
        const progress = scrollableHeight > 0 ? Math.min(window.scrollY / scrollableHeight, 1) : 0
        const rotation = progress * 1080
        if(heroRotationRef.current) heroRotationRef.current.style.transform = `rotateY(${rotation}deg)`
        if(rotationLabelRef.current) rotationLabelRef.current.textContent = `${Math.round(rotation)}°`
      })
    }

    window.addEventListener('scroll', updateRotation, { passive: true })
    window.addEventListener('resize', updateRotation, { passive: true })
    updateRotation()
    return () => {
      window.removeEventListener('scroll', updateRotation)
      window.removeEventListener('resize', updateRotation)
      cancelAnimationFrame(frame)
    }
  }, [])

  return (
    <main>
      <section className="home-hero page-width">
        <div className="hero-copy">
          <p className="eyebrow">Independent streetwear from West Legon, Accra</p>
          <h1>Good clothes.<br /><em>Good energy.</em></h1>
          <p className="hero-description">Everyday pieces with a point of view. Picked for the way you actually live.</p>
          <Link to="/shop" className="button button-dark">Explore the collection</Link>
          <p className="hero-footnote">Selected in Accra. Worn everywhere.</p>
        </div>
        <div className="hero-image-wrap">
          <div className="hero-3d-stage">
            <div className="hero-3d" ref={heroRotationRef}>
              <img src="/images/model-hero.webp" alt="A model wearing Standout streetwear" className="hero-image" />
            </div>
          </div>
          <p className="image-caption"><span ref={rotationLabelRef}>0°</span> The everyday uniform</p>
        </div>
      </section>

      <section className="home-products page-width section-space">
        <div className="section-heading">
          <div>
            <p className="eyebrow">A few good things</p>
            <h2>Current favourites</h2>
          </div>
          <Link to="/shop" className="text-link">Shop everything</Link>
        </div>
        <div className="product-grid">
          {PRODUCTS.slice(0, 3).map((product, index) => (
            <Link
              to={`/products/${product.slug}`}
              className="product-tile"
              key={product.name}
              onMouseMove={(event) => {
                const bounds = event.currentTarget.getBoundingClientRect()
                const x = (event.clientX - bounds.left) / bounds.width - 0.5
                const y = (event.clientY - bounds.top) / bounds.height - 0.5
                event.currentTarget.style.setProperty('--tilt-x', `${-y * 7}deg`)
                event.currentTarget.style.setProperty('--tilt-y', `${x * 7}deg`)
              }}
              onMouseLeave={(event) => {
                event.currentTarget.style.setProperty('--tilt-x', '0deg')
                event.currentTarget.style.setProperty('--tilt-y', '0deg')
              }}
            >
              <div className="product-image-wrap">
                <img src={product.image} alt={product.name} className="product-image" />
                <span className="product-index">0{index + 1}</span>
              </div>
              <div className="product-meta">
                <div><h3>{product.name}</h3><p>{product.note}</p></div>
                <span>{formatPrice(product.price)}</span>
              </div>
            </Link>
          ))}
        </div>
      </section>

      <section className="story-band fixed-photo" style={{ backgroundImage: 'url(/images/flatlay.webp)' }}>
        <div className="story-inner page-width">
          <p className="eyebrow">From Accra, with intention</p>
          <h2>Less noise.<br /><em>More you.</em></h2>
          <p>We believe getting dressed should feel easy. Thoughtful fits, useful layers, and pieces you will reach for again.</p>
          <Link to="/about" className="button button-light">A little about us</Link>
        </div>
      </section>

      <section className="editorial-band fixed-photo" style={{ backgroundImage: 'url(/images/hoodie-black.webp)' }}>
        <div className="editorial-frame">
          <p className="eyebrow">A good fit, on repeat</p>
          <h2>Made to move<br />with you.</h2>
          <p>Everyday pieces, picked to work together and wear in well.</p>
          <Link to="/shop" className="button button-dark">Find your next favourite</Link>
        </div>
      </section>

      <section className="visit-strip page-width">
        <div><p className="eyebrow">Come by</p><h2>West Legon, Accra</h2></div>
        <p>Monday to Saturday<br />9am to 7pm</p>
        <Link to="/order" className="text-link">Plan your visit</Link>
      </section>
    </main>
  )
}
