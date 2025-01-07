// pages/menu.tsx
import Navbar from '../components/Navbar';

const Menu = () => {
  return (
    <div className="menuContainer">
      <Navbar />
      <h1>Our Menu</h1>
      <div className="pizzaList">
        <div className="pizzaItem">
          <img src="/pizza1.jpg" alt="Pizza 1" className="pizzaImage" />
          <h2>Margherita Pizza</h2>
          <p>Classic pizza with mozzarella, basil, and tomatoes.</p>
        </div>
        <div className="pizzaItem">
          <img src="/pizza2.jpg" alt="Pizza 2" className="pizzaImage" />
          <h2>Pepperoni Pizza</h2>
          <p>Delicious pizza topped with pepperoni and cheese.</p>
        </div>
        <div className="pizzaItem">
          <img src="/pizza3.jpg" alt="Pizza 3" className="pizzaImage" />
          <h2>Veggie Supreme</h2>
          <p>Loaded with fresh veggies, cheese, and tomato sauce.</p>
        </div>
        <div className="pizzaItem">
          <img src="/pizza4.jpg" alt="Pizza 4" className="pizzaImage" />
          <h2>BBQ Chicken</h2>
          <p>Smoked chicken with BBQ sauce and cheese.</p>
        </div>
        <div className="pizzaItem">
          <img src="/pizza5.jpg" alt="Pizza 5" className="pizzaImage" />
          <h2>Hawaiian</h2>
          <p>Ham, pineapple, and cheese with a sweet BBQ sauce.</p>
        </div>
        <div className="pizzaItem">
          <img src="/pizza6.jpg" alt="Pizza 6" className="pizzaImage" />
          <h2>Four Cheese</h2>
          <p>A cheesy delight with mozzarella, cheddar, gouda, and parmesan.</p>
        </div>
      </div>
    </div>
  );
}

export default Menu;
