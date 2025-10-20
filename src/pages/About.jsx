
import './About.css';

function About() {
    return (
      <div className="about-container">
        {/* Hero Section */}
        <div className="about-header">
          <h1>ہمارے بارے میں | About Us</h1>
          <p>Hamari Kahani, Hamara Jazba, Hamari Coffee</p>
        </div>

        {/* Our Story Section */}
        <section className="story-section">
          <div className="story-content">
            <div className="story-text">
              <h2>Hamari Kahani</h2>
              <p>
                2010 mein, ek chhoti si dukaan se humara safar shuru hua. Hamara khwaab tha ke 
                Pakistan mein behtareen desi style coffee shop kholi jaye jahan log apni 
                family aur doston ke saath waqt guzar sakein.
              </p>
              <p>
                Aaj, 15 saal baad, hum Pakistan ki sabse mashoor desi coffee shop ban chuke hain. 
                Hamari har cup mein mohabbat, mehnat aur authentic desi taste hai jo aap ko 
                yaad rakhega.
              </p>
              <p>
                Hamari success ki wajah sirf aik hai - <strong>Aap ki mohabbat aur bharosa</strong>. 
                Har customer hamara dost hai, har order ek nayi dosti hai.
              </p>
            </div>
            <div className="story-image">
              <img src="https://images.unsplash.com/photo-1442512595331-e89e73853f31?w=600" alt="Coffee Shop" />
            </div>
          </div>
        </section>

        {/* Mission & Vision */}
        <section className="mission-section">
          <div className="mission-cards">
            <div className="mission-card">
              <div className="mission-icon">🎯</div>
              <h3>Hamara Mission</h3>
              <p>
                Har Pakistani ko behtareen quality ki coffee, desi andaaz mein, 
                reasonable rates par dena hai. Hum chahte hain ke coffee peena 
                ek special tajurba ban jaye, na ke sirf ek drink.
              </p>
            </div>
            <div className="mission-card">
              <div className="mission-icon">👁️</div>
              <h3>Hamara Vision</h3>
              <p>
                Pakistan ki har city mein apni dukaan kholna aur desi coffee culture 
                ko promote karna. Hum chahte hain ke log apni yaadein hamari coffee 
                ke saath jor kar dekhen.
              </p>
            </div>
            <div className="mission-card">
              <div className="mission-icon">💎</div>
              <h3>Hamari Values</h3>
              <p>
                Quality par koi compromise nahi, customer ki khushi hamari pehli 
                priority, aur har cup mein dil se service. Yeh hamari values hain 
                jo hum kabhi nahi bhoolte.
              </p>
            </div>
          </div>
        </section>

        {/* Why Choose Us */}
        <section className="why-choose-section">
          <h2>Hum Ko Kyun Choose Karen?</h2>
          <div className="why-choose-grid">
            <div className="why-card">
              <span className="why-icon">☕</span>
              <h4>100% Authentic</h4>
              <p>Original desi taste jo aap kahin aur nahi milegi</p>
            </div>
            <div className="why-card">
              <span className="why-icon">🌿</span>
              <h4>Fresh Ingredients</h4>
              <p>Har din taza saman se coffee banti hai</p>
            </div>
            <div className="why-card">
              <span className="why-icon">👨‍🍳</span>
              <h4>Expert Baristas</h4>
              <p>Trained professionals jo coffee ka jaadu jante hain</p>
            </div>
            <div className="why-card">
              <span className="why-icon">💰</span>
              <h4>Affordable Prices</h4>
              <p>Best quality, best price - yeh hai hamara promise</p>
            </div>
            <div className="why-card">
              <span className="why-icon">🏆</span>
              <h4>Award Winning</h4>
              <p>Multiple awards aur hazaron khush customers</p>
            </div>
            <div className="why-card">
              <span className="why-icon">❤️</span>
              <h4>Made with Love</h4>
              <p>Har cup mein mohabbat aur care hai</p>
            </div>
          </div>
        </section>

        {/* Stats Section */}
        <section className="stats-section">
          <div className="stat-box">
            <h3>15+</h3>
            <p>Years Experience</p>
          </div>
          <div className="stat-box">
            <h3>50K+</h3>
            <p>Happy Customers</p>
          </div>
          <div className="stat-box">
            <h3>25+</h3>
            <p>Coffee Varieties</p>
          </div>
          <div className="stat-box">
            <h3>10+</h3>
            <p>Locations</p>
          </div>
        </section>

        {/* Team Section */}
        <section className="team-section">
          <h2>Hamari Team</h2>
          <p className="team-subtitle">Woh log jo din raat mehnat karte hain aap ki khushi ke liye</p>
          <div className="team-grid">
            <div className="team-member">
              <div className="member-avatar">👨‍💼</div>
              <h4>Shaheer Ul Hassan</h4>
              <p className="member-role">Founder & CEO</p>
              <p className="member-bio">Coffee ka junoon aur business ka dimaag</p>
            </div>
                        <div className="team-member">
              <div className="member-avatar">👩‍💼</div>
              <h4>Samreen Aslam</h4>
              <p className="member-role">Operations Manager</p>
              <p className="member-bio">Sab kuch behtar chalane wali</p>
            </div>
            <div className="team-member">
              <div className="member-avatar">👨‍🍳</div>
              <h4>Umair Ashraf</h4>
              <p className="member-role">Head Barista</p>
              <p className="member-bio">15 saal ka tajurba, coffee ka ustaad</p>
            </div>

            <div className="team-member">
              <div className="member-avatar">👩‍💼</div>
              <h4>Amna Iqbal</h4>
              <p className="member-role">Quality Manager</p>
              <p className="member-bio">Quality par nazar rakhne wali</p>
            </div>
          </div>
        </section>

        {/* Call to Action */}
        <section className="cta-section">
          <h2>Aaj Hi Visit Karen!</h2>
          <p>Hamari dukaan par aayen aur experience karen asli desi coffee ka maza</p>
          <div className="cta-buttons">
            <a href="/contact" className="cta-button primary">Contact Us</a>
            <a href="/orders" className="cta-button secondary">Order Now</a>
          </div>
        </section>
      </div>
    );
  }
  
  export default About;  