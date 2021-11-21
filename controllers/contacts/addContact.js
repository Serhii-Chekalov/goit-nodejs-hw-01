const fs = require("fs").promises;
const path = require("path");
const { v4: uuidv4 } = require("uuid");
const contactsPath = path.resolve("./db/contacts.json");

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

module.exports = {
  addContact,
};
