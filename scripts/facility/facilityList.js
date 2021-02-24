
import { useFacility, getFacility} from './FacilityProvider.js'
import { facility } from './facility.js'
import { useCriminals } from '../criminals/CriminalsProvider.js'
import { useCriminalFacilities, getCriminalFacilities } from './CriminalFacilityProvider.js'

let facilityTarget = document.querySelector(".info-container")

export const FacilityList = () => {
    getFacility()
    .then(getCriminalFacilities)
    .then(() => {
        const facilities = useFacility();
        const criminals = useCriminals();
        const CriminalFacilities = useCriminalFacilities();
        
        let facilityHTML = ""

        facilityHTML = facilities.map(fac => {

            const criminalsInFacilityRels = CriminalFacilities.filter(relationship => relationship.facilityId === fac.id)

            const criminalsInFacility = criminalsInFacilityRels.map(cf => {
                const criminalMatchingFacility = criminals.find(criminal => criminal.id === cf.criminalId)
                return criminalMatchingFacility
            })
            return facility(fac, criminalsInFacility)
        })

        facilityTarget.innerHTML = `<h2>Facilities</h2><div class="facility-list">${facilityHTML}</div>`;
    })
}
