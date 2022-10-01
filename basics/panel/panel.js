
chrome.storage.sync.get("projectId", function(items){

    const projectIdContainer = document.getElementById("project-id");
    const loaderContainer = document.getElementsByClassName("loader-container");
    const welcomeContainer = document.getElementsByClassName("welcome-tutorial");
    const tryContainer = document.getElementsByClassName("ready-to-try");

    const projectId = items["projectId"];

    if (projectId){
        projectIdContainer.innerHTML = projectId;
        loaderContainer[0].style.display = 'none';
        welcomeContainer[0].style.display = 'none';
        tryContainer[0].style.display = 'block';

    }else{
        loaderContainer[0].style.display = 'none';
        welcomeContainer[0].style.display = 'block';
        tryContainer[0].style.display = 'none';
    }
});


document.addEventListener("DOMContentLoaded", async () => {



})