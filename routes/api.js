const router = require('express').Router();
const fs = require('fs');
const { DATA_PATH } = require('../config');

router.get('/', (req, res) => {
  res.json({
    msg: 'Titanic API works.',
  });
});

router.get('/titanic', (req, res) => {
  fs.readFile(`${DATA_PATH}/titanic.json`, (err, data) => {
    let result;

    try {
      result = JSON.parse(data);
    } catch {
      res.status(500).json({ error: 'Data source is corrupt or missing.' });
      return;
    }

    res.send(result);
  });
});

router.get('/label/:type', (req, res) => {
  fs.readFile(`${DATA_PATH}/label_${req.params.type}.json`, (err, data) => {
    let result;

    try {
      result = JSON.parse(data);
    } catch {
      res.status(500).json({ error: 'Data source is corrupt or missing.' });
      return;
    }

    res.send(result);
  });
});

module.exports = router;
