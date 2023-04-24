import Header from "../Header";
import "./index.css";

const Profile = () => (
  <>
    <Header />
    <div className="profile-container">
      <div className="content-container">
        <h1 className="profile-heading">Profile</h1>
        <form>
          <ul className="list-container">
            <li className="list-item">
              <h1 className="label-profile-name">Username:</h1>
              <p className="profile-username">username</p>
            </li>
            <li className="list-item">
              <h1 className="label-profile-name">MobileNumber:</h1>
              <p className="profile-username">MobileNumber</p>
            </li>
            <li className="list-item">
              <h1 className="label-profile-name">Email:</h1>
              <p className="profile-username">Email</p>
            </li>
            <li className="list-item">
              <h1 className="label-profile-name">Password</h1>
              <p className="profile-username">Password</p>
            </li>
          </ul>
        </form>
      </div>
    </div>
  </>
);

export default Profile;
