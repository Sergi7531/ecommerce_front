import axios from "axios";

export const authToken = 'Token 461b5a295a3c9b42e6adbb63031814a069d471e54313fec537a8ade3d13a2093';

export async function requestApi(endpoint, options) {
  try {
    const response = await axios({
      url: endpoint,
      ...options,
    });
    return response.data;
  } catch (error) {
    console.error('Error making request:', error);
    throw error; // Optionally rethrow the error for the caller to handle
  }
}
