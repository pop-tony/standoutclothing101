export default function About(){
  return (
    <main className="page-width page-section">
      <div className="page-intro">
        <p className="eyebrow">A small independent label</p>
        <h1>Made for real life.</h1>
        <p>Standout Clothing is a West Legon shop for pieces that feel like you.</p>
      </div>
      <div className="about-layout">
        <img src="/images/model-hero.webp" alt="Standout Clothing streetwear in Accra" />
        <div className="about-copy">
          <p className="eyebrow">Our point of view</p>
          <h2>Good style should feel like your own.</h2>
          <p>We bring together comfortable fits, dependable fabrics, and a little personality. No complicated rules. Just clothes you can live in and make your own.</p>
          <p>Find us in West Legon, Accra. Come by, take your time, and find something you will wear on repeat.</p>
          <a className="text-link" href="/order">Visit the shop</a>
        </div>
      </div>
    </main>
  )
}
