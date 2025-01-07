// pages/index.tsx
import Navbar from './components/Navbar';

const Home = () => {
  return (
    <div className="container">
      <Navbar />
      <header className="header">
        <h1>Welcome to Pizza World!</h1>
        <p>Best pizzas in town, delivered fresh to your door.</p>
      </header>
      <section className="hero">
        <img src="/home-bg.jpg" alt="Delicious pizza" className="heroImage" />
      </section>
      <footer className="footer">
        <p>© 2024 Pizza World. All Rights Reserved.</p>
      </footer>
    </div>
  );
}

export default Home;

