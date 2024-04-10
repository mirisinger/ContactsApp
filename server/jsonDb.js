// In your contactRepository.js file

let contacts = [
    { id: '1', name: 'Dan Smith', phone: '(123) 745-526657', title: 'BA', avatarUrl: 'https://randomuser.me/api/portraits/men/1.jpg' },
    { id: '2', name: 'Alex Alvarez', phone: '(123) 542-5634271', title: 'MA', avatarUrl: 'https://randomuser.me/api/portraits/men/4.jpg' },
    { id: '3', name: 'Norman Dirtic', phone: '(724) 124-88573', title: 'Ph.D', avatarUrl: 'https://randomuser.me/api/portraits/men/3.jpg' }
]; // Array to store contact data

async function getAllContactRepo() {
    return contacts; // Return all contacts
}

async function insertContactRepo(name, phone, title, avatarUrl) {
    const newContact = {id:'4', name:name, phone:phone, title:title, avatarUrl:avatarUrl };
    contacts.push(newContact); // Add the new contact to the array
    return newContact.id; // Return the id of the newly added contact
}

// async function insertContactRepo(name, phone, title, avatarUrl) {
//     const newContact = { name, phone, title, avatarUrl };
//     contacts.push(newContact); // Add the new contact to the array
//     return newContact; // Return the newly added contact
// }

async function updateContactRepo(id, name, phone, title, avatarUrl) {
    const index = contacts.findIndex(contact => contact.id === id);
    if (index !== -1) {
        contacts[index] = { id, name, phone, title, avatarUrl }; // Update the contact in the array
        return true; // Return true indicating successful update
    }
    return false; // Return false if contact with given id is not found
}

async function deleteContactByIdRepo(id) {
    const initialLength = contacts.length;
    contacts = contacts.filter(contact => contact.id !== id); // Remove the contact from the array
    return contacts.length !== initialLength; // Return true if contact was deleted, false otherwise
}

module.exports = {
    getAllContactRepo,
    insertContactRepo,
    updateContactRepo,
    deleteContactByIdRepo
};
