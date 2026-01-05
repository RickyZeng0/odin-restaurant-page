function loadCard(){
    const imageDiv = document.createElement("div");
    imageDiv.classList.add("menu-image");

    const titleDiv = document.createElement("div");
    titleDiv.classList.add("menu-title");
    titleDiv.textContent = "Lorem ipsum dolor sit.";

    const div = document.createElement("div");
    div.textContent = "Lorem ipsum dolor sit amet consectetur adipisicing elit. Obcaecati, ex.";

    const cardDiv = document.createElement("div");
    cardDiv.classList.add("menu-card");
    cardDiv.appendChild(imageDiv);
    cardDiv.appendChild(titleDiv);
    cardDiv.appendChild(div);

    const containerDiv = document.querySelector("#content");
    containerDiv.classList.add("menu");
    containerDiv.appendChild(cardDiv);
}


function loadMenu(){
    for(let i=0; i<4; i++)
    loadCard();
}

export {loadMenu} ;
