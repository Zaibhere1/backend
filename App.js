const express = require("express");
const app = express();
const port = 3000; // You can choose any port
const logos = [
  {
    name: "3M",
    url: "./logos/3m.svg",
  },
  {
    name: "Barstool Store",
    url: "./logos/barstool-store.svg",
  },
  {
    name: "Budweiser",
    url: "./logos/budweiser.svg",
  },
  {
    name: "BuzzFeed",
    url: "./logos/buzzfeed.svg",
  },
  {
    name: "Forbes",
    url: "./logos/forbes.svg",
  },
  {
    name: "Macy's",
    url: "./logos/macys.svg",
  },
  {
    name: "Men's Health",
    url: "./logos/menshealth.svg",
  },
  {
    name: "MrBeast",
    url: "./logos/mrbeast.svg",
  },
  {
    name: "3M",
    url: "./logos/3m.svg",
  },
  {
    name: "Barstool Store",
    url: "./logos/barstool-store.svg",
  },
  {
    name: "Budweiser",
    url: "./logos/budweiser.svg",
  },
  {
    name: "BuzzFeed",
    url: "./logos/buzzfeed.svg",
  },
  {
    name: "Forbes",
    url: "./logos/forbes.svg",
  },
  {
    name: "Macy's",
    url: "./logos/macys.svg",
  },
  {
    name: "Men's Health",
    url: "./logos/menshealth.svg",
  },
  {
    name: "MrBeast",
    url: "./logos/mrbeast.svg",
  },
  {
    name: "3M",
    url: "./logos/3m.svg",
  },
  {
    name: "Barstool Store",
    url: "./logos/barstool-store.svg",
  },
  {
    name: "Budweiser",
    url: "./logos/budweiser.svg",
  },
  {
    name: "BuzzFeed",
    url: "./logos/buzzfeed.svg",
  },
  {
    name: "Forbes",
    url: "./logos/forbes.svg",
  },
  {
    name: "Macy's",
    url: "./logos/macys.svg",
  },
  {
    name: "Men's Health",
    url: "./logos/menshealth.svg",
  },
  {
    name: "MrBeast",
    url: "./logos/mrbeast.svg",
  },
  {
    name: "3M",
    url: "./logos/3m.svg",
  },
  {
    name: "Barstool Store",
    url: "./logos/barstool-store.svg",
  },
  {
    name: "Budweiser",
    url: "./logos/budweiser.svg",
  },
  {
    name: "BuzzFeed",
    url: "./logos/buzzfeed.svg",
  },
  {
    name: "Forbes",
    url: "./logos/forbes.svg",
  },
  {
    name: "Macy's",
    url: "./logos/macys.svg",
  },
  {
    name: "Men's Health",
    url: "./logos/menshealth.svg",
  },
  {
    name: "MrBeast",
    url: "./logos/mrbeast.svg",
  },
];

app.use(express.json());


app.get("/", (req, res) => {
  res.json({ message: "Hello from Express.js!", logos });
});


app.listen(port, () => {
  console.log("Server listening on port  http://localhost:3000/");
});
