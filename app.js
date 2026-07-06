async function loadProperty(){

    const response = await fetch("data/property.json");

    const property = await response.json();

    document.getElementById("hero-kicker").textContent =
        "ویلا | شمال | شالیزار";

    document.getElementById("hero-title").textContent =
        property.subtitle;

    document.getElementById("hero-description").textContent =
        property.description;

    renderGallery(property);
    renderHighlights(property);
    renderCTA(property);

}

loadProperty();

function renderGallery(property){

    const gallery = document.getElementById("gallery-grid");

    gallery.innerHTML = "";

    property.gallery.forEach(image => {

        const item = document.createElement("div");

        item.className = "gallery-item";

        const img = document.createElement("img");

        img.src = `assets/images/gallery/${image}`;

        img.alt = property.title;

        img.loading = "lazy";

        item.appendChild(img);

        gallery.appendChild(item);

    });

}
function renderHighlights(property){

    const container = document.getElementById("highlights-grid");

    container.innerHTML = "";

    property.highlights.forEach(item=>{

        const card=document.createElement("div");
        card.className="highlight-card";

        card.innerHTML=`

            <div class="highlight-icon">${item.icon}</div>

            <h3>${item.title}</h3>

            <p>${item.text}</p>

        `;

        container.appendChild(card);

    });

}
function renderCTA(property){

    document.getElementById("cta-title").textContent =
        property.cta.title;

    document.getElementById("cta-text").textContent =
        property.cta.text;

    const callBtn = document.getElementById("call-btn");
    callBtn.textContent = property.cta.callButton;
    callBtn.href = `tel:${property.contact.phone}`;

    const bleBtn = document.getElementById("ble-btn");
    bleBtn.textContent = property.cta.bleButton;
    bleBtn.href = `https://ble.ir/${property.contact.ble}`;
    bleBtn.target = "_blank";

}