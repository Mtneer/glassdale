
import { useConvictions, getConvictions} from './ConvictionsProvider.js'
import { conviction } from './conviction.js'


export const convictionList = () => {
    getConvictions().then(() => {
        let Convictions = useConvictions();
        
        let convictionHTML = ""
        let convictionTarget = document.querySelector(".conviction-list")
        Convictions.forEach(perp => convictionHTML += conviction(perp))
        convictionTarget.innerHTML = convictionHTML;
    })
}