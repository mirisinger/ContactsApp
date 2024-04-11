import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import Contacts from '../components/contacts/Contacts';
import Search from '../components/contacts/Search';
import '../css/font-awesome.css'
import { useNavigate } from 'react-router-dom';
import { addContact } from '../redux/actions/contactActions'; 
import { fetchRandomContact } from '../services/contactService';
import { insertNewContact } from '../services/contactRequest';

const ContactPage = () => {
    const [searchText, setSearchText] = useState();
    const navigate = useNavigate();
    const dispatch = useDispatch();

    const handleNewContactClick = () => {
        navigate('/contacts/new'); 
    };

    // Function to handle adding a random contact
    const handleRandomContactClick = async () => {
        try {
            const randomContact = await fetchRandomContact();
            // Dispatch action to add the random contact to Redux store
            const id = await insertNewContact(randomContact);
            let newContact = { id: id, name: randomContact.name, phone: randomContact.phone, title: randomContact.title, avatarUrl: randomContact.avatarUrl };
            dispatch(addContact(newContact));
        } catch (error) {
            console.error("Error handling random contact:", error);
        }
    };

    return (
        <div className="contact-container">
            <Search searchText={searchText} setSearchText={setSearchText}></Search>
            <Contacts searchText={searchText}></Contacts>

            <div className="contact-new">
                <button onClick={handleNewContactClick}>
                    <i className="fa fa-user-plus" aria-hidden="true"></i>
                </button>
                <button onClick={handleRandomContactClick}>
                    <i className="fa fa-random" aria-hidden="true" style={{ marginLeft: '15px' }}></i>
                </button>
            </div>
        </div>
    );
};
export default ContactPage;