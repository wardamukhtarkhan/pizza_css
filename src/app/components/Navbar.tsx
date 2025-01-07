// components/Navbar.tsx
import Link from 'next/link';

const Navbar = () => {
  return (
    <nav className="navbar">
      <ul className="navList">
        <li><Link href="/">Home</Link></li>
        <li><Link href="/menu">Menu</Link></li>
        <li><Link href="/about">About</Link></li>
        <li><Link href="/contact">Contact</Link></li>
      </ul>
    </nav>
  );
}

export default Navbar;
