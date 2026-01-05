import "./style.css";
import { loadMenu } from "./menu.js";

function cleanContent(){
    const containerDiv = document.querySelector("#content");
    while(containerDiv.firstChild){
        containerDiv.removeChild(containerDiv.firstChild);
    }
}

function loadHomePage(){
    const titleDiv = document.createElement("div");
    titleDiv.classList.add("home-title");

    titleDiv.textContent = "Lorem ipsum dolor sit amet.";
    const imageDiv = document.createElement("div");
    imageDiv.classList.add("home-image");

    const div = document.createElement("div");
    div.textContent = "Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugit nostrum delectus eum ipsum ab quia nulla eafuga quis eos?";

    const containerDiv = document.querySelector("#content");
    containerDiv.classList.add("home");
    containerDiv.appendChild(titleDiv);
    containerDiv.appendChild(imageDiv);
    containerDiv.appendChild(div);
}



cleanContent();
//loadHomePage()
loadMenu();

