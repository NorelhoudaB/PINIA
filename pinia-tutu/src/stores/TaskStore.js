import { defineStore } from "pinia";

export const useTaskStore = defineStore("TaskStore", {
    state: () => ({
        tasks:[],
        isLoading: false,
    }),
    getters:{
    completed() {
        return this.tasks.filter(t => t.Completed)
        
    },
    completedcount() {
        return this.tasks.reduce((p, c) => {
            return c.Completed ? p + 1 : p
        }, 0)
    },
    totalcount:(state) => {
    return state.tasks.length
    }


    },    actions: {
        async getTasks() {
            this.isLoading = true
            const response = await fetch('http://localhost:3000/tasks')
            const data = await response.json()
            this.tasks = data
            this.isLoading=false
        },
        addTask(task) {
            this.tasks.push(task)
    },deleteTask(id) {
        this.tasks=this.tasks.filter(t =>{
            
            return t.id !== id})
},
toggleCompleted(id) {
const task =this.tasks.find(t => t.id === id)
task.Completed = !task.Completed

}
    }
    
});
                                             