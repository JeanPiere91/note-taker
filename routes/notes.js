const notes = require('express').Router();
const { readFromFile, readAndAppend } = require('../helpers/fsUtils');

// GET Route for retrieving all the notes
notes.get('/', (req, res) => {
  console.info(`${req.method} request received for tips`);
  readFromFile('./db/db.json').then((data) => res.json(JSON.parse(data)));
});

// // POST Route for a new UX/UI tip
// tips.post('/', (req, res) => {
//   console.info(`${req.method} request received to add a tip`);
//   console.log(req.body);

//   const { username, topic, tip } = req.body;

//   if (req.body) {
//     const newTip = {
//       username,
//       tip,
//       topic,
//       tip_id: uuid(),
//     };

//     readAndAppend(newTip, './db/tips.json');
//     res.json(`Tip added successfully`);
//   } else {
//     res.error('Error in adding tip');
//   }
// });

module.exports = notes;
