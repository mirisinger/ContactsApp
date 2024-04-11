import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import Contact from "./Contact";
import '../../css/contactsCss/contact.css';
import { getContacts } from "../../services/contactRequest";
import { useDispatch } from 'react-redux';
import { setContacts } from "../../redux/actions/contactActions";


const Contacts = (props) => {

  const dispatch = useDispatch();
  const contacts = useSelector(state => state.contacts.contacts);

  useEffect(() => {
    const fetchData = async () => {
      const fetchedContacts = await getContacts();
      dispatch(setContacts(fetchedContacts));
    };
    fetchData();
  }, []);


  const { searchText } = props;


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