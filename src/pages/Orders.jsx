
import "./Orders.css";
import { useState } from "react";

const PRODUCTS = [
  {
    id: 1,
    name: "Kadak Mocha",
    description: "Chocolate aur coffee ka behtareen milaap, desi style mein.",
    price: 250,
    image: "https://tse1.mm.bing.net/th/id/OIP.A4rgoEl49RSAHJCYgWV_KgHaHa?cb=12&rs=1&pid=ImgDetMain&o=7&rm=3"
  },
  {
    id: 2,
    name: "Desi Cappuccino",
    description: "Jhag wali coffee, poli poli, masaledar twist ke saath.",
    price: 200,
    image: "https://tse4.mm.bing.net/th/id/OIP.2jlmjo0AyaaJV1Xr2thl7AHaE8?cb=12&rs=1&pid=ImgDetMain&o=7&rm=3"
  },
  {
    id: 3,
    name: "Latte Special",
    description: "Kadak swaad de naal, doodh aur coffee ka perfect balance.",
    price: 220,
    image: "https://thvnext.bing.com/th/id/OIP.4KAM6OXq5dxqjN8KwksURQHaGQ?o=7&cb=12rm=3&rs=1&pid=ImgDetMain&o=7&rm=3"
  },
  {
    id: 4,
    name: "Desi Espresso",
    description: "Chhoti magar jaan daar, din shuru karne ke liye perfect.",
    price: 150,
    image: "https://i.pinimg.com/originals/cf/06/3d/cf063d5361e2a65257843d9f4ebf4dc6.jpg"
  },
  {
    id: 5,
    name: "Cold Coffee Desi",
    description: "Thandi thandi, meethi meethi, garmi mein best choice.",
    price: 180,
    image: "https://i.ytimg.com/vi/g5OyKo_-Y8w/oardefault.jpg?sqp=-oaymwEkCJUDENAFSFqQAgHyq4qpAxMIARUAAAAAJQAAyEI9AICiQ3gB&rs=AOn4CLC0Jpg6JKYFEcB149uKsmClpEqUvA"
  },
  {
    id: 6,
    name: "Karak Chai",
    description: "Desi style mein bani hui, masaledar aur tez, authentic taste.",
    price: 100,
    image: "https://i.ytimg.com/vi/YmXHrZwMiGs/maxresdefault.jpg"
  }
];

const Orders = () => {
  const [ordered, setOrdered] = useState([]);

  const handleOrder = (id) => {
    setOrdered((prev) => [...prev, id]);
  };

  return (
    <div className="orders-container">
      <div className="orders-header">
        <h1>Order Your Favorite Coffee ☕</h1>
        <p>Desi coffee shop ki behtareen range, ab online order karein!</p>
      </div>
      <div className="products-grid">
        {PRODUCTS.map((product) => (
          <div className="product-card" key={product.id}>
            <img src={product.image} alt={product.name} />
            <h3>{product.name}</h3>
            <p>{product.description}</p>
            <div className="product-footer">
              <span className="product-price">Rs. {product.price}</span>
              <button
                className="order-btn"
                onClick={() => handleOrder(product.id)}
                disabled={ordered.includes(product.id)}
              >
                {ordered.includes(product.id) ? "Ordered" : "Order Now"}
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Orders;
