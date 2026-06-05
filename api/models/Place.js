const db = require('./db');

const Place = {
  getAll: async () => {
    const result = await db.query('SELECT * FROM places ORDER BY category, ordem ASC NULLS LAST');
    return result.rows;
  },

  getById: async (id) => {
    const result = await db.query('SELECT * FROM places WHERE id = $1', [id]);
    return result.rows[0];
  },

  getByCategory: async (category) => {
    const result = await db.query(
      'SELECT * FROM places WHERE category = $1 ORDER BY ordem ASC NULLS LAST', [category]
    );
    return result.rows;
  }
};

module.exports = Place;