//ojbects on the website
const github = document.getElementById('github');
const linkedin = document.getElementById('linkedin');
const instagram = document.getElementById('instagram');
const background = document.getElementById('background');

//event listeners 
github.addEventListener('mouseenter', githubBackground);

linkedin.addEventListener('mouseenter', linkedinBackground);

instagram.addEventListener('mouseenter', instagramBackground);

github.addEventListener('mouseleave', ogBackground);

linkedin.addEventListener('mouseleave', ogBackground);

instagram.addEventListener('mouseleave', ogBackground);


//functions to call from event listeners 
//changes the background
function githubBackground() {
  background.style.backgroundImage = "url('backgrounds/github.jpg')";
}

function linkedinBackground(){
  background.style.backgroundImage = "url('backgrounds/linkedin.jpg')";
}

function instagramBackground(){
  background.style.backgroundImage = "url('backgrounds/instagram.jpg')";
}

function ogBackground(){
  background.style.backgroundImage = "url('backgrounds/stars.jpg')";
}