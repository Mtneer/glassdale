
import { useOfficers, getOfficers} from './OfficersProvider.js'
import { officer } from './officer.js'


export const OfficerList = () => {
    getOfficers().then(() => {
        let Officers = useOfficers();
        
        let officerHTML = ""
        let officerTarget = document.querySelector(".officer-list")
        Officers.forEach(officerObject => officerHTML += officer(officerObject))
        officerTarget.innerHTML = officerHTML;
    })
}