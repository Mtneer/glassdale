
import { useFacility, getFacility} from './FacilityProvider.js'
import { facility } from './facility.js'


export const FacilityList = () => {
    getFacility().then(() => {
        let Facility = useFacility();
        
        let facilityHTML = ""
        let facilityTarget = document.querySelector(".facility-list")
        Facility.forEach(perp => facilityHTML += facility(perp))
        facilityTarget.innerHTML = facilityHTML;
    })
}