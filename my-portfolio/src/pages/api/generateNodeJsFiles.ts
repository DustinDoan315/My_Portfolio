/* eslint-disable @typescript-eslint/no-explicit-any */
import fs from "fs-extra";
import path from "path";

export const generateNodeJsFiles = (projectRoot: string) => {
  const serverJsContent = `
const express = require('express');
const dotenv = require('dotenv');
const { connectDB } = require('./config/db');
const cryptoRoutes = require('./routes/cryptoRoutes');
const errorHandler = require('./utils/errorHandler');

dotenv.config();

const app = express();

connectDB();

app.use(express.json());
app.use('/api', cryptoRoutes);
app.use(errorHandler);

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log(\`Server running on http://localhost:\${PORT}\`);
});
  `;
  fs.writeFileSync(path.join(projectRoot, "server.js"), serverJsContent.trim());

  const dbJsContent = `
const { Sequelize } = require('sequelize');

const sequelize = new Sequelize(process.env.DB_NAME, process.env.DB_USER, process.env.DB_PASS, {
    host: process.env.DB_HOST,
    dialect: 'mysql'
});

const connectDB = async () => {
    try {
        await sequelize.authenticate();
        console.log('MySQL connected...');
    } catch (err) {
        console.error('Unable to connect to the database:', err.message);
        process.exit(1);
    }
};

module.exports = { sequelize, connectDB };
  `;
  fs.writeFileSync(
    path.join(projectRoot, "config", "db.js"),
    dbJsContent.trim()
  );

  const cryptoControllerContent = `
const cryptoService = require('../services/cryptoService');

const getCryptoData = async (req, res) => {
    try {
        const { range } = req.params;
        const data = await cryptoService.fetchCryptoData(range);
        res.json(data);
    } catch (error) {
        res.status(500).json({ message: 'Server Error' });
    }
};

module.exports = {
    getCryptoData
};
  `;
  fs.writeFileSync(
    path.join(projectRoot, "controllers", "cryptoController.js"),
    cryptoControllerContent.trim()
  );

  const cryptoRoutesContent = `
const express = require('express');
const router = express.Router();
const cryptoController = require('../controllers/cryptoController');

router.get('/crypto/:range', cryptoController.getCryptoData);

module.exports = router;
  `;
  fs.writeFileSync(
    path.join(projectRoot, "routes", "cryptoRoutes.js"),
    cryptoRoutesContent.trim()
  );

  const cryptoServiceContent = `
const axios = require('axios');

const fetchCryptoData = async (range) => {
    const coinListResponse = await axios.get('https://api.coingecko.com/api/v3/coins/markets', {
        params: {
            vs_currency: 'usd',
            order: 'market_cap_desc',
            per_page: 20,
            page: 1
        }
    });

    const coins = coinListResponse.data;

    const coinDataPromises = coins.map(coin => {
        return axios.get(\`https://api.coingecko.com/api/v3/coins/\${coin.id}/market_chart\`, {
            params: {
                vs_currency: 'usd',
                days: range
            }
        }).then(response => ({
            id: coin.id,
            symbol: coin.symbol,
            name: coin.name,
            data: response.data
        }));
    });

    return await Promise.all(coinDataPromises);
};

module.exports = {
    fetchCryptoData
};
  `;
  fs.writeFileSync(
    path.join(projectRoot, "services", "cryptoService.js"),
    cryptoServiceContent.trim()
  );

  const errorHandlerContent = `
const errorHandler = (err, req, res, next) => {
    console.error(err.stack);
    res.status(500).send('Something broke!');
};

module.exports = errorHandler;
  `;
  fs.writeFileSync(
    path.join(projectRoot, "utils", "errorHandler.js"),
    errorHandlerContent.trim()
  );
};
