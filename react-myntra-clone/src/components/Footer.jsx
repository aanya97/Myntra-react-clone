const Footer = () => {
  return (
    <>
      {" "}
      <footer>
        <div className="footer_container">
          <div className="footer_column">
            <p>ONLINE SHOPPING</p>

            <a href="#">Men</a>
            <a href="#">Women</a>
            <a href="#">Kids</a>
            <a href="#">Home & living</a>
            <a href="#">beauty</a>
            <a href="#">Gift card</a>
            <a href="#">myntra insider</a>

            <p>USEFULL LINKS</p>

            <a href="#">Blog</a>
            <a href="#">Carrers</a>
            <a href="#">Site map</a>
            <a href="#">Corporate information</a>
            <a href="#">white chat</a>
            <a href="#">Clear Trip</a>
            <a href="#">& many more</a>
          </div>

          <div className="footer_column">
            <p>COUSTUMOR POLICIES</p>

            <a href="#">Contact Us</a>
            <a href="#">FAQ</a>
            <a href="#">T&C</a>
            <a href="#">Terms Of Use</a>
            <a href="#">Track Orders</a>
            <a href="#">Shipping</a>
            <a href="#">Cancellation</a>
            <a href="#">Returns</a>
            <a href="#">Privacy Policies</a>
          </div>
          <div className="footer_column">
            <p>SHOP BY CATEGORIES</p>

            <a href="#">Ethnic Wear</a>
            <a href="#">Sports Wear</a>
            <a href="#">Toys</a>
            <a href="#">Home & living</a>
            <a href="#">beauty</a>
            <a href="#">Gift card</a>
            <a href="#">myntra insider</a>
          </div>
          <div className="myntra_downloads">
            <p>EXPERIENCE MYNTRA</p>
            <div className="downloads">
              <a href="#">
                <img
                  className="playstore"
                  src="../images/goole_playstore_iage.png"
                  alt="downloads"
                />
              </a>
              <a href="#">
                <img
                  className="playstore"
                  src="../images/appstore.png"
                  alt="downloads"
                />
              </a>
            </div>
            <p id="keep_TOUCH_TAG">KEEP IN TOUCH</p>

            <span className="Social_media_link">
              <i className="fa-brands fa-youtube fa-xl"></i>
            </span>
            <span className="Social_media_link">
              <i className="fa-brands fa-facebook fa-xl"></i>
            </span>

            <span className="Social_media_link">
              <i className="fa-brands fa-twitter fa-xl"></i>
            </span>

            <span className="Social_media_link">
              <i className="fa-brands fa-instagram fa-xl"></i>
            </span>
          </div>
        </div>
        <hr />
        <div className="copy_right">
          © 2024 www.myntra.com. All rights reserved. hello
        </div>
      </footer>
    </>
  );
};
export default Footer;
