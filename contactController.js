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
