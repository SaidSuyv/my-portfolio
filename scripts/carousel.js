function getURL()
{
    let origin = window.location.host;

    switch(origin)
    {
        case "127.0.0.1:5500":
            return "/assets/project-slide.json";
        default:
            return "/portfolio/assets/project-slide.json";
    }
};

function onLoadCarousel() {

    var container = document.querySelector("#projects div.carousel-inner");

    var url = getURL();

    fetch(
        url,
        {
            method: 'GET',
            cache: 'default'
        }
    )
    .then(data => data.json())
    .then(proj => {

        if (typeof proj == "undefined") {
            container.innerHTML = "<p>ERROR</p>";
            return;
        }

        for (let project of proj) {

            let template = `<div class="carousel-item">
            <img src="${project.img}" class="d-block w-100" alt="${project.img_alt}">
            <div class="carousel-caption d-none d-md-block">
            <h5>${project.title}</h5>
            <p>${project.description}</p>
            </div>
            </div>`;

            container.innerHTML += template;
        }

        container.children[0].classList.add('active');

    })
    .catch(error=>{
        container.innerText = error;
    });
}