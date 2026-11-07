import { Link, NavLink } from 'react-router-dom'

const links = [
	['Shop', '/shop'],
	['Collections', '/collections'],
	['Lookbook', '/lookbook'],
	['Our story', '/about'],
]

export default function Header(){
	return (
		<header className="site-header">
			<div className="site-header-inner">
				<Link to="/" className="brand-mark" aria-label="Standout Clothing home">
					<span>STANDOUT</span>
					  <small>CLOTHING 101 ACCRA</small>
				</Link>
				<nav className="main-nav" aria-label="Main navigation">
					{links.map(([label, path]) => (
						<NavLink key={path} to={path} className={({ isActive }) => isActive ? 'nav-link active' : 'nav-link'}>
							{label}
						</NavLink>
					))}
				</nav>
				<Link to="/order" className="header-order">Place an order</Link>
			</div>
		</header>
	)
}
