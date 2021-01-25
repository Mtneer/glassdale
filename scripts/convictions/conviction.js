/*
 * Create HTML representation of a single conviction
 */

export const conviction = (convictionData) => {
    return `
    <div class="conviction--card">
    <h3>${convictionData.name}</h3>
    <p>Age: ${convictionData.age}</p>
    <p>Crime: ${convictionData.conviction}</p>
    <p>Term Start: ${new Date(convictionData.incarceration.start).toLocaleDateString('en-US')}</p>
    <p>Term End: ${new Date(convictionData.incarceration.end).toLocaleDateString('en-US')}</p>
    </div>
    `
}