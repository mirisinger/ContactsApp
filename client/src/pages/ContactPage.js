import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import Contacts from '../components/contacts/Contacts';
import Search from '../components/contacts/Search';
import '../css/font-awesome.css'
import { useNavigate } from 'react-router-dom';
import { addContact } from '../redux/actions/contactActions'; // Import the action to add a contact
import { fetchRandomContact } from '../services/contactService'; // Import the function to fetch random contact

const ContactPage = () => {
    const [searchText, setSearchText] = useState();
    const navigate = useNavigate();
    const dispatch = useDispatch(); // Get dispatch function from redux

    const handleNewContactClick = () => {
        navigate('/contacts/new'); // Navigate to the NewContact component
    };

    // Function to handle adding a random contact
    const handleRandomContactClick = async () => {
        try {
            const randomContact = await fetchRandomContact();
            // Dispatch action to add the random contact to Redux store
            dispatch(addContact(randomContact));
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