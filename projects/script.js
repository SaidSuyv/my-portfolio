fetch(
    "projects.json"
)
.then(resp=>resp.json())
.then(data=>{

    let container = document.querySelector('#projects-container');

    for(let project of data)
    {
        let template = `
        <div class="card mb-3 project-item">
            <div class="row g-0">
                <div class="col-md-4">
                <img src="${project.img.src}" class="img-fluid rounded-start" alt="${project.img.alt}">
                </div>
                <div class="col-md-8">
                <div class="card-body">
                    <h5 class="card-title">${project.info.title}</h5>
                    <p class="card-text">${project.info.description}</p>
                </div>
                </div>
            </div>
            <div class="clicker" onclick="onSeeDetails(${data.indexOf(project)})"></div>
        </div>`;

        container.innerHTML += template;
    }

});

async function onSeeDetails(index)
{
    
    let modal = new bootstrap.Modal('#item-details');
    
    let elements = {
        img: document.querySelector('#card-item-details img#img-main'),
        title: document.querySelector('#card-item-details #card-title-main'),
        description: document.querySelector('#card-item-details #card-description-main'),
        see: document.querySelector('#card-item-details a#see-project-button')
    }

    elements.see.classList.add('disabled');
    elements.img.classList.add('placeholder');
    elements.see.classList.add('placeholder');

    await fetch(
        "projects.json"
    )
    .then(resp=>resp.json())
    .then(data=>{
    
        let project = data[index];
        
        elements.img.src = project.img.src;
        elements.img.alt = project.img.alt;
        elements.title.innerText = project.info.title;
        elements.description.innerText = project.info.description;
        elements.see.href = project.url;

        elements.img.classList.remove('placeholder');
        elements.see.classList.remove('placeholder');
    
    })
    .finally(()=>{
        elements.see.classList.remove('disabled');
        modal.show();
    });
}