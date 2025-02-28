import React, { useState } from "react";
import Navbar from "./Navbar";
import "./App.css";
import "./Home.css";

function Home() {
  const [isPopupOpen, setIsPopupOpen] = useState(false);

  const handleBuyNow = () => {
    alert("Thank you for your purchase!");
  };

  const handleCart = () => {
    setIsPopupOpen(true);
  };

  const closePopup = () => {
    setIsPopupOpen(false);
  };

  return (
    <>
      <div className="header-bar">
        <Navbar />
      </div>
      <div className="banner">
        <div className="banner-page">
          <div className="card apple">
            <h6 className="title">Apple</h6>
            <button className="add-btn" onClick={handleBuyNow}>ADD</button>
            <button className="buy-btn" onClick={handleCart}>Buy Now</button>

            {/* Popup Box */}
            {isPopupOpen && (
              <div className="popup">
                <div className="popup-content">
                  <h4>Item Added to Cart!</h4>
                  <p>Your item has been successfully added to the cart.</p>
                  <button onClick={closePopup} className="close-btn">OK</button>
                </div>
              </div>
            )}
          </div>

          <div className="card samsung">
            <h6 className="title">Samsung</h6>
            <button className="add-btn" onClick={handleBuyNow}>ADD</button>
            <button className="buy-btn" onClick={handleCart}>Buy Now</button>
          </div>

          <div className="card oppo">
            <h6 className="title">Oppo</h6>
            <button className="add-btn" onClick={handleBuyNow}>ADD</button>
            <button className="buy-btn" onClick={handleCart}>Buy Now</button>
          </div>

          <div className="card realme">
            <h6 className="title">Realme</h6>
            <button className="add-btn" onClick={handleBuyNow}>ADD</button>
            <button className="buy-btn" onClick={handleCart}>Buy Now</button>
          </div>

          <div className="card vivo">
            <h6 className="title">Vivo</h6>
            <button className="add-btn" onClick={handleBuyNow}>ADD</button>
            <button className="buy-btn" onClick={handleCart}>Buy Now</button>
          </div>

          <div className="card poco">
            <h6 className="title">Poco</h6>
            <button className="add-btn" onClick={handleBuyNow}>ADD</button>
            <button className="buy-btn" onClick={handleCart}>Buy Now</button>
          </div>

          <div className="card redmi">
            <h6 className="title">Redmi</h6>
            <button className="add-btn" onClick={handleBuyNow}>ADD</button>
            <button className="buy-btn" onClick={handleCart}>Buy Now</button>
          </div>

          <div className="card nothing">
            <h6 className="title">Nothing</h6>
            <button className="add-btn" onClick={handleBuyNow}>ADD</button>
            <button className="buy-btn" onClick={handleCart}>Buy Now</button>
          </div>

          <div className="card oneplus">
            <h6 className="title">OnePlus</h6>
            <button className="add-btn" onClick={handleBuyNow}>ADD</button>
            <button className="buy-btn" onClick={handleCart}>Buy Now</button>
          </div>
        </div>
      </div>

      {/* Footer */}
      <footer className="footer">
        <div className="footer-container">
          <div className="footer-section about">
            <h2>About Us</h2>
            <p>We provide the best products with top quality and amazing deals.</p>
          </div>

          <div className="footer-section links">
            <h2>Quick Links</h2>
            <ul>
              <li><a href="#">Home</a></li>
              <li><a href="#">Products</a></li>
              <li><a href="#">Services</a></li>
              <li><a href="#">Contact</a></li>
            </ul>
          </div>

          <div className="footer-section contact">
            <h2>Contact Us</h2>
            <p>Email: support@example.com</p>
            <p>Phone: 6364917817</p>
          </div>
        </div>

        <div className="footer-bottom">
          <p>&copy; 2025 YourCompany. All rights reserved.</p>
        </div>
      </footer>
    </>
  );
}

export default Home;
