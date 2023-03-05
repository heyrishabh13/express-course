let { people } = require("../data");

const getPeople = (req, res) => {
  res.status(200).send({ success: true, data: people });
};

const createPerson = (req, res) => {
  const { name } = req.body;
  // console.log(name);
  if (!name) {
    return res
      .status(400)
      .json({ success: false, msg: "please provide name value" });
  }
  res.status(201).send({ success: true, person: name });
};

const createPersonPostman = (req, res) => {
  const { name } = req.body;
  if (!name) {
    return res
      .status(400)
      .json({ success: false, msg: "please provide name value" });
  }
  res.status(201).send({ success: true, data: [...people, name] });
};

const updatePerson = (req, res) => {
  const { id } = req.params;
  const { name } = req.body;

  const person = people.find((person) => person.id === +id);
  if (!person) {
    return res
      .status(400)
      .json({ success: false, msg: `no person with id: ${id}` });
  }

  const newPeople = people.map((person) => {
    if (person.id === +id) {
      person.name = name;
    }
    return person;
  });

  res.status(200).send({ success: true, data: newPeople });
};

const deletePerson = (req, res) => {
  const { id } = req.params;

  const person = people.find((item) => item.id === +id);

  if (!person) {
    return res
      .status(404)
      .send({ success: false, msg: `no person with id: ${id}` });
  }

  const newPeople = people.filter((item) => {
    if (item.id !== +id) {
      return item;
    }
  });

  res.status(200).send({ success: true, data: newPeople });
};

module.exports = {
  getPeople,
  createPerson,
  createPersonPostman,
  updatePerson,
  deletePerson,
};
