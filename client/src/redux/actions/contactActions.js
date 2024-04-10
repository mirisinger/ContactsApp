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