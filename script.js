const container = document.querySelector(".container");

for (let i = 0; i <= projects.length; i++) {
  container.innerHTML += `<div class="box" title='${projects[i].description}'>
  <a target="_blank" href="https://koftovdevconnector.herokuapp.com/">
        <h2>${
          projects[i].name
        }</h2></a><a target="_blank" href="https://koftovdevconnector.herokuapp.com/">
        <img src=${getThumbnailUrl(projects[i].name)} alt="${
    projects[i].name
  }" /></a>
        <p class="tags">${tagsToChips(projects[i].tags)}</p>
        <div class="actions">
        <a target="_blank" href="https://koftovdevconnector.herokuapp.com/">
        <i class="fas fa-eye"></i> View Live
        </a>
        <a target="_blank" href="https://github.com/koftov/devconnector">
        <i class="fab fa-github"></i> Github
        </a></div>


        </div>`;
}

function getThumbnailUrl(projectName) {
  return "./img/" + projectName.toLowerCase().replace(/\s/g, "") + ".png";
}

function tagsToChips(tags) {
  return tags.split(" ").map((tag) => `<chip title="${tag}">${tag}</chip>`);
}
