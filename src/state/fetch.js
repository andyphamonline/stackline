import axios from 'axios'

// mimic making an async request for data
export const fetchData = async () => {
  try {
    const json = await axios.get('data.json')
    console.log(json)

  } catch(e) {
    console.log(e)
  }


}
