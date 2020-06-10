const knex = require('knex');
const knexConfig = require('../knexfile.js');
const db = knex(knexConfig.development);

module.exports = {
    find,
    findById,
    findSteps,
    add,
    update,
    remove,
    addStep
};


function find() {
    return db('schemes');
}//working

function findById(id) {
    return db("schemes").where({id}).first();
}//working

function findSteps(id) {
    return db("schemes")
    .where("scheme_id", Number(id))
    .orderBy("steps.step_number", "asc")
    .join("steps", "schemes.id", "steps.scheme_id")
    .select("schemes.scheme_name", "steps.step_number", "steps.instructions");
    
}

function add(scheme) {
    return db("schemes").insert(scheme)
    .then(ids => ({id: ids[0 ]}))
}//working

function update(changes, id) {
    return db("schemes")
    .where("id", Number(id))
    .update(changes);
}//working

function remove(id) {
    return db("schemes")
    .where("id", Number(id))
    .del();
}// working

function addStep(step, scheme_id) {
    return db("steps").insert(step).where({scheme_id: scheme_id});
}