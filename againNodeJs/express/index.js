const express = require("express");
const app = express();
app.get("", (req, resp) => {
  resp.send(`<h1>Welcome to home page! </h1>
         <a href= "/about">Go To About Page</a>
        `);
});
app.get("/about", (req, resp) => {
  resp.send(`
        <input type = "text" placeholder = "User name"/>
        <button onclick= "window.location.href = '/help'">Click Me </button>
        `);
});
app.get("/help", (req, resp) => {
  resp.send([
    {
      name: "Sneha",
      Age: 21,
      email: "choudharysneha@gmail.com",
    },
    {
      name: "Annu",
      Age: 21,
      email: "choudharysneha@gmail.com",
    },
  ]);
});

app.listen(4000);
