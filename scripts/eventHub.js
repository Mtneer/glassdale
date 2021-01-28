import { CriminalList, alibi } from './criminals/criminalList.js'

const eventHub = document.querySelector("#container")
eventHub.addEventListener("change", (eventObject) => {
    if (eventObject.target.id === "crimeSelect") {
        const convictionFilter = eventObject.target.value;
        
        CriminalList(convictionFilter)
    } else if (eventObject.target.id === "officerSelect") {
        const officerFilter = eventObject.target.value;
        
        CriminalList(officerFilter)
    }   
})

const eventHubClick = document.querySelector("#container")
eventHubClick.addEventListener("click", (eventObject) => {
    if (eventObject.target.id.includes("associates")) {
        const targetID = eventObject.target.id;
        // id = "associates--#"
        const idEndIndex = targetID.length-1
        const criminalID = targetID[11,idEndIndex]
        // const criminalID = targetID.split("--")[1]
        
        alibi(criminalID)
    }   
})