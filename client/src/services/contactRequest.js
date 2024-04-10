import axios from "axios";
// const url = 'http://localhost:8080/api/contact/';
const url = process.env.BASE_URL;

const getContacts = async () => {
    try {
        let response = await axios.get(`${url}`);
        return response.data.result
    } catch (error) {
        throw new Error(error);
    }
}

const getContactsById = async (id) => {
    try {
        let response = await axios.get(`${url}getById`, { params: { id } });
        return response.data.result
    } catch (error) {
        throw new Error(error);
    }
}

const insertNewContact = async (contact) => {
    try {
        let response = await axios.post(`${url}`, contact);
        return response.data.result
    } catch (error) {
        throw new Error(error);
    }
}

const updateContact = async (contact) => {
    try {
        let response = await axios.put(`${url}`, contact);
        return response.data.result
    } catch (error) {
        throw new Error(error);
    }
}

const deleteContactById = async (id) => {
    try {
        let response = await axios.put(`${url}`, { params: { id } });
        return response.data.result
    } catch (error) {
        throw new Error(error);
    }
};
export { getContacts, getContactsById, insertNewContact, updateContact, deleteContactById };