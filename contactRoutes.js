const router = require("express").Router();

const {
  getAllContacts,
  createContact,
  getContactsById,
  updatedContact,
  deleteContact,
} = require("./contactController");

router.get("/", getAllContacts);
router.post("/", createContact);
router.get("/:id", getContactsById);
router.put("/:id", updatedContact);
router.delete("/:id", deleteContact);

module.exports = router;
