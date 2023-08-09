const express = require("express");
const mongoose = require("mongoose");
const app = express();

const cors = require("cors");

app.use(express.json());
app.use(cors());

const noteModel = require("./models/noteModel");
//connecting to the database

mongoose
  .connect("mongodb://0.0.0.0:27017")
  .then(() => {
    console.log("Database has been connected successfully");
  })
  .catch((error) => {
    console.log(error);
  });

//putting data into database

app.post("/register", async (req, res) => {
  try {
    const newNote = noteModel({
      title: req.body.title,
      description: req.body.description,
      color: req.body.color,
    });

    const savedNote = await newNote.save();

    res.send(savedNote);
  } catch (error) {
    console.log(error);
  }
});

app.get("/notes", async (req, res) => {
  try {
    const data = await noteModel.find();
    res.send(data);
  } catch (error) {
    console.log(error);
  }
});

app.delete("/delete/:id", async (req, res) => {
  try {
    const deleteNote = await noteModel.deleteOne({
      _id: req.params.id,
    });

    res.send(deleteNote);
  } catch (error) {
    console.log(error);
  }
});

//getting single data
app.get("/notes/:id", async (req, res) => {
  const getOneData = await noteModel.find({
    _id: req.params.id,
  });

  res.send(getOneData);
});

//update API

app.put("/notes/update/:id", async (req, res) => {
  const updateNote = await noteModel.updateOne(
    { _id: req.params.id },
    { $set: req.body }
  );
  res.send("success");
});



app.listen(5000, () => {
  console.log("Server is running on port 5000 smoothly");
});
