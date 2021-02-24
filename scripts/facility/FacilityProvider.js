let facility = []

export const useFacility = () => facility.slice()

export const getFacility = () => {
    return fetch("https://criminals.glassdale.us/facilities")
        .then(response => response.json())
        .then(
            parsedFacility => {
                // console.table(parsedFacility)
                facility = parsedFacility
            }
        )
}