import axios from "axios"


const Instance = axios.create({
    baseURL: 'http://localhost:4000', // Set the base URL for all requests
    headers: {
      'Content-Type': 'application/json',
      // Add any other headers as needed
    },
});

export default Instance;