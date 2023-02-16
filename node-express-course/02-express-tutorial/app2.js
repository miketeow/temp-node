const express = require("express");
const app = express();
const path = require("path");
const { products } = require("./data");
const logger = require("./logger");
const morgan = require("morgan");
const authorize = require("./authorize");
let { people } = require("./data");
app.use(express.static("./public"));
app.use(["/api", "/people"], morgan("tiny"));

app.get("/people", (req, res) => {
  res.status(200).json(people);
});

app.get("/about.html", (req, res) => {
  res.status(200).send("About Page");
});

// app.get("/nav", (req, res) => {
//   res.status(200).sendFile(path.resolve(__dirname, "./navbar-app/index.html"));
// });
// adding to static folder ./public
// server side render

app.get("/home", (req, res) => {
  res.send(
    "<h1>Home Page</h1><a href='api/products'>Products</a><a href='api/products/1'>First product</a>"
  );
});

app.get("/api/products", (req, res) => {
  const simpleProducts = products.map((product) => {
    const { id, name, price } = product;
    return { id, name, price };
  });
  res.json(simpleProducts);
});

app.get("/api/products/:productID", (req, res) => {
  const { productID } = req.params;
  const singleProduct = products.find(
    (product) => product.id === Number(productID)
  );
  res.json(singleProduct);
});

app.get("/api/v1/query", (req, res) => {
  const { search, limit } = req.query;
  let sortedProducts = [...products];
  console.log(req.user);

  if (search) {
    sortedProducts = sortedProducts.filter((product) => {
      return product.name.startsWith(search);
    });
  }

  if (limit) {
    sortedProducts = sortedProducts.slice(0, Number(limit));
  }
  if (sortedProducts.length < 1) {
    return res.status(200).json({ success: true, data: [] });
  }
  res.status(200).json(sortedProducts);
});

app.all("*", (req, res) => {
  res.status(404).send("Resources not available");
});

app.listen(8085, () => {
  console.log("The app is listening on port 8085");
});
