import './Services.css';

function Services(){
    return(
        <div className="services-container">
            <div className="services-header">
                <h1>ہماری خدمات | Our Services</h1>
                <p>Hamari Desi Coffee Shop ki Behtareen Services</p>
            </div>

            <div className="services-intro">
                <h2>کیا آپ کو پتہ ہے؟</h2>
                <p>Hum sirf coffee nahi bechte, hum aap ko ek shandar tajurba dete hain. Hamari har service customer ki khushi ke liye hai.</p>
            </div>

            <div className="table-container">
                <h2>Coffee Menu & Services</h2>
                <table className="services-table">
                    <thead>
                        <tr>
                            <th>Image</th>
                            <th>Coffee Name</th>
                            <th>Description</th>
                            <th>Price</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td><img src='https://tse1.mm.bing.net/th/id/OIP.A4rgoEl49RSAHJCYgWV_KgHaHa?cb=12&rs=1&pid=ImgDetMain&o=7&rm=3' alt="Mocha" /></td>
                            <td>Kadak Mocha</td>
                            <td>Chocolate aur coffee ka behtareen milaap, desi style mein</td>
                            <td>Rs. 250</td>
                        </tr>
                        <tr>
                            <td><img src='https://tse4.mm.bing.net/th/id/OIP.2jlmjo0AyaaJV1Xr2thl7AHaE8?cb=12&rs=1&pid=ImgDetMain&o=7&rm=3' alt="Cappuccino" /></td>
                            <td>Desi Cappuccino</td>
                            <td>Jhag wali coffee, poli poli, masaledar twist ke saath</td>
                            <td>Rs. 200</td>
                        </tr>
                        <tr>
                            <td><img src='https://thvnext.bing.com/th/id/OIP.4KAM6OXq5dxqjN8KwksURQHaGQ?o=7&cb=12rm=3&rs=1&pid=ImgDetMain&o=7&rm=3' alt="Latte" /></td>
                            <td>Latte Special</td>
                            <td>Kadak swaad de naal, doodh aur coffee ka perfect balance</td>
                            <td>Rs. 220</td>
                        </tr>
                        <tr>
                            <td><img src='https://i.pinimg.com/originals/cf/06/3d/cf063d5361e2a65257843d9f4ebf4dc6.jpg' alt="Espresso" /></td>
                            <td>Desi Espresso</td>
                            <td>Chhoti magar jaan daar, din shuru karne ke liye perfect</td>
                            <td>Rs. 150</td>
                        </tr>
                        <tr>
                            <td><img src='https://i.ytimg.com/vi/g5OyKo_-Y8w/oardefault.jpg?sqp=-oaymwEkCJUDENAFSFqQAgHyq4qpAxMIARUAAAAAJQAAyEI9AICiQ3gB&rs=AOn4CLC0Jpg6JKYFEcB149uKsmClpEqUvA' alt="Cold Coffee" /></td>
                            <td>Cold Coffee Desi</td>
                            <td>Thandi thandi, meethi meethi, garmi mein best choice</td>
                            <td>Rs. 180</td>
                        </tr>
                        <tr>
                            <td><img src='https://i.ytimg.com/vi/YmXHrZwMiGs/maxresdefault.jpg' alt="Karak Chai" /></td>
                            <td>Karak Chai</td>
                            <td>Desi style mein bani hui, masaledar aur tez, authentic taste</td>
                            <td>Rs. 100</td>
                        </tr>
                    </tbody>
                </table>
            </div>

            <div className="additional-services">
                <h2>Additional Services</h2>
                <div className="service-cards">
                    <div className="service-card">
                        <div className="service-icon">🚚</div>
                        <h3>Home Delivery</h3>
                        <p>Ghar baithe coffee mangwayen, 30 minutes mein delivery</p>
                    </div>
                    <div className="service-card">
                        <div className="service-icon">🎂</div>
                        <h3>Party Orders</h3>
                        <p>Bulk orders ke liye special discount aur packages</p>
                    </div>
                    <div className="service-card">
                        <div className="service-icon">📱</div>
                        <h3>Online Booking</h3>
                        <p>Phone ya website se asani se order karen</p>
                    </div>
                    <div className="service-card">
                        <div className="service-icon">💳</div>
                        <h3>Easy Payment</h3>
                        <p>Cash, Card, JazzCash, Easypaisa sab accepted</p>
                    </div>
                </div>
            </div>
        </div>
    );
 }

export default Services;