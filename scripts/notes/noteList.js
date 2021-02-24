import { useNotes, getNotes} from './noteDataProvider.js'
import { noteCard } from './note.js'
import { NoteForm } from './noteForm.js'
import { useCriminals } from '../criminals/CriminalsProvider.js'

export const NoteList = () => {
    let noteTarget = document.querySelector(".info-container")
    
    noteTarget.innerHTML = `
        <section class="flex-container-row">
            <article>
                <h2>Notes</h2>
                <div class="note-list flex-container">
                    
                </div>
            </article>
            <aside>
                <h3>Submit a New Note</h3>
                <div class="note-form-container">
                    
                </div>
            </aside>
        </section>
        `;
    
    printNoteCards()
    printNoteForm()
}

export const printNoteCards = () => {
    let noteHTML = ""
    getNotes().then(() => {
        let notes = useNotes();
        let criminals = useCriminals();
        
        noteHTML = notes.sort((noteA, noteB) => noteA.date - noteB.date).map(note => {
            const suspect = criminals.find(criminal => criminal.id === note.suspectID)
            
            const html = noteCard(note, suspect)
            return html
        })

        document.querySelector(".note-list").innerHTML = noteHTML.join("");
    })
}

const printNoteForm = () => {
    document.querySelector(".note-form-container").innerHTML = NoteForm();
}
