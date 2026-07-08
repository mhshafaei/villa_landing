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
    initLightbox();
    renderHighlights(property);
    renderCTA(property);
    renderSpecifications(property);
    renderLocation(property);
    renderAmenities(property);
    renderFloatingBar(property);
    renderFooter(property);
    renderFooter(property);
    initShare(property);
    initMapModal(property);

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
    
    // console.log(callBtn.href);
    // console.log(baleBtn.href);

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
    // document.getElementById("location-Map-btn").href =
    // property.location.Map;

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
function renderFloatingBar(property){



    const callBtn = document.getElementById("floating-call");
    const baleBtn = document.getElementById("floating-bale");

    callBtn.href = `tel:${property.contact.phone}`;

    baleBtn.href = `https://ble.ir/${property.contact.bale}`;


    lucide.createIcons();

}
function initLightbox(){

    const lightbox = document.getElementById("lightbox");
    const image = document.getElementById("lightbox-image");

    const close = document.getElementById("lightbox-close");
    const next = document.getElementById("lightbox-next");
    const prev = document.getElementById("lightbox-prev");

    const images = document.querySelectorAll(".gallery-item img");

    let currentIndex = 0;

    images.forEach((img,index)=>{

        img.addEventListener("click",()=>{

            currentIndex = index;

            image.src = img.src;

            lightbox.style.display = "flex";

        });

    });

    close.addEventListener("click",()=>{

        lightbox.style.display = "none";

    });

    next.addEventListener("click",()=>{

        currentIndex++;

        if(currentIndex >= images.length){

            currentIndex = 0;

        }

        image.src = images[currentIndex].src;

    });

    prev.addEventListener("click",()=>{

        currentIndex--;

        if(currentIndex < 0){

            currentIndex = images.length - 1;

        }

        image.src = images[currentIndex].src;

    });

    lightbox.addEventListener("click",(e)=>{

    if(e.target === lightbox){

        lightbox.style.display = "none";

    }

});
document.addEventListener("keydown",(e)=>{

    if(e.key === "Escape"){

        lightbox.style.display = "none";

    }

});

}
function renderFooter(property){

    document.getElementById("footer-title").textContent =
        property.footer.title;

    document.getElementById("footer-text").textContent =
        property.footer.text;

    document.querySelector("#footer-phone span").textContent =
        property.footer.phoneLabel;

    document.querySelector("#footer-bale span").textContent =
        property.footer.baleLabel;

    document.getElementById("footer-phone").href =
        `tel:${property.contact.phone}`;

    document.getElementById("footer-bale").href =
        `https://wa.me/${property.contact.bale}`;

    document.querySelector(".footer-bottom").textContent =
        property.footer.copyright;

    lucide.createIcons();

}
function renderFooter(property){

    document.getElementById("footer-title").textContent =
        property.footer.title;

    document.getElementById("footer-text").textContent =
        property.footer.text;

    const list = document.getElementById("footer-phone-list");

    list.innerHTML = "";

    property.contacts.forEach(person=>{

        const item = document.createElement("div");

        item.className = "footer-phone";

        item.innerHTML = `
            <i data-lucide="phone"></i>

            <div>

                <strong>${person.name}</strong><br>

                ${person.phone}

            </div>
        `;

        list.appendChild(item);

    });



    document.querySelector(".footer-bottom").textContent =
        property.footer.copyright;

    lucide.createIcons();

}
function initShare(property){

const btn = document.getElementById("floating-share");

    btn.addEventListener("click", async ()=>{

        const shareData = {

            title: property.title,

            text: property.description,

            url: window.location.href

        };

        if(navigator.share){

            try{

                await navigator.share(shareData);

            }catch(err){

                console.log("Share cancelled");

            }

        }else{

            await navigator.clipboard.writeText(window.location.href);

            alert("لینک صفحه کپی شد.");

        }

    });

}
function initMapModal(property){

    const modal = document.getElementById("map-modal");

    const openBtn = document.getElementById("location-Map-btn");

    const closeBtn = document.getElementById("map-close");

    const lat = property.location.latitude;
    const lng = property.location.longitude;

    document.getElementById("map-google").href =
        `https://www.google.com/maps?q=${lat},${lng}`;

    document.getElementById("map-neshan").href =
        `https://nshn.ir/?lat=${lat}&lng=${lng}`;

    document.getElementById("map-snapp").href =
        `https://app.snapp.taxi/pre-ride?lat=${lat}&lng=${lng}`;


    document.querySelectorAll("#map-app-list a").forEach(link=>{
        link.target="_blank";
    }); 

    openBtn.addEventListener("click",function(e){

        e.preventDefault();

        modal.classList.add("show");

    });

    closeBtn.addEventListener("click",function(){

        modal.classList.remove("show");

    });

    modal.addEventListener("click",function(e){

        if(e.target===modal){

            modal.classList.remove("show");

        }

    });

}