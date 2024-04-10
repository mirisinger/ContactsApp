import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useParams, useNavigate } from 'react-router-dom';
import { addContact, updateContact } from '../redux/actions/contactActions';
import ContactValidation from '../validations/ContactValidation';
import '../css/contactsCss/contact.css'
import { v4 as uuidv4 } from 'uuid';


const NewContact = ({ isNewContact }) => {
    const { id } = useParams();
    const navigate = useNavigate();
    const dispatch = useDispatch();
    const contacts = useSelector(state => state.contacts.contacts);

    const [values, setValues] = useState({
        name: '',
        phone: '',
        title: '',
        avatarUrl: ''
    });

    const [errors, setErrors] = useState({});
    const [noContact, set_noContact] = useState(false);

    useEffect(() => {
        if (isNewContact) {
            setValues({ ...values, avatarUrl: GetRandomAvatarUrl() });
        } else if (id) {
            getAnExistingContact();
        }
    }, [id, isNewContact]);

    const getAnExistingContact = async () => {
        const existingContact = contacts.find(c => c.id === id);
        if (existingContact) {
            setValues(existingContact);
        } else {
            set_noContact(true);
        }
    };


    const handleInput = (e) => {
        setValues({ ...values, [e.target.name]: e.target.value });
    };

    const handleValidation = (e) => {
        e.preventDefault();
        const validationErrors = ContactValidation(values);
        setErrors(validationErrors);
        if (Object.keys(validationErrors).length === 0) {
            handleSaveButon();
        }
    };

    const handleSaveButon = () => {
        const uniqueId = uuidv4();
        const contact = { id: uniqueId, name: values.name, phone: values.phone, title: values.title, avatarUrl: values.avatarUrl };

        if (isNewContact) {
            dispatch(addContact(contact));
            setValues({ name: '', phone: '', title: '' });
            const avatar = GetRandomAvatarUrl;
            setValues({ ...values, avatarUrl: avatar });
        }
        else {
            dispatch(updateContact(id, contact));
        }
        navigate('/');
    };

    const GetRandomAvatarUrl = () => {
        const gender = Math.random() < 0.5 ? 'men' : 'women';
        const number = Math.floor(Math.random() * 100);
        return `https://randomuser.me/api/portraits/${gender}/${number}.jpg`;
    };

    return (
        <div className="contact-container">
            <div className="new-contact-container">
                <div className="new-contact-avatar">
                    <img src={values.avatarUrl} alt="Avatar" />
                    <button onClick={() => setValues({ ...values, avatarUrl: GetRandomAvatarUrl() })} disabled={noContact}>
                        <i className="fa fa-refresh" aria-hidden="true"></i>
                    </button>
                </div>
                <form onSubmit={handleValidation}>
                    <div className="new-contact-inputs">
                        <div className="new-contact-input">
                            <label>Name</label>
                            <input name="name" value={values.name} onChange={handleInput} disabled={noContact} />
                            {errors.name && <p className="error-message">{errors.name}</p>}
                        </div>

                        <div className="new-contact-input">
                            <label>Phone</label>
                            <input name="phone" value={values.phone} onChange={handleInput} disabled={noContact} />
                            {errors.phone && <p className="error-message">{errors.phone}</p>}
                        </div>

                        <div className="new-contact-input">
                            <label>Title</label>
                            <input name="title" value={values.title} onChange={handleInput} disabled={noContact} />
                            {errors.title && <p className="error-message">{errors.title}</p>}
                        </div>
                    </div>
                    <div className="new-contact-buttons">
                        <button className="button-ok" type="submit" disabled={noContact}>Save</button>
                        <button className="button-cancel" onClick={navigate.bind(null, '/')}>Cancel</button>
                    </div>
                    {noContact && <p style={{ color: 'red' }}>The selected contact does not exist</p>}
                </form>
            </div>
        </div>
    );
};

export default NewContact;