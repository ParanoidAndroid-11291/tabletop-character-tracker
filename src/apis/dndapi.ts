import Axios from 'axios';

export default Axios.create({
  baseURL: 'http://192.168.1.239:8080/https://dnd5eapi.co'
});
