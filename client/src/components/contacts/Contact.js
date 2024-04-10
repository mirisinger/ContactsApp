import React from 'react';
import '../../css/contactsCss/contact.css';
import { useDispatch } from 'react-redux';
import { deleteContact } from '../../redux/actions/contactActions';
import { useNavigate } from 'react-router-dom';

const Contact = (props) => {
    const contact = props;
    const dispatch = useDispatch();
    const navigate = useNavigate();

    const handleDeleteContact = () => {
        dispatch(deleteContact(contact.id));
    };

    const handleContactClick = () => {
        navigate(`/contacts/${contact.id}`);
    };

    return (
        <div key={contact.id} className="contact">
            <div className="contact-avatar">
                <img src={contact.avatarUrl} alt="Avatar" />
            </div>
            <div className="contact-details">
                <div className="contact-name" onClick={handleContactClick}>{contact.name}</div>
                <div className="contact-phone">{contact.phone}</div>
            </div>
            <div className="contact-buttons">
                <button><i className="fa fa-phone" aria-hidden="true"></i></button>
            </div>
            <div className="contact-button-close" onClick={handleDeleteContact}>
                <i className="fa fa-times" aria-hidden="true"></i>
            </div>
        </div>
    );
};

export default Contact;