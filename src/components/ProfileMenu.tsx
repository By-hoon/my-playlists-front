interface user {
  name: string;
}

const ProfileMenu = (userObj: user) => {
  return (
    <div className="profile-menu__container--header">
      <span className="user-name__span--header">{userObj.name}</span>
      <span className="profile-menu__span">내 정보</span>
      <span className="profile-menu__span">로그아웃</span>
    </div>
  );
};

export default ProfileMenu;
