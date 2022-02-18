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
  //populate es para que me traiga todo asociado al id de role
  let roles = await role.find();

  //si el tamaño de items del array es cero entonces no hay nada
  if (roles.length === 0) return res.status(400).send({ message: "No search results" });

  return res.status(200).send({ roles });
};


export default { registerRole, listRole };