
import { useFacility, getFacility} from './FacilityProvider.js'
import { facility } from './facility.js'


const FacilityList = () => {
    getFacility().then(() => {
        let Facility = useFacility();
        
        let facilityHTML = ""
        let facilityTarget = document.querySelector(".info-container")
        Facility.forEach(perp => facilityHTML += facility(perp))
        facilityTarget.innerHTML = `<h2>Facilities</h2><div class="facility-list">${facilityHTML}</div>`;

    })
}

document.querySelector("#facilities-nav-link").addEventListener("click", () => {
    FacilityList()
})