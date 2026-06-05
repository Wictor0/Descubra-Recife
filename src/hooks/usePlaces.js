// src/hooks/usePlaces.js
import { useState, useEffect } from 'react';

export function usePlaces(category = null) {
  const [places, setPlaces] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const url = category
      ? `http://localhost:3001/api/places?category=${category}`
      : 'http://localhost:3001/api/places';

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