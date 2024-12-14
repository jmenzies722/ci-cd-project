const express = require('express');
const app = express();
const PORT = process.env.PORT || 3000;

app.get('/', (req, res) => {
    res.send('Hello, CI/CD Pipeline!');
});

module.exports = app;

if (require.main === module) {
    app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
}
