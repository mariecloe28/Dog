import { ref } from 'vue'
import { baseUrl, error, pageSize } from './settings.js'

export const getBreedsPage = async (pageNumber) => {
  //pageSize = 10 // nb d'éléments par page
  //pageNumber = 1 // numéro de la page
  console.log('Fetching breeds page:', pageNumber)
  const breeds = ref([])
  try {
    const res = await fetch(`${baseUrl}breeds?page[size]=${pageSize}&page[number]=${pageNumber}`)
    const json = await res.json()

    for (let breed of json.data) {
      breeds.value.push(breed)
    }

    return breeds.value
  } catch (err) {
    error.value = err.message
  }
}
