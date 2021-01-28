export const noteCard = (noteData) => {
    return `
    <div class="note--card card">
    <h3>${noteData.date}</h3>
    <h4><strong>Suspect:</strong> ${noteData.suspect}</h4>
    <p>${noteData.note}</p>
    </div>
    `
}