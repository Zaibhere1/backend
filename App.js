require('dotenv').config()
const express = require("express");
const app = express();
const port = process.env.PORT || 3000;
const cors = require('cors')

app.use(cors());
app.use(express.json());

// app.use(express.static("dist"));
app.get("/", (req, res) => {
  res.json("Hello from Express.js!");
});

const logos = [
  {
    name: "3M",
    url: "/logos/3m.svg",
  },
  {
    name: "Barstool Store",
    url: "/logos/barstool-store.svg",
  },
  {
    name: "Budweiser",
    url: "/logos/budweiser.svg",
  },
  {
    name: "BuzzFeed",
    url: "/logos/buzzfeed.svg",
  },
  {
    name: "Forbes",
    url: "/logos/forbes.svg",
  },
  {
    name: "Macy's",
    url: "/logos/macys.svg",
  },
  {
    name: "Men's Health",
    url: "/logos/menshealth.svg",
  },
  {
    name: "MrBeast",
    url: "/logos/mrbeast.svg",
  },
  {
    name: "3M",
    url: "/logos/3m.svg",
  },
  {
    name: "Barstool Store",
    url: "/logos/barstool-store.svg",
  },
  {
    name: "Budweiser",
    url: "/logos/budweiser.svg",
  },
  {
    name: "BuzzFeed",
    url: "/logos/buzzfeed.svg",
  },
  {
    name: "Forbes",
    url: "/logos/forbes.svg",
  },
  {
    name: "Macy's",
    url: "/logos/macys.svg",
  },
  {
    name: "Men's Health",
    url: "/logos/menshealth.svg",
  },
  {
    name: "MrBeast",
    url: "/logos/mrbeast.svg",
  },
  {
    name: "3M",
    url: "/logos/3m.svg",
  },
  {
    name: "Barstool Store",
    url: "/logos/barstool-store.svg",
  },
  {
    name: "Budweiser",
    url: "/logos/budweiser.svg",
  },
  {
    name: "BuzzFeed",
    url: "/logos/buzzfeed.svg",
  },
  {
    name: "Forbes",
    url: "/logos/forbes.svg",
  },
  {
    name: "Macy's",
    url: "/logos/macys.svg",
  },
  {
    name: "Men's Health",
    url: "/logos/menshealth.svg",
  },
  {
    name: "MrBeast",
    url: "/logos/mrbeast.svg",
  },
  {
    name: "3M",
    url: "/logos/3m.svg",
  },
  {
    name: "Barstool Store",
    url: "/logos/barstool-store.svg",
  },
  {
    name: "Budweiser",
    url: "/logos/budweiser.svg",
  },
  {
    name: "BuzzFeed",
    url: "/logos/buzzfeed.svg",
  },
  {
    name: "Forbes",
    url: "/logos/forbes.svg",
  },
  {
    name: "Macy's",
    url: "/logos/macys.svg",
  },
  {
    name: "Men's Health",
    url: "/logos/menshealth.svg",
  },
  {
    name: "MrBeast",
    url: "/logos/mrbeast.svg",
  },
  {
    name: "3M",
    url: "/logos/3m.svg",
  },
  {
    name: "Barstool Store",
    url: "/logos/barstool-store.svg",
  },
  {
    name: "Budweiser",
    url: "/logos/budweiser.svg",
  },
  {
    name: "BuzzFeed",
    url: "/logos/buzzfeed.svg",
  },
  {
    name: "Forbes",
    url: "/logos/forbes.svg",
  },
  {
    name: "Macy's",
    url: "/logos/macys.svg",
  },
  {
    name: "Men's Health",
    url: "/logos/menshealth.svg",
  },
  {
    name: "MrBeast",
    url: "/logos/mrbeast.svg",
  },
  {
    name: "3M",
    url: "/logos/3m.svg",
  },
  {
    name: "Barstool Store",
    url: "/logos/barstool-store.svg",
  },
  {
    name: "Budweiser",
    url: "/logos/budweiser.svg",
  },
  {
    name: "BuzzFeed",
    url: "/logos/buzzfeed.svg",
  },
  {
    name: "Forbes",
    url: "/logos/forbes.svg",
  },
  {
    name: "Macy's",
    url: "/logos/macys.svg",
  },
  {
    name: "Men's Health",
    url: "/logos/menshealth.svg",
  },
  {
    name: "MrBeast",
    url: "/logos/mrbeast.svg",
  },
  {
    name: "3M",
    url: "/logos/3m.svg",
  },
  {
    name: "Barstool Store",
    url: "/logos/barstool-store.svg",
  },
  {
    name: "Budweiser",
    url: "/logos/budweiser.svg",
  },
  {
    name: "BuzzFeed",
    url: "/logos/buzzfeed.svg",
  },
  {
    name: "Forbes",
    url: "/logos/forbes.svg",
  },
  {
    name: "Macy's",
    url: "/logos/macys.svg",
  },
  {
    name: "Men's Health",
    url: "/logos/menshealth.svg",
  },
  {
    name: "MrBeast",
    url: "/logos/mrbeast.svg",
  },
  {
    name: "3M",
    url: "/logos/3m.svg",
  },
  {
    name: "Barstool Store",
    url: "/logos/barstool-store.svg",
  },
  {
    name: "Budweiser",
    url: "/logos/budweiser.svg",
  },
  {
    name: "BuzzFeed",
    url: "/logos/buzzfeed.svg",
  },
  {
    name: "Forbes",
    url: "/logos/forbes.svg",
  },
  {
    name: "Macy's",
    url: "/logos/macys.svg",
  },
  {
    name: "Men's Health",
    url: "/logos/menshealth.svg",
  },
  {
    name: "MrBeast",
    url: "/logos/mrbeast.svg",
  },
  {
    name: "3M",
    url: "/logos/3m.svg",
  },
  {
    name: "Barstool Store",
    url: "/logos/barstool-store.svg",
  },
  {
    name: "Budweiser",
    url: "/logos/budweiser.svg",
  },
  {
    name: "BuzzFeed",
    url: "/logos/buzzfeed.svg",
  },
  {
    name: "Forbes",
    url: "/logos/forbes.svg",
  },
  {
    name: "Macy's",
    url: "/logos/macys.svg",
  },
  {
    name: "Men's Health",
    url: "/logos/menshealth.svg",
  },
  {
    name: "MrBeast",
    url: "/logos/mrbeast.svg",
  },
  {
    name: "3M",
    url: "/logos/3m.svg",
  },
  {
    name: "Barstool Store",
    url: "/logos/barstool-store.svg",
  },
  {
    name: "Budweiser",
    url: "/logos/budweiser.svg",
  },
  {
    name: "BuzzFeed",
    url: "/logos/buzzfeed.svg",
  },
  {
    name: "Forbes",
    url: "/logos/forbes.svg",
  },
  {
    name: "Macy's",
    url: "/logos/macys.svg",
  },
  {
    name: "Men's Health",
    url: "/logos/menshealth.svg",
  },
  {
    name: "MrBeast",
    url: "/logos/mrbeast.svg",
  },
];

