import { baseUrl, error, pageSize } from './settings.js'

export const getBreedsPage = async (pageNumber) => {
  //pageSize = 10 // nb d'éléments par page
  //pageNumber = 1 // numéro de la page
  console.log('Fetching breeds page:', pageNumber)
  let breeds = []
  try {
    const res = await fetch(`${baseUrl}breeds?page[size]=${pageSize}&page[number]=${pageNumber}`)
    const json = await res.json()

    for (let breed of json.data) {
      breeds.push(breed)
    }

    return breeds
  } catch (err) {
    error = err.message
  }
}

export const getBreedAttributesById = async (breedId) => {
  let breed = null
  try {
    const res = await fetch(`${baseUrl}breeds/${breedId}`)
    const json = await res.json()
    breed = json.data.attributes
    return breed
  } catch (err) {
    error = err.message
  }
}
