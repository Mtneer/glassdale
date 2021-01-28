/*
 * Create HTML representation of a single officer
 */

export const witness = (witnessData) => {
    return `
    <div class="witness--card card">
    <h3>${witnessData.name}</h3>
    <p>${witnessData.statements}</p>
    </div>
    `
}