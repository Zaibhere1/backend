require('dotenv').config()
const express = require("express");
const app = express();
const port = process.env.PORT || 3000;
const cors = require('cors')

app.use(cors());
app.use(express.json());

app.use(express.static("dist"));
app.get("/", (req, res) => {
  res.json("Hello from Express.js!");
});

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

app.get('/logos', (req, res) => {
  res.send(logos);

});



app.listen(process.env.PORT, () => {
  console.log(`Server listening on port  http://localhost:${port}`);
});
