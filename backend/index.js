import app from './server.js';
import mongodb from 'mongodb';
import dotenv from 'dotenv';

dotenv.config();

const MongoClient = mongodb.MongoClient;
const port = process.env.PORT || 8000;

const uri =process.env.RESREV_DB_URI;
const client = new MongoClient(uri, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

// FIXME:Code refactoring
client.connect((err, data) => {
  if (err) {
    console.log(err);
  } else {
    console.log('Connected to database');
    app.listen(port, () => {
      console.log(`Listening on port ${port}`);
    });
  }
  client.close();
});
