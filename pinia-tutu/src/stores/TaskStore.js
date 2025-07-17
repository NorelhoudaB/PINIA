import { defineStore } from "pinia";

export const useTaskStore = defineStore("TaskStore", {
    state: () => ({
        tasks:[

            { id: 1, title: "buy some milk", Completed: false },
            { id: 2, title: "play gloomhaven", Completed : true },
        ]
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
                                             