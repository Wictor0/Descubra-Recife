import { useState, useEffect } from 'react';

export function usePlaces(category = null) {
  const [places, setPlaces] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const url = category
      ? `https://descubra-recife.onrender.com/api/places?category=${category}`
      : 'https://descubra-recife.onrender.com/api/places';

    fetch(url)
      .then(res => res.json())
      .then(data => {
        setPlaces(data.data);
        setLoading(false);
      })
      .catch(err => {
        setError(err.message);
        setLoading(false);
      });
  }, [category]);

  return { places, loading, error };
}