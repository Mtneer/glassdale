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
        <input type="text" name="noteText" id="noteText">

        <!-- Record Entry Button -->
        <button id="saveNote">Save Note</button>
    </fieldset>
    </form>
    `
}