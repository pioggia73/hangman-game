
const getPuzzle = async (wordCount) => {
    const response = await fetch(`//puzzle.mead.io/puzzle?wordCount=${wordCount}`)
    
    if (response.status === 200) {
        const data = await response.json()
        return data.puzzle
    } else {
        throw new Error (`Unable to get puzzle`)
    }
}

const getCountry = async (countryCode) => {

    const response = await fetch(`//restcountries.eu/rest/v2/all`)

    if(response.status === 200) {
        const data = await response.json()
        return data.find((country) => country.alpha2Code === countryCode)
    } else {
        throw new Error (`Unable to fetch the country`)   
    }
}

// const getCountryOld = (countryCode) => new Promise((resolve, reject) => {
//     const countryCode = 'US'
//     const countryRequest = new XMLHttpRequest()

//     countryRequest.addEventListener('readystatechange', (e) => {
//         if (e.target.readtState === 4 && e.target.status === 200) {
//             const data = JSON.parse(e.target.responseText)
//             const country = data.find((country) => country.alpha2Code === countryCode)
//             resolve(country)
//         } else if (e.target.readtState === 4) {
//             reject(`Unable to fatch data`)
//         }
//     })

//     countryRequest.open('GET', 'http://restcountries.eu/rest/v2/all')
//     countryRequest.send()
// })

const getLocation = async () => {
    const response = await fetch(`//ipinfo.io/json?token=e6506990e88d0c`)

    if(response.status === 200){
        return response.json()

    } else {
        throw new Error (`Unable to get the current location`)
    }   
}

const getCurrentCountry = async () => {
    const location = await getLocation()
    return  country = await getCountry(location.country)
} 