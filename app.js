const express = require ('express');
const bodyParser = require('body-parser');
const mongoose = require("mongoose");
const cors = require("cors");

const usersRoutes = require('./routes/users-routes');
const itemsRoutes = require('./routes/items-routes');

const HttpError = require('./models/http-error')

const app = express();

app.use(bodyParser.urlencoded({
    extended: true
 }));

app.use(bodyParser.json());

app.use(cors());
app.options("*", cors());

app.use((req, res, next) => {
  res.setHeader("Access-Control-Allow-Origin", "*");
  res.setHeader(
    "Access-Control-Allow-Headers",
    "Origin, X-Requested-With, Content-Type, Accept, Authorization"
  );
  res.setHeader("Access-Control-Allow-Methods", "GET, POST, PATCH, DELETE");

  next();
});

app.use("/api/users", usersRoutes);
app.use("/api/items", itemsRoutes);

app.use((req, res, next) => {
    const error = new HttpError('Could not find this route.', 404);
    throw error
})



app.use((error, req, res, next) =>{
    if (res.headerSent){
        return next(error);
    }
    res.status(error.code || 500);
    res.json({message: error.message || 'An unknown error ocurred'})
}

)

mongoose
  .connect(
       `mongodb+srv://han:951013@cluster0.x3qb1.gcp.mongodb.net/todolist?retryWrites=true&w=majority`,
    {
      useNewUrlParser: true,
      useUnifiedTopology: true,
      useCreateIndex: true,
      useFindAndModify: false,
    }
  )
  .then(() => {
    app.listen(5000);
  })
  .catch((err) => {
    console.log(err);
  });
