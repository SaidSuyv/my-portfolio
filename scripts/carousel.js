function onLoadCarousel() {

    var container = document.querySelector("#projects div.carousel-inner");

    fetch(
        "../assets/project-slide.json"
    )
    .then(data => data.json())
    .then(proj => {

        if (typeof proj == "undefined") {
            container.innerHTML = "<p>ERROR</p>";
            return;
        }

        for (let project of proj) {
            let template = `<div class="carousel-item active">
            <img src="${project.img}" class="d-block w-100" alt="${project.img_alt}">
            <div class="carousel-caption d-none d-md-block">
            <h5>${project.title}</h5>
            <p>${project.description}</p>
            </div>
            </div>`;

            container += template;
        }

    })
    .catch(error=>{
        container.innerText = error;
    });
}