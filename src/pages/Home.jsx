
import "./Home.css";
import { NavLink } from "react-router-dom";


const Home = () => {

  return (
    <div className="home-container">
      {/* Hero Section */}
      <section className="hero-section">
        <h1>Hamari Dukaan pe Swagat hai</h1>
        <p>
          Hamary Haan har qism ki coffee dastyaab hai, jo aap ke din ko behtareen
          banati hai.
        </p>

        <ul>
          <li>
                    <NavLink to={'/Orders'} className="Button">Order Kro</NavLink>
                </li>
        </ul>
      </section>

      {/* About Section */}
      <section className="about-section">
        <h2>Hamari Adhuri Kahani</h2>
        <p>
          Certified Coffee 2010 mein qaim hui, ek chhoti si dukaan se jo ab ek
          mashhoor coffee brand ban chuki hai. Humari koshish hai ke hum behtareen
          quality aur taste aap tak pohanchayen.
        </p>
      </section>

      {/* Featured Menu Preview */}
      <section className="featured-section">
        <h2>Featured Coffee</h2>
        <div className="card-container">
          <div className="card">
            <img src="https://thvnext.bing.com/th/id/OIP.4KAM6OXq5dxqjN8KwksURQHaGQ?o=7&cb=12rm=3&rs=1&pid=ImgDetMain&o=7&rm=3" alt="" />
            <h3>Latte</h3>
            <p>Kadak Swaad de naal</p>
          </div>
          <div className="card">
            <img src="https://tse4.mm.bing.net/th/id/OIP.2jlmjo0AyaaJV1Xr2thl7AHaE8?cb=12&rs=1&pid=ImgDetMain&o=7&rm=3" alt="" />
            <h3>Cappuccino</h3>
            <p>jhag wali coffee poli poli</p>
          </div>
          <div className="card">
            <img src="https://tse1.mm.bing.net/th/id/OIP.A4rgoEl49RSAHJCYgWV_KgHaHa?cb=12&rs=1&pid=ImgDetMain&o=7&rm=3" alt="" />
            <h3>Mocha</h3>
            <p>chocolate ty coffee da milaap</p>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;


// function Home() {
//     return (
//       <div>
//         <h1>Welcome to the Home Page</h1>
//         <p>This is the main landing page of the application.</p>
//       </div>
//     );
//   }
  
//   export default Home;  