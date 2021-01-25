let facility = []

export const useFacility = () => {
    return facility.slice()
}

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