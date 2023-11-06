import { useContext } from 'react';
import Context from '../Context';

export default function ToolbarProfile() {
  const { profile, handleLogout } = useContext(Context);

  return (
    <div className="toolbar-profile">
      <div className="toolbar-profile__name">
        Hello, {profile.name}
      </div>
      <div className="toolbar-profile__avatar">
        <img src={profile.avatar} alt={profile.name} />
      </div>
      <div className="toolbar-profile__logout">
        <button className="toolbar-profile__button" onClick={handleLogout}>Logout</button>
      </div>
    </div>
  );
}