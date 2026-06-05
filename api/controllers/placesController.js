const Place = require('../models/Place');

const createResponse = (success, data, message = '') => ({
  success,
  data,
  message
});

const getAll = async (req, res) => {
  try {
    const { category } = req.query;
    const places = category
      ? await Place.getByCategory(category)
      : await Place.getAll();

    res.json(createResponse(true, places));
  } catch (err) {
    res.status(500).json(createResponse(false, null, err.message));
  }
};

const getById = async (req, res) => {
  try {
    const place = await Place.getById(req.params.id);
    if (!place) return res.status(404).json(createResponse(false, null, 'Não encontrado'));
    res.json(createResponse(true, place));
  } catch (err) {
    res.status(500).json(createResponse(false, null, err.message));
  }
};

module.exports = { getAll, getById };