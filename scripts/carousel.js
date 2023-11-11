function onLoadCarousel() {

    var container = document.querySelector("#projects div.carousel-inner");

    fetch(
        "project-slide.json",
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
        document.querySelector('#projects').innerText = error;
    });
}

function onLoadSkills()
{

    var container = document.querySelector('#skills .skills-display');

    fetch(
        "skills.json",
        {
            method: "GET",
            cache: "default"
        }
    )
    .then(data => data.json())
    .then(skills => {
        if(typeof skills == 'undefined')
        {
            container.innerText = "There was an error. No skills were loaded";
            return;
        }

        for(let skill of skills)
        {
            let template = `
                <div class="progress-container px-2 ${skill.class}">
                    <img class="w-100 my-3" src="${skill.src}">
                    <div class="progress" role="progressbar">
                        <div class="progress-bar" style="width: ${skill.percentage}">${skill.percentage}</div>
                    </div>
                </div>
            `;

            container.innerHTML += template;
        }

        document.querySelector("#skills").innerHTML += "<h2 class='text-center py-4'>Y muchos más...</h2>";

    })
    .catch(error=>{
        container.innerText = "There was an error. No skills were loaded.";
    });

}