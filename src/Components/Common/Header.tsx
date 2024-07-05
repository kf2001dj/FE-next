import Link from 'next/link';
import styles from './Header.module.scss';

const Header = () => {
  return (
    <header className={styles.header}>
      <nav>
        <ul>
          <li><Link href="/user/home">Home</Link></li>
          <li><Link href="/user/blog">Blog</Link></li>
          <li><Link href="/user/services">Services</Link></li>
          <li><Link href="/user/shop">Shop</Link></li>
          <li><Link href="/user/developers">Developers</Link></li>
          <li><Link href="/user/about">About</Link></li>
          <li><Link href="/user/login">Login</Link></li>
          <li><Link href="/user/register">Register</Link></li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
