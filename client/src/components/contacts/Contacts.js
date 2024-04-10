import React from "react";
import { useSelector } from "react-redux";
import Contact from "./Contact";
import '../../css/contactsCss/contact.css';

const Contacts = (props) => {
  const { searchText } = props;
  const contacts = useSelector(state => state.contacts.contacts);
  console.log(contacts);

  return (
    <div className="contacts-container">
      {contacts.map(contact => {
        const nameMatch = contact.name.toLowerCase().includes((searchText || '').toLowerCase());
        const phoneMatch = contact.phone.includes(searchText || '');
        if (nameMatch || phoneMatch) {
          return <Contact key={contact.id} {...contact} />;
        } else {
          return null; 
        }
      })}
    </div>
  );
};

export default Contacts;