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