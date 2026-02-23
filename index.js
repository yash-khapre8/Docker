import express from "express";
const app = express();

app.get("/", (req, res) => {
  res.json([
    {
      id: 1,
      age: 20,
      name: "yash",
    },
    {
      id: 2,
      age: 20,
      name: "virat",
    },
    {
      id: 3,
      age: 20,
      name: "kohli",
    },
  ]);
});

app.listen(5500, () => {
  console.log("started running on 5500");
});
