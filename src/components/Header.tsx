import { useState } from "react";
import { Link } from "react-router-dom";
import { userObj } from "../test/user";
import ProfileMenu from "./ProfileMenu";

const Header = () => {
  const [isShow, setIsShow] = useState(false);

  const onProfile = () => {
    setIsShow(true);
  };
  const leaveProfile = () => {
    setIsShow(false);
  };
  return (
    <>
      <div className="header__container">
        <Link to="/" className="logo__container">
          내플리스
        </Link>
        <div
          className="profile__container--header"
          onMouseOver={onProfile}
          onMouseLeave={leaveProfile}
        >
          <img
            className="profile__image--header"
            src={userObj.profileImage}
            alt="profileImage"
          />
          {isShow ? (
            <>
              <div className="mouse-move__container--header"></div>
              <ProfileMenu name={userObj.name} />
            </>
          ) : null}
        </div>
      </div>
    </>
  );
};

export default Header;
