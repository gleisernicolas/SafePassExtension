import { getSessionStorage } from "./storage_service"

const fetchEntries = async () => {
  try {
    token = await getSessionStorage('token')
    
    const response = await fetch('http://localhost:3000/api/v1/entries', {
      headers: {
        "Authorization": token,
        "Content-Type": "application/json"
      }
    })

    const entries = await response.json()

    if (entries.errors) {
      document.dispatchEvent(new CustomEvent('auth:signOut'))
      
      return
    } else {
      return entries
    }
    console.log(entries)
  } catch (error) {
    console.error(error)
  }
}

export default fetchEntries