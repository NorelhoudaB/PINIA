import { defineStore } from "pinia";

export const useTaskStore = defineStore("TaskStore", {
    state: () => ({
        tasks:[],
        isLoading: false,
    }),
    getters:{
    completed() {
        return this.tasks.filter(t => t.completed)
        
    },
    completedcount() {
        return this.tasks.reduce((p, c) => {
            return c.completed ? p + 1 : p
        }, 0)
    },
    totalcount:(state) => {
    return state.tasks.length
    }


},
actions: {
    async getTasks() {
        this.isLoading = true
        const response = await fetch('http://localhost:3000/tasks')
        const data = await response.json()
        this.tasks = data
        this.isLoading = false
    },
    async addTask(task) {
        this.tasks.push(task)

        const res = await fetch('http://localhost:3000/tasks', {
            method: 'POST',
            body: JSON.stringify(task),
            headers: {
                'Content-Type': 'application/json'
            }
        })
        if (res.err) {
            console.error('Error adding task:', res.err)
        }
    },
    async deleteTask(id) {
        this.tasks = this.tasks.filter(t => t.id !== id)
        const res = await fetch('http://localhost:3000/tasks/' + id, {
            method: 'DELETE',
        })
        if (res.err) {
            console.error('Error deleting task:', res.err)
        }
    },
    async togglecompleted(id) {
        const task = this.tasks.find(t => t.id === id)
        task.completed = !task.completed
        const res = await fetch('http://localhost:3000/tasks/' + id, {
            method: 'PATCH',
            body: JSON.stringify({ completed: task.completed }),
            headers: {
                'Content-Type': 'application/json'
            }
        })
        if (res.err) {
            console.error('Error toggling task:', res.err)
        }
    }
}
});