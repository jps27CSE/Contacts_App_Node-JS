const contacts = require("./Contact");

exports.getAllContacts = (req, res) => {
  res.json(contacts.getAllContacts());
};

exports.createContact = (req, res) => {
  let { name, phone, email } = req.body;
  let contact = contacts.createContact({
    name,
    phone,
    email,
  });

  res.json(contact);
};

exports.getContactsById = (req, res) => {
  let { id } = req.params;
  id = parseInt(id);

  let contact = contacts.getContactsById(id);
  res.json(contact);
};

exports.updatedContact = (req, res) => {
  let { id } = req.params;
  id = parseInt(id);

  let { name, email, phone } = req.body;
  let contact = contacts.updateContactById(id, {
    name,
    email,
    phone,
  });
  res.json(contact);
};

exports.deleteContact = (req, res) => {
  let { id } = req.params;
  id = parseInt(id);

  let contact = contacts.deleteContactById(id);
  res.json(contact);
};
