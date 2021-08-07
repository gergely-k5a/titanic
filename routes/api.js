const router = require('express').Router();
const fs = require('fs');

router.get('/', (req, res) => {
  res.json({
    msg: 'Titanic API works.',
  });
});

router.get('/titanic', (req, res) => {
  fs.readFile('data/titanic.json', (err, data) => {
    // TODO: handle errors
    const result = JSON.parse(data);
    res.send(result);
  });
});

router.get('/label/:type', (req, res) => {
  fs.readFile(`data/label_${req.params.type}.json`, (err, data) => {
    // TODO: handle errors
    const result = JSON.parse(data);
    res.send(result);
  });
});

module.exports = router;
