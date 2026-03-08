const express = require('express');
const app = express();
const port = 3000;

app.get('/', (req, res) => {
  res.send('<h1>أهلاً بك! هذا أول موقع ويب يعمل من جهازي 🚀</h1>');
});

app.listen(port, () => {
  console.log('السيرفر يعمل الآن على: http://localhost:3000');
});
