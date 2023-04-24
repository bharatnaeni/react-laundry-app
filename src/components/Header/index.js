import { Link, useNavigate } from "react-router-dom";
import { CgProfile } from "react-icons/cg";
import Cookies from "js-cookie";

import "./index.css";

const Header = () => {
  const navigate = useNavigate();
  const onClickLogout = () => {
    Cookies.remove("jwt_token");
    navigate("/login");
  };

  const redirectToDashboard = () => {
    navigate("/");
  };

  const redirectToProfileSection = () => {
    navigate("/profile");
  };

  return (
    <nav className="nav-header">
      <div className="nav-content">
        <div className="nav-bar-large-container">
          <h1 className="Dashboard-logo" onClick={redirectToDashboard}>
            Laundry Managment System
          </h1>
          <CgProfile
            className="profile-image"
            onClick={redirectToProfileSection}
          />
          <button
            type="button"
            className="logout-desktop-btn"
            onClick={onClickLogout}
          >
            Logout
          </button>
        </div>
      </div>
    </nav>
  );
};

export default Header;
