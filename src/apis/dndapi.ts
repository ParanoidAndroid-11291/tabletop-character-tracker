import Axios from 'axios';

export default Axios.create({
  baseURL: 'https://dnd5eapi.co/api'
});
