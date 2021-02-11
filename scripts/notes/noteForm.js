// const contentTarget = document.querySelector(".noteFormContainer")
import { CriminalSelect } from '../criminals/criminalSelector.js'
// import { getCriminals, useCriminals } from "../criminals/CriminalsProvider.js"

export const NoteForm = () => {
    // debugger
    return `
        <form>
            <fieldset class="flex-container-column">
                <label for="noteDate">Date of Entry</label>
                <input type="date" name="noteDate" id="noteDate">
                
                <label for="suspect">Suspect</label>
                <select class="dropdown" name="suspect" id="criminalSelect">
                    ${CriminalSelect()}
                </select>

                <label for="noteText">Note</label>
                <textarea name="noteText" id="noteText" cols="30" rows="10"></textarea>
    
                <!-- Record Entry Button -->
                <button id="saveNote">Save Note</button>
            </fieldset>
        </form>
    `
}
