let convictions = []

export const useConvictions = () => {
    return convictions.slice()
}

export const getConvictions = () => {
    return fetch("https://criminals.glassdale.us/convictions")
        .then(response => response.json())
        .then(
            parsedConvictions => {
                console.table(parsedConvictions)
                convictions = parsedConvictions
            }
        )
}