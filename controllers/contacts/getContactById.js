const { listContacts } = require("./listContacts");

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

module.exports = {
  getContactById,
};
