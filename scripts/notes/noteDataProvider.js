let notes = []

export const useNotes = () => {
    return notes.slice()
}

export const getNotes = () => {
    // debugger
    return fetch("http://localhost:8088/notes")
        .then(response => response.json())
        .then(
            parsedNotes => {
                notes = parsedNotes
            }
        )
}

export const saveNote = note => {
    // debugger
    return fetch('http://localhost:8088/notes', {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify(note)
    })
}

export const deleteNote = noteID => {
    return fetch(`http://localhost:8088/notes/${noteID}`, {
        method: "DELETE",
    })
}