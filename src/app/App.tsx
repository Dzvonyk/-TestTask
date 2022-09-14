import React, { Suspense } from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Redirect from './pages/Redirect';
import Revenue from './pages/Revenue';
import RevenueList from './pages/RevenueList';

// import { Helmet } from "react-helmet";

const App = () => {
  return (
    <BrowserRouter>
    {/* <Helmet>
      <title>Revenue Task</title>
      <meta name="description" content="Revenue Task" />
    </Helmet> */}
    <Suspense
      fallback={
        <div className="flex justify-center items-center">Loading...</div>
      }
    >
      <Routes>
        <Route path="/" element={<Redirect />} />
        <Route path="/list" element={<RevenueList />} />
        <Route path="/item/:id" element={<Revenue />} />
      </Routes>
    </Suspense>
  </BrowserRouter>
  );
}

export default App;
