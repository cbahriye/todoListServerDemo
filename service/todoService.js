let todos = [
    {id: "1", task: 'task1', isCompleted: false},
    {id: "2", task: 'task2', isCompleted: false},
    {id: "3", task: 'task3', isCompleted: false},
    {id: "4", task: 'task4', isCompleted: false},
];
let todosId = todos.length;

function getAll() {
    return todos;
}

function findOne(id) {
    return todos.find(x => x.id === id);
}

function findByName(name) {
    return todos.filter(
        x => x.task.indexOf(name) !== -1);
}

function add(item) {
    const itemToAdd = {...item, id: ++todosId, isCompleted: item.isCompleted || false};
    todos.push(itemToAdd);
    return itemToAdd;
}


function update(id, fields) {
    const itemToupdate = todos.find(x => x.id === id);
    for (let key of Object.keys(fields)) {
        itemToupdate[key] = fields[key];
    }

    return itemToupdate;
}

function remove(id) {
    const itemToDelete = todos.find(x => x.id === id);
    todos.splice(todos.indexOf(itemToDelete), 1);

    return itemToDelete;
}

module.exports = {
    getAll, findOne, findByName, add, remove, update
};
