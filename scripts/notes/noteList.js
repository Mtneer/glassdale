import { useNotes, getNotes} from './noteDataProvider.js'
import { noteCard } from './note.js'
import { NoteForm } from './noteForm.js'
import { useCriminals } from '../criminals/CriminalsProvider.js'

export const NoteList = () => {
    let noteTarget = document.querySelector(".info-container")
    let noteHTML = ""

    getNotes().then(() => {
        let notes = useNotes();
        let criminals = useCriminals();
        console.log(criminals)
        console.log(typeof criminals[0].id)
        noteHTML = notes.map(note => {
            const suspect = criminals.find(criminal => criminal.id === parseInt(note.suspectID))
            console.log(suspect)
            const html = noteCard(note, suspect)
            return html
        })
        
        noteTarget.innerHTML = `
        <section class="flex-container-row">
            <article>
                <h2>Notes</h2>
                <div class="note-list flex-container">
                    ${noteHTML}
                </div>
            </article>
            <aside>
                <h3>Submit a New Note</h3>
                <div>
                    ${NoteForm()}
                </div>
            </aside>
        </section>`;
    })
}
