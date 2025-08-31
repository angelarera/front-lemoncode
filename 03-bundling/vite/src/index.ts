import "./mystyles.scss";
import classes from "./title.module.scss";
import config from "./env-config";

const h1Element = document.createElement("h1");
h1Element.className = classes.title;
h1Element.textContent = "Welcome back!";
document.body.appendChild(h1Element);

console.log(config.MY_VARIABLE);
