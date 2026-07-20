import React, { useEffect, useState } from 'react'
import CoinCard from './components/CoinCard';
import HomePage from './pages/home';
import { Route, Routes } from 'react-router';
import AboutPage from './pages/about';
import Header from './pages/header';

function App() {
  const [coins, setCoins] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [limit, setLimit] = useState(5);
  const [filter, setFilter] = useState('');
  const [sortBy, setSortBy] = useState('market_cap_desc');

  const API_URL = import.meta.env.VITE_COINS_API_URL;

  useEffect(() => {
    const fetchCoins = async () => {
      try {
        const res = await fetch(`${API_URL}&order=market_cap_desc&per_page=${limit}&page=1&sparkline=false`);
        if (!res.ok) throw new Error("Failed to fecth data");
        const data = await res.json();
        setCoins(data);
      } catch (err) {
        setError(err.message)

      } finally {
        setLoading(false);
      }
    }

    fetchCoins();

  }, [limit])

  return (
    <>
      <Header/>
      <Routes>
        <Route
          path='/'
          element={
            <HomePage
              coins={coins}
              filter={filter}
              setFilter={setFilter}
              limit={limit}
              setLimit={setLimit}
              sortBy={sortBy}
              setSortBy={setSortBy}
              loading={loading}
              error={error}
            />
          }
        />
        <Route path='/about' element={<AboutPage />} />
      </Routes>
    </>

  )


}

export default App
