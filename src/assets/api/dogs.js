import { baseUrl, error, pageSize } from './settings.js'

export const getBreedsPage = async (pageNumber) => {
  //pageSize = 10 // nb d'éléments par page
  //pageNumber = 1 // numéro de la page
  const res = await fetch(`${baseUrl}breeds?page[size]=${pageSize}&page[number]=${pageNumber}`)
  const data = await res.json()
}
