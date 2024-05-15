// app.js
new Vue({
    el: '#app',
    data: {
        newTask: '',
        tasks: []
    },
    methods: {
        addTask() {
            if (this.newTask.trim() !== '') {
                this.tasks.push(this.newTask.trim());
                this.newTask = '';
            }
        },
        deleteTask(index) {
            this.tasks.splice(index, 1);
        }
    }
});
