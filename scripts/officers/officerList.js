
import { useOfficers, getOfficers} from './OfficersProvider.js'
import { officer } from './officer.js'


export const OfficerList = () => {
    getOfficers().then(() => {
        let Officers = useOfficers();
        
        let officerHTML = ""
        let officerTarget = document.querySelector(".officer-list")

        // for (let i=0; i<Officers.length; i++) {
        //     officerHTML += officer(Officers[i])
        // }

        // for of works with Arrays
        // for (const variable of Officers) {
        //     officerHTML += officer(variable)
        // }

        Officers.forEach(officerObject => officerHTML += officer(officerObject))



        officerTarget.innerHTML = officerHTML;
    })
}