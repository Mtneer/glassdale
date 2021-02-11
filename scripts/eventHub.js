import { CriminalList, alibi } from './criminals/criminalList.js'
import { saveNote } from './notes/noteDataProvider.js'
import { printNoteCards } from './notes/noteList.js'

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

eventHub.addEventListener("click", (eventObject) => {
    if (eventObject.target.id.includes("associates")) {
        console.log(eventObject.target.id)
        const criminalID = eventObject.target.id.split("--")[1];
        // id = "associates--#"
        alibi(criminalID)

    } else if (eventObject.target.id === "saveNote") {
        console.log(eventObject)
        eventObject.preventDefault()
        // Make a new object representation of a note
        const newNote = {
            date: document.getElementById("noteDate").value,
            suspectID: document.getElementById("criminalSelect").value,
            note: document.getElementById("noteText").value
        }
        console.log(newNote)

        // Change API state and application state
        saveNote(newNote)
        .then(printNoteCards) // Refresh your list of notes once you've saved your new one
    } 
})
