import { baseUrl, error, maxPageSize, pageSize } from './settings.js'

export const getBreedsPage = async (pageNumber, numberOfElement = pageSize) => {
  //pageSize = 10 // nb d'éléments par page
  //pageNumber = 1 // numéro de la page
  let breeds = []
  try {
    const res = await fetch(
      `${baseUrl}breeds?page[size]=${numberOfElement}&page[number]=${pageNumber}`,
    )
    const json = await res.json()
    for (let breed of json.data) {
      breeds.push(breed)
    }

    return breeds
  } catch (err) {
    error = err.message
  }
}

export const getAllBreedsName = async () => {
  let breeds = []
  let page = 0
  let buffer = []
  while (buffer.length !== 0 || page === 0) {
    buffer = await getBreedsPage(page, maxPageSize)
    breeds = breeds.concat(buffer)
    page++
  }
  return breeds
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

export const getRandomFacts = async (limit) => {
  try {
    const res = await fetch(`${baseUrl}facts?limit=${limit}`)
    const json = await res.json()
    let data = json.data
    let facts = []
    for (let fact of data) {
      facts.push(fact.attributes.body)
    }
    return facts
  } catch (err) {
    error = err.message
  }
}