app.get('/logos', (req, res) => {
  res.send(logos);

});

const projects = [
  {
    title: "MQEX",
    description:
      "Aggregate, normalize, analyze IoT and telematics data in real-time. Trigger rules and store data from multiple sources.",
    img: "MQEX.png",
  },
  {
    title: "kABU",
    description:
      "SCADA system for industrial automation and control. Ensures data integrity, timing, and efficient process management.",
    img: "KABU.png",
  },
  {
    title: "REFLOW",
    description:
      "Remotely monitor and control sites via GSM/4G. Ideal for water pumps, with central data monitoring and control.",
    img: "REFLOW.png",
  },
  {
    title: "MILCOTS",
    description:
      "Develops test equipment for Avionics Industries, specializing in Mil-Std-1553B Bus protocol.",
    img: "milcots.jpeg",
  },
  {
    title: "XCUBE ERP",
    description:
      "User-friendly ERP for all business sizes. Streamlines operations, offers cloud-based solutions, and provides tailored support.",
    img: "XCUBE_ERP.png",
  },
  {
    title: "INFOGEE",
    description:
      "Fosters digital awareness, women entrepreneurship, and social impact through technology and education.",
    img: "infogee.jpg",
  },
  {
    title: "BUSY BEE",
    description:
      "Digitalizes end-to-end beekeeping processes. Collects and analyzes data for production, sales, and forecasting.",
    img: "busybee.jpeg",
  },
];

app.get('/projects', (req, res) => {
  res.send(projects);
});


app.listen(process.env.PORT, () => {
  console.log(`Server listening on port  https://localhost:${port}`);
});
