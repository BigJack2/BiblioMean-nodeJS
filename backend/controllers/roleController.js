import role from "../models/role.js";

const registerRole = async (req, res) => {

  if (!req.body.name || !req.body.description)
    return res.status(400).send({ message: "Imcomplete data" });

  let schemaRole = new role({
    name: req.body.name,
    description: req.body.description,
    dbStatus: true,
  });

  let myResult = await schemaRole.save();

  if (!myResult) return res.status(500).send({ message: "Fail to register role" });

  res.status(200).send({ myResult })
};


const listRole = async (req, res) => {

  let roles = await role.find();

  if (roles.length === 0) return res.status(400).send({ message: "No search results" });

  return res.status(200).send({ roles });
};


const deleteRole = async (req, res) => {
  if (!req.params["_id"]) return res.status(400).send({ message: "Imcomplete data" });

  const users = await role.findByIdAndUpdate(req.params["_id"], { dbStatus: false });

  return !users
    ? res.status(400).send({ message: "Error deleting role" })
    : res.status(200).send({ message: "Role delete" });
};


const updateRole = async (req, res) => {
  if (!req.body._id || !req.body.name || !req.body.description)
    return res.status(400).send({ message: "Imcomplete data" });

  const editRole = await role.findByIdAndUpdate(req.body._id, {
    name: req.body.name,
    description: req.body.description,
  });

  if (!editRole) return res.status(500).send({ message: "Error editing role" });
  return res.status(200).send({ message: "Role updated" });
};


export default { registerRole, listRole, updateRole, deleteRole };