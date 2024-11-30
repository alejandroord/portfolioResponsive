class project {
  constructor(title, description, img) {
    this._title = title;
    this._description = description;
    this._img = img;
  }
  print() {
    let element = document.getElementById("projects");
    let content = element.innerHTML;

    content += `<div class="project">
            <div class="projectImageContainer"><img alt="${this._title}img" src="${this._img}"></div>
            <div class="projectInformationContainer">
                <div class="projectInformationHeader">
                  <span>${this._title}</span>
                  <div class="iconInfo"><i class="fa-solid fa-code"></i></div>
                  <div class="iconInfo"><i class="fa-solid fa-eye"></i></div>
                </div>
                <div class="projectDescription">${this._description}</div>
            </div>
        </div>`;

    element.innerHTML = content;
  }
}

let canva = new project(
  "Test",
  "Hola",
  "https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fwww.pixground.com%2Fwp-content%2Fuploads%2F2023%2F02%2FMountain-Lake-Reflection-in-Nature-Scenery-4K-Wallpaper.jpg&f=1&nofb=1&ipt=48c9cfca75682d561d2ef9b911139457e8faba29ae259ec5edc10cd9bd43c967&ipo=images"
);
canva.print();
canva.print();
canva.print();
canva.print();
canva.print();
canva.print();
canva.print();
canva.print();
canva.print();
canva.print();
