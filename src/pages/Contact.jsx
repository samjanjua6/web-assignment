
import { useState } from "react";
import "./Contact.css";

function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    message: ""
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    alert("Shukriya! Hum jald hi aap se rabta karenge. ☕");
    setFormData({ name: "", email: "", phone: "", message: "" });
  };

  return (
    <div className="contact-container">
      <div className="contact-header">
        <h1>رابطہ کریں | Contact Us</h1>
        <p className="urdu-text">ہمارے دیسی کافی شاپ میں خوش آمدید</p>
        <p>Get in touch with us for the best desi coffee experience!</p>
      </div>

      <div className="contact-content">
        {/* Contact Information */}
        <div className="contact-info">
          <div className="info-card">
            <div className="icon">📍</div>
            <h3>Our Location</h3>
            <p>123 Desi Coffee Lane</p>
            <p>UOG Mandi wali sadak pe</p>
          </div>

          <div className="info-card">
            <div className="icon">📞</div>
            <h3>Phone</h3>
            <p>03107248737</p>
          
          </div>

          <div className="info-card">
            <div className="icon">✉️</div>
            <h3>Email</h3>
            <p>info@desicoffee.pk</p>
            <p>orders@desicoffee.pk</p>
          </div>

          <div className="info-card">
            <div className="icon">⏰</div>
            <h3>Hours</h3>
            <p>Mon - Sat: 7:00 AM - 11:00 PM</p>
            <p>Sunday: 8:00 AM - 10:00 PM</p>
          </div>
        </div>

        {/* Contact Form */}
        <div className="contact-form-section">
          <h2>Send Us a Message</h2>
          <form className="contact-form" onSubmit={handleSubmit}>
            <div className="form-group">
              <label htmlFor="name">Name | نام</label>
              <input
                type="text"
                id="name"
                name="name"
                value={formData.name}
                onChange={handleChange}
                placeholder="Enter your name"
                required
              />
            </div>

            <div className="form-group">
              <label htmlFor="email">Email | ای میل</label>
              <input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                placeholder="Enter your email"
                required
              />
            </div>

            <div className="form-group">
              <label htmlFor="phone">Phone | فون</label>
              <input
                type="tel"
                id="phone"
                name="phone"
                value={formData.phone}
                onChange={handleChange}
                placeholder="+92 300 1234567"
                required
              />
            </div>

            <div className="form-group">
              <label htmlFor="message">Message | پیغام</label>
              <textarea
                id="message"
                name="message"
                value={formData.message}
                onChange={handleChange}
                placeholder="Tell us what you'd like..."
                rows="5"
                required
              ></textarea>
            </div>

            <button type="submit" className="submit-btn">
              Send Message ☕
            </button>
          </form>
        </div>
      </div>

      {/* Map or Additional Info */}
      <div className="additional-info">
        <h3>Why Choose Our Desi Coffee?</h3>
        <div className="features">
          <div className="feature">
            <span className="feature-icon">☕</span>
            <p>Authentic Desi Flavors</p>
          </div>
          <div className="feature">
            <span className="feature-icon">🌿</span>
            <p>Fresh Ingredients</p>
          </div>
          <div className="feature">
            <span className="feature-icon">💯</span>
            <p>Quality Guaranteed</p>
          </div>
          <div className="feature">
            <span className="feature-icon">🚚</span>
            <p>Fast Delivery</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Contact;  