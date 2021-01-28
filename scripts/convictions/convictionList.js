
import { useConvictions, getConvictions} from './ConvictionsProvider.js'
import { conviction } from './conviction.js'


export const ConvictionList = () => {
    getConvictions().then(() => {
        let Convictions = useConvictions();
        
        let convictionHTML = ""
        let convictionTarget = document.querySelector(".conviction-list")
        Convictions.forEach(perp => convictionHTML += conviction(perp))
        convictionTarget.innerHTML = `<h2>Convictions</h2><div class="conviction-list">${convictionHTML}</div>`;
    })
}
