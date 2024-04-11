import React, { useState } from 'react';
import NewContact from '../components/NewContact';

const NewContactPage = ({ isNewContact }) => {
    return (
        <div>
            <NewContact isNewContact={isNewContact}></NewContact>
        </div>
    );
};
export default NewContactPage;