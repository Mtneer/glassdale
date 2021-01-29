import { CriminalList, alibi } from './criminals/criminalList.js'
import { saveNote } from './notes/noteDataProvider.js'
import { NoteList } from './notes/noteList.js'

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
            date: eventObject.target.form[1].value,
            suspect: eventObject.target.form[2].value,
            note: eventObject.target.form[3].value
        }
        console.log(newNote)

        // Change API state and application state
        saveNote(newNote)
        .then(NoteList) // Refresh your list of notes once you've saved your new one
    } 
})
