import { useContext, useState } from 'react';
import Context from '../Context';

export default function ToolbarForm() {
  const { handleLogin } = useContext(Context);
  const EMPTY_STATE = { login: '', password: '' };
  const [form, setForm] = useState(EMPTY_STATE);

  const handleSubmit = (event) => {
    event.preventDefault();
    handleLogin(form);
    setForm(EMPTY_STATE);
  }

  const handleChange = (event) => {
    const { name, value } = event.target;
    setForm(prevState => ({ ...prevState, [name]: value }));
  }

  return (
    <form className="form" onSubmit={handleSubmit}>
      <input className="form__login" name="login" value={form.login} onChange={handleChange} placeholder="Username" required />
      <input className="form__password" name="password" value={form.password} onChange={handleChange} placeholder="Password" required />
      <button className="form__button">Login</button>
    </form>
  );
}