export const addContact = (contact) => ({
    type: 'ADD_CONTACT',
    payload: contact,
  });
  
  export const deleteContact = (contactId) => ({
    type: 'DELETE_CONTACT',
    payload: contactId,
});

export const updateContact = (id, newData) => ({
  type: 'UPDATE_CONTACT',
  payload: {
    id,
    newData
  }
});

export const getContact = (contactId) => ({
  type: 'GET_CONTACT',
  payload: contactId,
});



// import {
//   getContacts,
//   getContactsById,
//   insertNewContact,
//   updateContact as updateContactRequest,
//   deleteContactById as deleteContactByIdRequest
// } from '../../services/contactRequest';

// // Action creators
// export const addContact = (contact) => async (dispatch) => {
//   try {
//     const newContact = await insertNewContact(contact);
//     dispatch({ type: 'ADD_CONTACT', payload: newContact });
//   } catch (error) {
//     throw new Error(error);
//   }
// };

// export const deleteContact = (contactId) => async (dispatch) => {
//   try {
//     await deleteContactByIdRequest(contactId);
//     dispatch({ type: 'DELETE_CONTACT', payload: contactId });
//   } catch (error) {
//     throw new Error(error);
//   }
// };

// export const updateContact = (id, newData) => async (dispatch) => {
//   try {
//     await updateContactRequest({ id, ...newData });
//     dispatch({ type: 'UPDATE_CONTACT', payload: { id, newData } });
//   } catch (error) {
//     throw new Error(error);
//   }
// };

// export const getContact = (contactId) => async (dispatch) => {
//   try {
//     const contact = await getContactsById(contactId);
//     dispatch({ type: 'GET_CONTACT', payload: contact });
//   } catch (error) {
//     throw new Error(error);
//   }
// };