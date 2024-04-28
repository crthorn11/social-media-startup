const express = require('express');
const db = require('./config/connection');
// Require model
// const { user, thought, reaction } = require('./models');
const userRoutes = require("./routes/userRoutes")


const PORT = process.env.PORT || 3001;
const app = express();

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

// app.get('/', async (req, res) => {
//   try {
//     // Using model in route
//     const result = await .find({});
//     res.status(200).json(result);
//   } catch (err) {
//     res.status(500).send({ message: 'Internal Server Error' });
//   }
// });

app.use(userRoutes)

db.once('open', () => {
  app.listen(PORT, () => {
    console.log(`API server running on port ${PORT}!`);
  });
});