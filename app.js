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

// console.log(property);
// console.log(property.specifications);

    renderSpecifications(property);
    renderLocation(property);
    renderAmenities(property);

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

            <div class="highlight-icon">
    <i data-lucide="${item.icon}"></i>
</div>

            <h3>${item.title}</h3>

            <p>${item.text}</p>

        `;

        container.appendChild(card);

    });
    lucide.createIcons();

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


    AOS.init({
        duration: 700,
        once: true,
        offset: 80
    });

function renderSpecifications(property){

    const grid = document.getElementById("specifications-grid");

    grid.innerHTML = "";

    property.specifications.forEach(item=>{

        const card = document.createElement("div");

        card.className = "spec-card";

        card.innerHTML = `
            <div class="spec-icon">
                <i data-lucide="${item.icon}"></i>
            </div>

            <div>
                <div class="spec-label">${item.label}</div>
                <div class="spec-value">${item.value}</div>
            </div>
        `;

        grid.appendChild(card);

    });

    lucide.createIcons();

}
function renderLocation(property){

    // نقشه
    const map = document.getElementById("location-map");

    map.innerHTML = `
        <iframe
            src="https://maps.google.com/maps?q=${property.location.latitude},${property.location.longitude}&z=14&output=embed"
            loading="lazy"
            allowfullscreen>
        </iframe>
    `;

    // کارت‌های فاصله
    const grid = document.getElementById("distance-grid");

    grid.innerHTML = "";

    property.location.distances.forEach(item=>{

        const card = document.createElement("div");

        card.className = "distance-card";

        card.innerHTML = `
            <div class="distance-icon">
                <i data-lucide="${item.icon}"></i>
            </div>

            <div>
                <div class="distance-title">${item.title}</div>
                <div class="distance-value">${item.value}</div>
            </div>
        `;

        grid.appendChild(card);

    });

    lucide.createIcons();

}
function renderAmenities(property){

    const grid = document.getElementById("amenities-grid");

    grid.innerHTML = "";

    property.amenities.forEach(item=>{

        const card = document.createElement("div");

        card.className = "amenity-card";

        card.innerHTML = `
            <div class="amenity-icon">
                <i data-lucide="${item.icon}"></i>
            </div>

            <div class="amenity-title">
                ${item.title}
            </div>
        `;

        grid.appendChild(card);

    });

    lucide.createIcons();

}