export async function getCurrentTab() {
    let queryOptions = {active: true, currentWindow: true}
    let [tab] = await chrome.tabs.query(queryOptions)
    return tab;
}

export function getCustomerlyProjectId(url){
    if (url && url.includes("customerly.io/projects/")){
        const queryParameters = url.split("customerly.io/projects/")[1];
        return queryParameters.split("/")[0];
    }
}