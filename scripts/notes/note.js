export const noteCard = (noteData, suspect) => {
    return `
    <div class="note--card card">
    <h3>${noteData.date}</h3>
    <h4><strong>Suspect:</strong> ${suspect.name}</h4>
    <p>${noteData.note}</p>
    </div>
    `
}