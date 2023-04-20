import React, { createContext, useState } from 'react';

export const MenuContext = createContext();

export const MenuProvider = ({ children }) => {
  const [menuActive, setMenuActive] = useState(false);

  return (
    <MenuContext.Provider value={{ menuActive, setMenuActive }}>
      {children}
    </MenuContext.Provider>
  );
};