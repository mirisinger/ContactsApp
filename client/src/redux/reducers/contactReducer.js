const initialState = {
  contacts: [
    // { id: '1', name: 'Dan Smith', phone: '(123) 745-526657', title: 'BA', avatarUrl: 'https://randomuser.me/api/portraits/men/1.jpg' },
    // { id: '2', name: 'Alex Alvarez', phone: '(123) 542-5634271', title: 'MA', avatarUrl: 'https://randomuser.me/api/portraits/men/4.jpg' },
    // { id: '3', name: 'Norman Dirtic', phone: '(724) 124-88573', title: 'Ph.D', avatarUrl: 'https://randomuser.me/api/portraits/men/3.jpg' },
  ],
};

const contactReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'ADD_CONTACT':
      return {
        ...state,
        contacts: [...state.contacts, action.payload],
      };

    case 'GET_CONTACT':
      return {
        ...state,
        selectedContact: state.contacts.find(contact => contact.id === action.payload),
      };

      case 'SET_CONTACTS':
        return {
          ...state,
          contacts: action.payload,
        };

    case 'UPDATE_CONTACT':
      const updatedContacts = state.contacts.map(contact => {
        if (contact.id === action.payload.contact.id) {
          return {
            ...contact,
            name: action.payload.contact.name !== undefined ? action.payload.contact.name : contact.name,
            phone: action.payload.contact.phone !== undefined ? action.payload.contact.phone : contact.phone,
            title: action.payload.contact.title !== undefined ? action.payload.contact.title : contact.title,
            avatarUrl: action.payload.contact.avatarUrl !== undefined ? action.payload.contact.avatarUrl : contact.avatarUrl
          };
        } else {
          return contact;
        }
      });

      return {
        ...state,
        contacts: updatedContacts
      };

    case 'DELETE_CONTACT':
      return {
        ...state,
        contacts: state.contacts.filter(contact => contact.id !== action.payload),
      };

    default:
      return state;
  }
};

export default contactReducer;