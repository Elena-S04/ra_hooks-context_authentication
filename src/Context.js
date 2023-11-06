import { createContext } from 'react';

const Context = createContext({
  token: null,
  profile: null
});

export default Context;