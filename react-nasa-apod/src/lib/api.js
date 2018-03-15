import axios from 'axios'

export function getAPOD(date = '') {
    return axios.get('https://api.nasa.gov/planetary/apod?api_key=iaBs0rhioN1vgKXbsFYjZbsIw1pWrtTvRMoPbIOE');
}
