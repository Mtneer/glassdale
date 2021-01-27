/*
 * Create HTML representation of a single criminal
 */

export const criminal = (criminalData) => {
    return `
    <div class="criminal--card">
    <h3>${criminalData.name}</h3>
    <p>Age: ${criminalData.age}</p>
    <p>Crime: ${criminalData.conviction}</p>
    <p>Term Start: ${new Date(criminalData.incarceration.start).toLocaleDateString('en-US')}</p>
    <p>Term End: ${new Date(criminalData.incarceration.end).toLocaleDateString('en-US')}</p>
    <button id="associates--${criminalData.id}">Known Associates</button>
    </div>
    `
}
