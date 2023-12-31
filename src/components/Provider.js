import Context from '../Context';
import useStorage from '../hooks/useStorage';

export default function Provider(props) {
  const [token, setToken] = useStorage(localStorage, 'token');
  const [profile, setProfile] = useStorage(localStorage, 'profile', true);

  const handleLogin = async ({ login, password }) => {
    try {
      const responseToken = await fetch('http://localhost:7070/auth', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ login, password }),
      });
      if (!responseToken.ok) {
        throw new Error('Auth failed');
      }
      const { token } = await responseToken.json();

      const responseProfile = await fetch(`${'http://localhost:7070/private/'}me`, {
        headers: { 'Authorization': `Bearer ${token}` },
      });
      if (!responseProfile.ok) {
        throw new Error('Profile is not exist');
      }
      const profile = await responseProfile.json();
      setToken(token);
      setProfile(profile);
    } catch (e) {
      setToken(null);
      setProfile(null);
    }
  }

  const handleLogout = () => {
    setToken(null);
    setProfile(null);
  }

  return (
    <Context.Provider value={{ handleLogin, handleLogout, token, profile }}>
      {props.children}
    </Context.Provider >
  )
}