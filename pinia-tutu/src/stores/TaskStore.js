import { defineStore } from "pinia";



export const useTaskStore = defineStore("TaskStore", {
    state: () => ({
        tasks:[

            { id: 1, title: "buy some milk", Completed: false },
            { id: 2, title: "play gloomhaven", Completed : false },
        ]
    })
    getters:{
        getTasks: (state) => {
            return state.tasks;
        },
        getTaskById: (state) => (id) => {
            return state.tasks.find(task => task.id === id);
        }
    }
}
) 
                                             