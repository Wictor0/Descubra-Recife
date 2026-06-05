const express = require('express');
const cors = require('cors');
require('dotenv').config();

const placesRoutes = require('./routes/places');

const app = express();
app.use(cors());
app.use(express.json());

app.use('/api/places', placesRoutes);

app.get('/health', (req, res) => res.json({ status: 'ok' }));

const PORT = process.env.PORT || 3001;
app.listen(PORT, () => console.log(`API rodando na porta ${PORT}`));