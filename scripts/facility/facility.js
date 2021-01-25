/*
 * Create HTML representation of a single facility
 */

export const facility = (facilityData) => {
    return `
    <div class="facility--card">
    <h3>${facilityData.facilityName}</h3>
    <p>Security Level: ${facilityData.securityLevel}</p>
    </div>
    `
}