import express from 'express'
import mongoose from 'mongoose'
import morgan from 'morgan'
import bodyParser from 'body-parser'

const app = express();

app.use(morgan('dev'));
app.use(bodyParser.urlencoded({
  extended: true
}));
app.use(bodyParser.json());

mongoose.connect('mongodb://localhost/test_mongo');

app.get('/', (req, res) => {
  res.send('my route');
});

app.listen(3000, () => {
  console.log('Express started');
});