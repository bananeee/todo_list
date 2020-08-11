<template>
    <div class="todo-list">
        <todo-list-item v-for="item in list" :item="item" @select="changeSelect" :selected-todo="selectedTodo"
                        :key="item.id"></todo-list-item>
    </div>
</template>

<script>
    import TodoListItem from "@/components/TodoListItem";

    export default {
        name: "TodoList",
        components: {
            TodoListItem,
        },
        data() {
            return {
                selectedTodo: null,
                message: 'hello',
            }
        },
        computed: {
            list() {
                return this.$store.state.list.slice(0).reverse();
            },
        },
        methods: {
            changeSelect(todo) {
                if (this.selectedTodo === todo)
                    this.selectedTodo = null;
                else
                    this.selectedTodo = todo;
            },

            addItem(newItem) {
                this.list.push(newItem);
            }
        },
    }
</script>

<style scoped>
    .todo-list {
        width: 80%;
        height: 100%;
        margin-left: auto;
        margin-right: auto;
        /* background-color: aquamarine; */
        padding: 50px;
    }
</style>