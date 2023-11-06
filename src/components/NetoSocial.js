import { useContext } from 'react';
import Context from '../Context';
import Toolbar from "./Toolbar";
import Start from "./Start";
import NewsList from './NewsList';

export default function NetoSocial() {
  const { token } = useContext(Context);

  return (
    <div className="neto-social">
      <Toolbar />
      {!token && <Start />}
      {token && <NewsList />}
    </div>
  );
}