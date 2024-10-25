// JavaScript for project carousel
const projects = [
  {
    title: "NBA Champions' DNA Analysis",
    description: "Analyzes NBA championship teams' statistical performance and identifies common traits among winning teams and standout players.",
    image: "images/project_1.jpeg",
    link: "https://johnathanfaria.blogspot.com/p/nba-champions-dna-analysis.html"
  },
  {
    title: "Bayesian State Estimation in Biochemical Processes",
    description: "Evaluating Bayesian state estimators for optimizing biochemical processes, with a 30-fold accuracy improvement.",
    image: "images/thesis.jpg",
    link: "https://johnathanfaria.blogspot.com/p/from-data-to-insights-enhancing.html"
  },
  {
    title: "Automating Tennis Odds Collection",
    description: "Automates tennis betting odds collection using image processing, OCR, and Google Sheets, enhancing data accuracy and saving time.",
    image: "images/tennis.jpg",
    link: "https://johnathanfaria.blogspot.com/p/tennis-odds-extraction-from-bet-365.html"
  }
];

let currentProjectIndex = 0;

function updateProjectDisplay() {
  const project = projects[currentProjectIndex];
  document.getElementById("projectTitle").textContent = project.title;
  document.getElementById("projectDescription").textContent = project.description;
  document.getElementById("projectThumbnail").src = project.image;
  document.getElementById("projectLink").href = project.link;
  currentProjectIndex = (currentProjectIndex + 1) % projects.length;
}

// Initial display and set interval for the carousel
updateProjectDisplay();
setInterval(updateProjectDisplay, 7000); // Change project every 7 seconds
