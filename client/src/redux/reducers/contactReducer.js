const initialState = {
  contacts: [
    { id: '1', name: 'Dan Smith', phone: '(123) 745-526657', title: 'BA', avatarUrl: 'https://randomuser.me/api/portraits/men/1.jpg' },
    { id: '2', name: 'Alex Alvarez', phone: '(123) 542-5634271', title: 'MA', avatarUrl: 'https://randomuser.me/api/portraits/men/4.jpg' },
    { id: '3', name: 'Norman Dirtic', phone: '(724) 124-88573', title: 'Ph.D', avatarUrl: 'https://randomuser.me/api/portraits/men/3.jpg' },
  ],
};

const contactReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'ADD_CONTACT':
      // const newContact = {
      //   ...action.payload,
      //   // id: state.contacts.length + 1 // Generate id dynamically

      // };
      return {
        ...state,
        contacts: [...state.contacts, action.payload],
      };
    // case 'ADD_CONTACT':
    //   return {
    //     ...state,
    //     contacts: [...state.contacts, action.payload],
    //   };
    case 'DELETE_CONTACT':
      return {
        ...state,
        contacts: state.contacts.filter(contact => contact.id !== action.payload),
      };

      // case 'UPDATE_CONTACT':
      // return {
      //   ...state,
      //   contacts: state.contacts.map(contact =>
      //     contact.id === action.payload.id ? { ...contact, ...action.payload.newData } : contact
      //   )
      // };

      case 'UPDATE_CONTACT':
        const updatedContacts = state.contacts.map(contact => {
          if (contact.id === action.payload.id) {
            return {
              ...contact,
              name: action.payload.newData.name !== undefined ? action.payload.newData.name : contact.name,
              phone: action.payload.newData.phone !== undefined ? action.payload.newData.phone : contact.phone,
              title: action.payload.newData.title !== undefined ? action.payload.newData.title : contact.title,
              avatarUrl: action.payload.newData.avatarUrl !== undefined ? action.payload.newData.avatarUrl : contact.avatarUrl
            };
          } else {
            return contact;
          }
        });
      
        return {
          ...state,
          contacts: updatedContacts
        };
      

      case 'GET_CONTACT':
      return {
        ...state,
        selectedContact: state.contacts.find(contact => contact.id === action.payload),
      };

    default:
      return state;
  }
};

export default contactReducer;


