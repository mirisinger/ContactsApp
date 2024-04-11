const {
    getAllContactRepo,
    insertContactRepo,
    updateContactRepo,
    deleteContactByIdRepo
} = require('../serverData.js');
// } = require('../repositories/contactRepositpry');

async function getAllContact(req, res) {
    try {
        const contacts = await getAllContactRepo();
        res.send(contacts);
    } catch (error) {
        res.status(500).json({ error: 'Internal Server Error' });
    }
}

async function addContact(req, res) {
    try {
        const { name, phone, title, avatarUrl } = req.body;
        res.send(await insertContactRepo(
            name, phone, title, avatarUrl
        ));
    }
    catch {
        res.status(500).json({ error: 'Internal Server Error' });
    }
}

async function updateContact(req, res) {
    try {
        const { id, name, phone, title, avatarUrl } = req.body;
        const success = await updateContactRepo(id, name, phone, title, avatarUrl);
        if (success) {
            res.status(200).json({ message: 'Contact updated successfully' });
        } else {
            res.status(404).json({ error: 'Contact not found' });
        }
    } catch (error) {
        res.status(500).json({ error: 'Internal Server Error' });
    }
}

async function deleteContactById(req, res) {
    try {
        const id = req.params.id;
        res.send(await deleteContactByIdRepo(id));
    }
    catch {
        res.status(500).json({ error: 'Internal Server Error' });
    }
}

module.exports =
{
    getAllContact,
    addContact,
    updateContact,
    deleteContactById
}