<template>
    <section class="todoapp">
        <header class="header">
            <h1>Vue3 todos</h1>
            <input
                class="new-todo"
                placeholder="想干的事"
                v-model="newTodo"
                @keyup.enter="addTodo"
            />
        </header>
        <section class="main" v-show="todos.length">
            <ul class="todo-list">
                <li style="height: 50px">
                    <input
                        id="toggle-all"
                        class="toggle"
                        type="checkbox"
                        v-model="allDone"
                    />
                    <label for="toggle-all">Mark all as complete</label>
                </li>
            </ul>
            <ul class="todo-list">
                <li v-for="todo in todos" class="todo" :key="todo.id">
                    <div class="view">
                        <input
                            class="toggle"
                            type="checkbox"
                            v-model="todo.completed"
                            :id="`toggle-alone${todo.id}`"
                        />
                        <label :for="`toggle-alone${todo.id}`">{{ todo.title }}</label>
                        <button
                            class="destroy"
                            @click="removeTodo(todo)"
                        ></button>
                    </div>
                </li>
            </ul>
        </section>
    </section>
</template>

<script>
import "todomvc-app-css/index.css";
import { ref, reactive, toRefs, computed ,watch} from "vue";
export default {
    setup() {
        const state = reactive({
            newTodo: "",
            allDone: false,
            todos: [
                { id: "1", title: "吃饭", completed: false },
                { id: "2", title: "睡觉", completed: false },
            ],
        });
        const addTodo = () => {
            var value = state.newTodo && state.newTodo.trim();
            if (!value) {
                return;
            }
            state.todos.push({
                id: state.todos.length + 1,
                title: value,
                completed: false,
            });
            state.newTodo = "";
        };
        let allDone = computed({
            get: () => {},
            set: (value) => {
                state.todos.forEach((todo) => (todo.completed = value));
            },
        });
        const removeTodo = (todo) => {
            state.todos = state.todos.filter((item) => item.id != todo.id);
        };
        watch(state,(newValue,oldValue)=>{
            newValue.todos.forEach(item=>{
                if(!item.completed){
                    allDone = false;
                }
            })
            console.log()
        });
        
        return {
            ...toRefs(state),
            addTodo,
            removeTodo,
            allDone,
        };
    }
};
</script>