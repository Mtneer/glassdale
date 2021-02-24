/*
 * Create HTML representation of a single facility
 */

export const facility = (facilityData, criminals) => {
    return `
    <div class="facility--card">
    <h3>${facilityData.facilityName}</h3>
    <p>Security Level: ${facilityData.securityLevel}</p>
    <p>Criminals:
    <ul>${criminals.map(criminal => `<li>${criminal.name}</li>`).join("")}
    </div>
    `
}