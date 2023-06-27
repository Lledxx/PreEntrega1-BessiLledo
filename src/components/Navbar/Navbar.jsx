import CartWidget from '../CartWidget/CartWidget'
import { Link, NavLink } from 'react-router-dom'
import styles from './Navbar.module.css'

const Navbar = () => {
    return (
        <nav>
            <div className={styles.cartWidget}>
                <Link to='/' className={styles.logo}>Gamertek <span>Store</span></Link>
                <CartWidget />
            </div>
            <div className={styles.navLinks}>
                <NavLink to='/' className={({isActive}) => isActive ? styles.active : styles.inactive}>Todos los productos</NavLink>
                <NavLink to={'/category/iphone'} className={({isActive}) => isActive ? styles.active : styles.inactive}>Iphone</NavLink>
                <NavLink to={'/category/ipad'} className={({isActive}) => isActive ? styles.active : styles.inactive}>Ipad</NavLink>
                <NavLink to={'/category/macbooks'} className={({isActive}) => isActive ? styles.active : styles.inactive}>Macbooks</NavLink>
                <NavLink to={'/category/apple-watch'} className={({isActive}) => isActive ? styles.active : styles.inactive}>Apple Watch</NavLink>
                <NavLink to={'/category/android'} className={({isActive}) => isActive ? styles.active : styles.inactive}>Android</NavLink>
              </div>
        </nav>
    )
}

export default Navbar