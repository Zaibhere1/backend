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
const projectMain = [
    {
        title: "MQEX",
        description:
            "MQEX is Message Queue Exchange. It’s a cutting-edge platform designed for IoT and telematics data management. It enables the aggregation, normalization, real-time analysis, rule triggering, and storing of data from various sources.",
        img: "MQEX.png",
    },
    {
        title: "kABU",
        description:
            "The KABU Automation System is a Supervisory Control and Data Acquisition System (SCADA) developed by Nordic Systems Engineering.  The system can be implemented in any industry where machine automation and control, data integrity, data timing, and general timing schedules are of paramount importance.",
        img: "KABU.png",
    },
    {
        title: "REFLOW",
        description:
            "Our premier solution for remotely monitoring any potential site (Telco, Oil & Gas, Smart Metering), currently deployed to control water pumps. The solution consists of a smart monitoring device installed at a remote site. The data from the site is relayed via GSM/4G network to a control room, where a user can monitor data and control all remote sites from a single control room.",
        img: "REFLOW.png",
    },
    {
        title: "MILCOTS",
        description:
            "Nordic designs and develops different test equipment for Avionics Industries, particularly in the domain of Mil-Std-1553B Bus protocol (a protocol used in avionics for communication between devices). Nordic provides laboratory equipment for emulating the entire protocol in laboratories of different universities teaching avionics engineering.",
        img: "milcots.jpeg",
    },
    {
        title: "XCUBE ERP",
        description:
            "Xcube ERP is a user-friendly system that is simple, complete, and versatile, making it easy for businesses to manage their operations. With Xcube ERP, experience the power of a robust & cloud-based solution, streamlining your business processes for maximum efficiency. Xcube ERP is for all - small, medium, and large-scale industries. Xcube ERP is cost-effective yet a high-quality & scalable solution. Xcube ERP offers tailored solutions with a team of experienced professionals spanning diverse industries, ensuring expertise beyond technology. Xcube ERP covers various business sectors, boasts qualified experts, and features a flexible architecture.",
        img: "XCUBE_ERP.png",
    },
    {
        title: "INFOGEE",
        description:
            "Digital Awareness, Women Entrepreneurship, Fostering Inclusivity, E-business-Access to global markets, Culture Revival-A serious Threat in modern days, Skill Development, Youth Engagements, Poverty alleviation via creating opportunities, Tourism promotion, Eco-tourism awareness, Social Impact, Environmental & climate Impact, Net Zero Carbon Emission.",
        img: "infogee.jpg",
    },
    {
        title: "BUSY BEE",
        description:
            "Digitalize end to end process. Massive data collection for analysis. Analysis mainly Targeting: Crop wise production analysis, Honey Production, Test Results, Livestock Production & analytics, Sales Analytics, Forecast Trends.",
        img: "busybee.jpeg",
    },
];
const teams = [
    {
        name: "Dr Salman Khalid",
        pic: "SalmanKhalid.png",
        url: "https://www.linkedin.com/in/muhammad-salman-khalid-21076835/",
        designation: "CEO",
    },
    {
        name: "Arsalan Khalid",
        pic: "Arsalan.png",
        url: "https://www.linkedin.com/in/sadiq-amin/",
        designation: "CTO / Co-Founder",
    },
    {
        name: "Sadiq Amin",
        pic: "Sadiq.jpg",
        url: "https://www.linkedin.com/in/sadiq-amin/",
        designation: "Product Owner",
    },

    {
        name: "A Razzaq Khakwani",
        pic: "Razzaq.jpg",
        url: "https://www.linkedin.com/in/arkhakwani/",
        designation: "DevOps Engineer",
    },

    {
        name: "Muhammad Zohaib",
        pic: "Zohaib.jpg",
        url: "https://www.linkedin.com/in/muhammad-zohaib-753b2baa",
        designation: "Senior Embedded Engineer",
    },

    {
        name: "Zia Ur Rehman",
        pic: "Zia.jpg",
        url: "https://www.linkedin.com/in/shuraih-seljuq/",
        designation: "Business Analyst",
    },
];
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
const MainPageProjects = [
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
];
