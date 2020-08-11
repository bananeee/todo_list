<template>
    <div class="home">
        <h1>Todo List</h1>
        <input-area></input-area>
        <todo-list></todo-list>
    </div>
</template>

<script>
    // @ is an alias to /src

    import TodoList from "@/components/TodoList";
    import InputArea from "@/components/InputArea";

    export default {
        name: 'Home',
        components: {
            'todo-list': TodoList,
            'input-area': InputArea,
        }
    }
</script>
