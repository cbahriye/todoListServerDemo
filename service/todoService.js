class ToDo {
    constructor() {
        this.todos = [
            {id: "1", task: 'task1', isCompleted: false},
            {id: "2", task: 'task2', isCompleted: false},
            {id: "3", task: 'task3', isCompleted: false},
            {id: "4", task: 'task4', isCompleted: false},
        ];
        this.todosId = this.todos.length;
    }

    async getAll(cb) {
        return await new Promise(resolve => {
            setTimeout(() => {
                resolve(this.todos);
            }, 100);
        });
    }

    findOne(id, cb) {
        setTimeout(() => {
            return cb(this.todos.find(x => x.id === id));
        }, 100);
    }

    findByName(name, cb) {
        setTimeout(() => {
            const v = this.todos.filter(
                x => x.task.indexOf(name) !== -1);
            return cb(v);
        },100);
    }

    add(item) {
        const itemToAdd = {...item, id: ++this.todosId, isCompleted: item.isCompleted || false};
        this.todos.push(itemToAdd);
        return itemToAdd;
    }


    update(id, fields) {
        const itemToupdate = this.todos.find(x => x.id === id);
        for (let key of Object.keys(fields)) {
            itemToupdate[key] = fields[key];
        }

        return itemToupdate;
    }

    remove(id) {
        const itemToDelete = this.todos.find(x => x.id === id);
        this.todos.splice(this.todos.indexOf(itemToDelete), 1);

        return itemToDelete;
    }
}


module.exports = new ToDo();
