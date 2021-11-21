const fs = require("fs").promises;
const path = require("path");

const { listContacts } = require("./listContacts");

const contactsPath = path.resolve("./db/contacts.json");

async function removeContact(contactId) {
  try {
    const contact = await listContacts();
    const newContactList = contact.filter(
      (contact) => contact.id !== Number(contactId)
    );
    await fs.writeFile(contactsPath, JSON.stringify(newContactList, null, 2));
    return newContactList;
  } catch (error) {
    console.error(error);
  }
}

module.exports = {
  removeContact,
};
