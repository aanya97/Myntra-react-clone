import { CgProfile } from "react-icons/cg";
import { FaRegHeart } from "react-icons/fa";
import { IoBagHandleOutline } from "react-icons/io5";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";

const Header = () => {
  const bag = useSelector((store) => store.bag);

  return (
    <>
      {" "}
      <header>
        <div className="logo_container">
          <Link to="/">
            <img
              className="myntra_logo"
              src="../images/image.png"
              alt="myntra"
            />
          </Link>
        </div>
        <div className="nav_bar">
          <a href="#">Men</a>
          <a href="#">Women</a>
          <a href="#">Kids</a>
          <a href="#">Home & living</a>
          <a href="#">beauty</a>
          <a href="#">
            studio<sup>new</sup>
          </a>
        </div>
        <div className="search_bar">
          <span className="material-symbols-outlined search_icon">
            {" "}
            search{" "}
          </span>
          <input
            className="search-input"
            placeholder="Search for products,brands and more"
          />
        </div>
        <div className="action_bar">
          <div className="action_container">
            <CgProfile />
            <span className="action_profile">profile</span>
          </div>
          <div className="action_container">
            <FaRegHeart />
            <span className="action_profile">whishlist</span>
          </div>
          <Link to="/bag" className="action_container">
            <IoBagHandleOutline />
            <span className="action_profile">bag</span>
            <span className="bag-item-count">{bag.length}</span>
          </Link>
        </div>
      </header>{" "}
    </>
  );
};
export default Header;
