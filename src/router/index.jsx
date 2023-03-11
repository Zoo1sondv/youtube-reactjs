import NotFound from '@/screens/NotFound';
import Layout from '@/screens';
import Home from '@/screens/Home';
import Results from '@/screens/Results';
import Watch from '@/screens/Watch';
import React from 'react';
import { Route, Routes } from 'react-router-dom';

function SwitchScreen() {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route path="" element={<Home />} />
        <Route path="results/search_query=:query" element={<Results />} />
        <Route path="watch/v=:videoId" element={<Watch />} />
        <Route path="*" element={<NotFound />} />
      </Route>
    </Routes>
  );
}

export default SwitchScreen;
