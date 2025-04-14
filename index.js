const express = require('express');
const fs = require('fs');
const path = require('path');
const app = express();
const PORT = process.env.PORT || 3000;

app.use((req, res, next) => {
  const log = `${new Date().toISOString()} | ${req.ip} | ${req.method} | ${req.url}\n`;
  fs.appendFileSync(path.join(__dirname, 'access.log'), log);
  console.log(log.trim());
  next();
});

app.get('/', (req, res) => {
  res.send('🛡️ Monitoring Website Active - Hello from Render!');
});

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
