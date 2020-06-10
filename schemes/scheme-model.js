const knex = require('knex');
const knexConfig = require('../knexfile.js');
const db = knex(knexConfig.development);

module.exports = {
    find,
    findById,
    findSteps,
    add,
    update
};


function find() {
    return db('schemes');
}//working

function findById(id) {
    return db("schemes").where({id}).first();
}//working

function findSteps(id) {
    return db("steps")
    .join("schemes", "steps.schemes_id", "=", "schemes.id")
    .select("schemes.scheme_name", "steps.*");
}

function add(scheme) {
    return db("schemes").insert(scheme)
    .then(ids => ({id: ids[0 ]}))
}//working

function update(changes, id) {
    return db("schemes")
    .where("id", Number(id))
    .update(changes);
}