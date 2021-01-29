// const contentTarget = document.querySelector(".noteFormContainer")

export const NoteForm = () => {
    // contentTarget.innerHTML = `
    return ` 
    <form>
    <fieldset class="flex-container-column">
        <label for="noteDate">Date of Entry</label>
        <input type="date" name="noteDate" id="noteDate">

        <label for="suspect">Suspect</label>
        <input type="text" name="suspect" id="suspect">
                    
        <label for="noteText">Note</label>
        <textarea name="noteText" id="noteText" cols="30" rows="10"></textarea>
        
    <!-- Record Entry Button -->
    <button id="saveNote">Save Note</button>
    </fieldset>
    </form>
    `
}