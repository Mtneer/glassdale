/*
 * Create HTML representation of a single officer
 */

export const officer = (officerData) => {
    return `
    <div class="officer--card">
    <h3>${officerData.name}</h3>
    </div>
    `
}