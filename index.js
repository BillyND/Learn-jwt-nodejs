import express from "express";
import dotenv from "dotenv";
import jwt from "jsonwebtoken";
dotenv.config();
const app = express();
const port = process.env.PORT || 5000;

const books = [
  { id: 1, name: "The Catcher in the Rye", author: "J.D. Salinger" },
  { id: 2, name: "To Kill a Mockingbird", author: "Harper Lee" },
  { id: 3, name: "1984", author: "George Orwell" },
  { id: 4, name: "The Great Gatsby", author: "F. Scott Fitzgerald" },
  {
    id: 5,
    name: "One Hundred Years of Solitude",
    author: "Gabriel García Márquez",
  },
];

app.get("/books", (req, res) => {
  res.status(200).json({
    status: "Success",
    data: books,
  });
});

app.post("/login", (req, res) => {
  //Authentication

  //Authorization
  const data = {
    username: "bobbyhadz",
    password: "dogsandcats123",
  };
  const accessToken = jwt.sign(data, process.env.ACCESS_TOKEN_SECRET, {
    expiresIn: "30s",
  });
  res.json({
    accessToken,
  });
});

app.listen(port, () => {
  console.log(`Example app listening on http://localhost:${port}`);
});
