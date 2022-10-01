chrome.tabs.onActivated.addListener(function(activeInfo) {
    console.log(activeInfo.tabId);

    chrome.tabs.query({active: true, lastFocusedWindow: true}, tabs => {
        let url = tabs[0].url;

        if (url && url.includes("customerly.io/projects/")){
            const queryParameters = url.split("customerly.io/projects/")[1];
            const projectId = queryParameters.split("/")[0];
            console.log("background projectID found", projectId);

            chrome.storage.sync.set({ "projectId": projectId}, function(){
                console.log(`project ID ${projectId} saved successfullt`)
            });
        }
    });
})

chrome.runtime.onMessage.addListener(function (msg, sender, sendResponse) {

    console.log("message", msg.action);

    if (msg.action === "updateIcon") {
        //chrome.action.setIcon({ path: "/images/icon_with_notification_128.png" })
        if (msg.value) {
            chrome.browserAction.setIcon({ path: "/images/icon_with_notification_128.png" });
        } else {
            chrome.browserAction.setIcon({ path: "/images/icon_with_notification_128.png" });
        }
    }
});


