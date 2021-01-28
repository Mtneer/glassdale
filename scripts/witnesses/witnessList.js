
import { useWitness, getWitness} from './WitnessProvider.js'
import { witness } from './witness.js'


const witnessList = () => {
    getWitness().then(() => {
        let witnesses = useWitness();
        
        let witnessHTML = ""
        let witnessTarget = document.querySelector(".info-container")

        witnesses.forEach(witnessObject => witnessHTML += witness(witnessObject))

        witnessTarget.innerHTML = `<h2>Witnesses</h2><div class="witness-list flex-container">${witnessHTML}</div>`;
    })
}

document.querySelector("#witness-nav-link").addEventListener("click", () => {
    witnessList()
})