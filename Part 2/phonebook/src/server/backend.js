import axios from 'axios';

const BASE_URL = 'http://localhost:3004/persons';

const getAll = () => axios.get(`${BASE_URL}`);

const create = (newContact) => axios.post(`${BASE_URL}`, newContact);

const update = (newContact, id) => axios.put(`${BASE_URL}/${id}`, newContact);

const deleteContact = (id) => axios.delete(`${BASE_URL}/${id}`);

export default { getAll, create, update, deleteContact };
