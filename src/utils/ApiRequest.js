import axios from "axios";

export async function requestApi(endpoint, headers) {
    try {
      const response = await axios.get(endpoint, { headers: headers });
      return response.data;
    } catch (error) {
      console.error('Error making request:', error);
      throw error; // Optionally rethrow the error for the caller to handle
    }
  }