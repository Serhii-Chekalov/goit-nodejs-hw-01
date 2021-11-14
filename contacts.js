const { v4: uuidv4 } = require("uuid");
const fs = require("fs").promises;
const path = require("path");

const contactsPath = path.resolve("./db/contacts.json");

async function listContacts() {
  try {
    const list = await fs.readFile(contactsPath, "utf8");
    console.table(JSON.parse(list));
    return JSON.parse(list);
  } catch (err) {
    console.error(err);
  }
}

async function getContactById(contactId) {
  try {
    const contacts = await listContacts();
    const contactFind = contacts.find(
      (contact) => contact.id === Number(contactId)
    );
    console.table(contactFind);
    return contactFind;
  } catch (err) {
    console.log(err);
  }
}

async function addContact(name, email, phone) {
  const newContact = { id: uuidv4(), name, email, phone };
  try {
    const findContacts = await fs.readFile(contactsPath, "utf8");
    const parseContacts = JSON.parse(findContacts);
    const newContactList = [...parseContacts, newContact];
    await fs.writeFile(
      contactsPath,
      JSON.stringify(newContactList, null, 2),
      "utf8"
    );
    console.table(newContactList);
    return newContactList;
  } catch (error) {
    console.error(error);
  }
}

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
  listContacts,
  getContactById,
  addContact,
  removeContact,
};
