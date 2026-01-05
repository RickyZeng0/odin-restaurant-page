function loadContact(){
    const teleDiv = document.createElement("div");
    teleDiv.textContent = "Telfono : 1234 5678"

    const emailDiv = document.createElement("div");
    emailDiv.textContent = "Email : contacto@restaurante.com";

    const addressDiv = document.createElement("div");
    addressDiv.textContent = "Address : Hollywood Boulevard 42, Los Angeles, USA";

    const containerDiv = document.querySelector("#content");
    containerDiv.classList.remove("home","menu");
    containerDiv.classList.add("contact");
    containerDiv.appendChild(teleDiv);
    containerDiv.appendChild(emailDiv);
    containerDiv.appendChild(addressDiv);
}

export {loadContact} ;
