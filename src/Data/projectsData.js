import fbimg from "../Images/facebook post model.png";
import warehouseimg from "../Images/Warehouses.png";
import recipesimg from "../Images/Food-recipe-app.png";
import shoppingimg from "../Images/React-shopping-cart.png";
import currencyimg from "../Images/Currency-converter.png";
import todoimg from "../Images/Todo-app.png";
import clockimg from "../Images/Clock.png";
import dictionaryimg from "../Images/dictionary-app.png";

const projectsData = [
  {
    no: 1,
    image: shoppingimg,
    projectName: "React Shopping Cart",
    description:
      "This is a Food Cart App. In this we can add food items into the cart. And in this, food items are separated according to their type like vegetables, fruits and nuts. This app is designed with React.",
    technologiesUsed: ["ReactJs", "HTML", "CSS", "Api", "Bootstrap"],
    liveAt: "https://03s3u.csb.app/",
    githubRepo: "https://github.com/manasabingi115/React-Shopping-Cart"
  },
  {
    no: 2,
    image: warehouseimg,
    projectName: "WareHouses (Redux) Project",
    description:
      "This is a project using Redux. We can search WareHouses with the name of Warehouse. Added filter functionality for different categories (cities, clusters and space availability). We can edit WareHouse details by clicking on the warehouse name.",
    technologiesUsed: ["ReactJs", "Redux", "HTML", "CSS", "Api", "Bootstrap"],
    liveAt: "https://06gfhm.csb.app/",
    githubRepo: "https://github.com/manasabingi115/WoreHouses-Redux-project"
  },
  {
    no: 3,
    image: fbimg,
    projectName: "Facebook Post Model",
    description:
      "In this App, we can post text and GIFs. I have used Giphy API for fetching the Gifs, and also made my App responsive. Added color functionality for background. I used localStorage for persisting the data even after refreshing the page.",
    technologiesUsed: ["ReactJs", "HTML", "CSS", "Giphy Api", "Bootstrap"],
    liveAt: "https://react-w7phqf.stackblitz.io",
    githubRepo: "https://github.com/manasabingi115/Facebook-Post-model-"
  },
  {
    no: 4,
    image: recipesimg,
    projectName: "Food Recipe App",
    description:
      "This is a Food Recipe App. In this we can search for different types of food recipes which we want. This app is designed with React.",
    technologiesUsed: ["ReactJs", "HTML", "CSS", "Api", "Bootstrap"],
    liveAt: "https://yvltb.csb.app/",
    githubRepo: "https://github.com/manasabingi115/Food-Recipe-App"
  },
  {
    no: 5,
    image: todoimg,
    projectName: "Todo application based on REST API",
    description:
      "This Todo list app is generally used to maintain our day-to-day tasks. We can add/delete/update tasks. It used a third party REST API as a backend service. It is built with HTML,CSS and JavaScript. It uses REST API to fetch the data.",
    technologiesUsed: ["JavaScript", "HTML", "CSS", "Api"],
    liveAt: "https://web-platform-fhwhid.stackblitz.io",
    githubRepo: "https://github.com/manasabingi115/Todo-REST-application"
  },
  {
    no: 6,
    image: currencyimg,
    projectName: "Currency Converter",
    description:
      "This is a Currency-converter app used to change the currency from one country to another.",
    technologiesUsed: ["JavaScript", "HTML", "CSS"],
    liveAt: "https://lt1b3.csb.app/",
    githubRepo: "https://github.com/manasabingi115/currency-converter"
  },
  {
    no: 7,
    image: dictionaryimg,
    projectName: "Dictionary App",
    description:
      "This is a dictionary-app.In this we can find meanings of the word which we want. And also we can get pronunciation, one example sentence and origin of the word.",
    technologiesUsed: ["JavaScript", "HTML", "CSS"],
    liveAt: "https://5ezg5.csb.app/",
    githubRepo: "https://github.com/manasabingi115/dictionary-app"
  },
  {
    no: 8,
    image: clockimg,
    projectName: "Analog Clock",
    description: "This is a clock designed with HTML and CSS.",
    technologiesUsed: ["HTML", "CSS"],
    liveAt: "https://1gs6i.csb.app/",
    githubRepo: "https://github.com/manasabingi115/Clock"
  }
];

export default projectsData;
