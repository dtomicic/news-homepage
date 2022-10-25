import Image from 'next/image';
import navStyles from '../styles/Nav.module.css';
import logo from '../public/images/logo.svg';
import hamburger from '../public/images/icon-menu.svg';
import hamburgerClose from '../public/images/icon-menu-close.svg';

const Nav = ({open, toggleMenu}) => {
return (
    <nav className={navStyles.navigation}>
        <div className={navStyles.navigationLeft}>
            <Image src={logo} />
        </div>
        <div className={navStyles.navigationRightMobile}>
            {open ?
            <> 
                <div className={navStyles.navigationMobileBlack} />
                <div className={navStyles.navigationMobileMenu} >
                    <div className={navStyles.navigationMobileMenuIcon}>
                        <Image src={hamburgerClose} onClick={toggleMenu} />
                    </div>
                    <ul className={navStyles.navigationMenuList}>
                        <li className={navStyles.navigationMenuListItem}>Home</li>
                        <li className={navStyles.navigationMenuListItem}>New</li>
                        <li className={navStyles.navigationMenuListItem}>Popular</li>
                        <li className={navStyles.navigationMenuListItem}>Trending</li>
                        <li className={navStyles.navigationMenuListItem}>Categories</li>
                    </ul>
                </div>
            </>
            : <Image src={hamburger} onClick={toggleMenu} />}
        </div>
        <div className={navStyles.navigationRightDesktop}>
            <ul className={navStyles.navigationMenuList}>
                <li className={navStyles.navigationMenuListItem}>Home</li>
                <li className={navStyles.navigationMenuListItem}>New</li>
                <li className={navStyles.navigationMenuListItem}>Popular</li>
                <li className={navStyles.navigationMenuListItem}>Trending</li>
                <li className={navStyles.navigationMenuListItem}>Categories</li>
            </ul>
        </div>
    </nav>
  )
}
export default Nav