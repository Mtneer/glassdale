/*
 * Create HTML representation of a single criminal
 */

export const criminal = (criminalData, facilities) => {
    return `
    <div class="criminal--card card">
    <h3>${criminalData.name}</h3>
    <p>Age: ${criminalData.age}</p>
    <p>Crime: ${criminalData.conviction}</p>
    <p>Term Start: ${new Date(criminalData.incarceration.start).toLocaleDateString('en-US')}</p>
    <p>Term End: ${new Date(criminalData.incarceration.end).toLocaleDateString('en-US')}</p>
    <p>Facilities:
    <ul>
        ${facilities.map(facility => `<li>${facility.facilityName}</li>`).join("")}
    </ul>
    </p>
    <button type="button" class="btn btn-primary" data-bs-toggle="modal" data-bs-target="#staticBackdrop" id="associates--${criminalData.id}">Known Associates</button>
    </div>
    `
}
