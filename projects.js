class Project {
  
  constructor(title, desc, image) {
    this.title = title, 
    this.desc = desc, 
    this.image = image
  }
}

function createProjects() { 
  let projects = new Array();

  projects.push( new Project(
    title = "Learning Sort Algorithms",
    desc = "it required 3 methods to implement within a bubble sort class. Coding this beginner friendly sorting algorithm really helped me understand algorithms more.",
    image = "./files/bubbles.png"
  ));

  projects.push( new Project(
    title = "Barrales Banking Record System",
    desc = "Learned more about Windows file system and how c++ handles file management. I treated the file like an API request by retrieving data from the file and put it into a data structure. This way during runtime I could make changes to the data from within the data structures.",
    image = "./files/bank_card_4.png"
  ));

  projects.push( new Project(
    title = "iTravel App",
    desc = "This project attempted to create an application helps travelers be stress-free, allowing travelers to focus more on enjoying their experience, rather than being stressed out over fight information, and allowed travelers to have all of their information in one application. I learned about databases and APIs while learning Swift.",
    image = "./files/airplane.png"
  ));

  projects.push( new Project(
    title = "IPC: Pipes",
    desc = "A program that creates different process by calling fork(). This program also allows for Interprocess communication between the parent and child processes through the use of double pipes.",
    image = "./files/double_pipes.png"
  ));

  projects.push( new Project(
    title = "Book Management System",
    desc = "A program that uses different data structures to storage and manage book data. It explores the disavantages and benefits of using certain data structures: vector, double linked list, single linked list, binary search tree, hash table.",
    image = "./files/books.png"
  ));

  projects.push( new Project(
    title = "Vector2D Structure",
    desc = "  A data structure I created when I was in Math 270B which introduced me to mathematical vectors. Vector2d is a template struct that will create a 2d vector and you can do basic vector math with scalars, dot products, and more. With it I was able do the beginning of a physics engine with have different forces interact.",
    image = "./files/vectors.png"
  ));
  return projects;
}
async function postProjects() {
  let data = createProjects();
  const response = fetch("https://barrales-d.github.io/projects.json", {
    method: "POST",
    mode:"cors", 
    cache: 'no-cache',
    credentials: 'same-origin',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(data)
  });
  return await response.json();
}


function getProjects() {
  fetch("https://barrales-d.github.io/projects.json")
    .then( response => response.json())
    .then( data => {
      console.log(data[0]);
    });
}


/* TODOs

  //  Explore writing to the projects.json file
  //  Read the json file
  //  populate the html project section with JSON information

*/

(() => {
  getProjects();
})();