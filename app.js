const express = require('express');
const app = express();
const PORT = 3000;

// const userRoutes = 
// const showRoutes = 

app.use(express.json());
app.use(express.urlencoded({ extended: true }));


app.listen(PORT, () => {
    console.log(`Our server is now listening to port ${PORT}`)
});

module.exports = app;