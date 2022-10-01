chrome.storage.sync.get("projectId", function(items) {

    const projectId = items["projectId"];

     let cly = document.createElement("script");
     cly.id = "customerly-snippet";
     cly.setAttribute("data-project-id", projectId);

     cly.src = chrome.runtime.getURL(`customerly-snippet.js`);
     cly.onload = function() {
         this.remove();
     };
     (document.body || document.documentElement).appendChild(cly);

 })