import React, { useState } from 'react';
import NewContact from '../components/NewContact';

const NewContactPage = ({isNewContact}) => {
    return (
        <div>
            <NewContact isNewContact = {isNewContact}></NewContact>
        </div>
    );
};
export default NewContactPage;




// import React from 'react';
// import NewContact from '../components/NewContact';
// // import Contact from '../components/contacts/Contact';
// import { useSelector } from 'react-redux';
// import { useParams } from 'react-router-dom';


// const NewContactPage = ({ isNewContact }) => {
//   const contacts = useSelector(state => state.contacts.contacts);

//   // Function to find a contact by ID
//   const findContactById = id => contacts.find(contact => contact.id === parseInt(id));

//   // Get the contact ID from the URL params
//   const { id } = useParams();
  
//   // If it's a new contact, render the NewContact component
//   if (isNewContact) {
//     return <NewContact />;
//   } else {
//     // If it's an existing contact, find the contact by ID
//     const existingContact = findContactById(id);
    
//     // If the contact exists, render the NewContact component with contact details
//     if (existingContact) {
//       return <NewContact contact={existingContact} />;
//     } else {
//       // If the contact doesn't exist, render a message
//       return <div className="error-message">The selected contact does not exist</div>;
//     }
//   }
// };

// export default NewContactPage;



