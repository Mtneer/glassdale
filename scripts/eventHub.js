import { CriminalList, alibi } from './criminals/criminalList.js'
import { saveNote, deleteNote } from './notes/noteDataProvider.js'
import { printNoteCards } from './notes/noteList.js'

const eventHub = document.querySelector("#container")
eventHub.addEventListener("change", (eventObject) => {
    if (eventObject.target.id === "crimeSelect") {
        const convictionFilter = eventObject.target.value;
        
        CriminalList(convictionFilter)
        document.querySelector("#officerSelect").value = "0";
    } else if (eventObject.target.id === "officerSelect") {
        const officerFilter = eventObject.target.value;
        
        CriminalList(officerFilter)
        document.querySelector("#crimeSelect").value = "0";
    }   
})

eventHub.addEventListener("click", (eventObject) => {
    if (eventObject.target.id.includes("associates")) {
        
        const criminalID = eventObject.target.id.split("--")[1];
        // id = "associates--#"
        alibi(criminalID)

    } else if (eventObject.target.id === "saveNote") {
        
        eventObject.preventDefault()
        // Make a new object representation of a note
        const newNote = {
            date: document.getElementById("noteDate").value,
            suspectID: parseInt(document.getElementById("criminalSelect").value),
            note: document.getElementById("noteText").value
        }

        document.getElementById("noteDate").value = ""
        document.getElementById("criminalSelect").value = ""
        document.getElementById("noteText").value = ""

        // Change API state and application state
        saveNote(newNote)
        .then(printNoteCards) // Refresh your list of notes once you've saved your new one
    } else if (eventObject.target.id.includes("deleteNote")) {
        const noteID = eventObject.target.id.split("--")[1];
        // Change API state and application state
        deleteNote(noteID)
        .then(printNoteCards) // Refresh your list of notes once you've saved your new one
    } 
})
