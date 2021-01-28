import { useNotes, getNotes} from './noteDataProvider.js'
import { noteCard } from './note.js'
import { NoteForm } from './noteForm.js'

export const NoteList = () => {
    let noteTarget = document.querySelector(".info-container")
    let noteHTML = ""

    getNotes().then(() => {
        let notes = useNotes();

        notes.forEach(note => noteHTML += noteCard(note))
        
        noteTarget.innerHTML = `<section class="flex-container-row"><article><h2>Notes</h2><div class="note-list flex-container">${noteHTML}</div></article><aside><h3>Submit a New Note</h3>${NoteForm()}</aside></section>`;
    })
}
