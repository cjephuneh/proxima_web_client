import axios from 'axios'
import BASE_URI from '../../../components/utils/ApiUrls'

const getstarted = async(getStartedData) => {
    const res = await axios.post('http://localhost:8000/api/getstarted/', {
      organization_name: getStartedData.organization,
      location: getStartedData.location,
      email: getStartedData.email,
      phonenumber: getStartedData.phoneNumber,
        country: getStartedData.country,
        description: getStartedData.description,

    } 
    )
    
    return res.data 
}

export default getstarted


