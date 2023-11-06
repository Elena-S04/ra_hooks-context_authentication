import { useContext } from 'react';
import Context from '../Context';
import ToolbarForm from "./ToolbarForm";
import ToolbarProfile from './ToolbarProfile';

export default function Toolbar() {
  const { profile } = useContext(Context);

  return (
    <div className="toolbar">
      <div className="toolbar__logo">Neto Social</div>
      {!profile && <ToolbarForm />}
      {profile && <ToolbarProfile />}
    </div>
  );
}