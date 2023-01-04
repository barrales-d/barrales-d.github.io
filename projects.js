function createElement(name, attributes, ...children) {
  const element = document.createElement(name); 

  for(const attr in attributes) {
    element.setAttribute(attr, attributes[attr]);
  }

  for(const child of children) {
    element.appendChild(child);
  }
  return result;
}

class Tag {
  constructor(name, ...children) {
    this.tag = document.createElement(name);
    for(const child of children) {
      this.tag.appendChild(child);
    }
  }

  addAttribute(name, value) {
    this.tag.setAttribute(name, value);
    return this;
  }
  addText(text) {
    this.tag.innerText = text;
    return this;
  }
  get() {
    return this.tag;
  }
}
/* TODOs

  //  Make projects to global variable so you can push to it easier
      //  create add button / eventlistener to add a project to the array
      //  Use postProjects to update the json

  //  populate the html project section with JSON information

*/

function projectTitle() {
  return new Tag('div').addAttribute('class', 'content-title').get();
}

function projectContent(title, desc) {
  return new Tag('figcaption', 
                  new Tag('h3').addText(title).get(),
                  new Tag('p').addText(desc).get()).get();
}
function projectCard(project) {
  const content = projectContent(project.title, project.desc);
  return new Tag('figure', 
                  new Tag('img').addAttribute('src', project.image).get(),
                  content).get();
}

function projectSection(projects) {
  let cards = [];
  for(const project of projects) {
    cards.push(projectCard(project));
  }
  return new Tag('section', cards).addAttribute('class', 'grid-container').get();
}

//  MAIN 
window.onload = () => {
  const projects = JSON.parse(`[
    {
      "title":"Learning Sort Algorithms",
      "desc":"it required 3 methods to implement within a bubble sort class. Coding this beginner friendly sorting algorithm really helped me understand algorithms more.",
      "image":"./files/bubbles.png"
    },
    {
      "title":"Barrales Banking Record System",
      "desc":"Learned more about Windows file system and how c++ handles file management. I treated the file like an API request by retrieving data from the file and put it into a data structure. This way during runtime I could make changes to the data from within the data structures.",
      "image":"./files/bank_card_4.png"  
    },
    {
      "title":"iTravel App",
      "desc":"This project attempted to create an application helps travelers be stress-free, allowing travelers to focus more on enjoying their experience, rather than being stressed out over fight information, and allowed travelers to have all of their information in one application. I learned about databases and APIs while learning Swift.",
      "image":"./files/airplane.png"
    },
    {
      "title":"IPC: Pipes",
      "desc":"A program that creates different process by calling fork(). This program also allows for Interprocess communication between the parent and child processes through the use of double pipes.",
      "image":"./files/double_pipes.png"
    },
    {
      "title":"Book Management System",
      "desc":"A program that uses different data structures to storage and manage book data. It explores the disavantages and benefits of using certain data structures: vector, double linked list, single linked list, binary search tree, hash table.",
      "image":"./files/books.png"
    },
    {
      "title":"Vector2D Structure",
      "desc":"  A data structure I created when I was in Math 270B which introduced me to mathematical vectors. Vector2d is a template struct that will create a 2d vector and you can do basic vector math with scalars, dot products, and more. With it I was able do the beginning of a physics engine with have different forces interact.",
      "image":"./files/vectors.png"
    }
  ]`);

  console.log(
    projectCard(projects[0])
  )

};