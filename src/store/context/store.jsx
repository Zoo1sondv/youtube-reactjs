import React, { createContext, useContext, useState } from 'react';

export const Store = createContext();

export const useMyContext = () => useContext(Store);

export const ContextProvider = ({ children }) => {
  const [menuToggle, setMenuToggle] = useState(false); // state hide show menu header
  const [videoList, setVideoList] = useState([]); // state get list video
  const [valueFilter, setValueFilter] = useState(''); // state filter home & watch
  const [active, setActive] = useState('All'); // state handle active filter home & watch
  const [isSearch, setIsSearch] = useState(false); // event click button search & Enter input
  const [search, setSearch] = useState(''); // value input search
  const [isPageWatch, setIsPageWatch] = useState(false);
  const [drawer, setDrawer] = useState(false);

  const value = {
    search,
    setSearch,
    videoList,
    setVideoList,
    isSearch,
    setIsSearch,
    menuToggle,
    setMenuToggle,
    valueFilter,
    setValueFilter,
    active,
    setActive,
    isPageWatch,
    setIsPageWatch,
    drawer,
    setDrawer,
  };

  return <Store.Provider value={value}>{children}</Store.Provider>;
};
