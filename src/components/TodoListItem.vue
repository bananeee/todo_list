<template>
    <div @click="select" class="todo-item">
        <span @click="deleteItem">X</span>
        <router-link :to="{
            name: 'Details',
            params: { id: item.id }
        }">
            <section>
                <div class="item-title">{{item.title}}</div>
                <div class="item-createddate">{{item.createdDate}}</div>
                <!--            <transition name="slide-fade">-->
                <!--                <p v-if="isSelected" class="item-des">{{item.des}}</p>-->
                <!--            </transition>-->
            </section>
        </router-link>
    </div>
</template>

<script>
    export default {
        name: "TodoListItem",
        props: ['item', 'selectedTodo'],
        data() {
            return {
                selected: false,
            }
        },
        computed: {
            isSelected() {
                return this.item === this.selectedTodo;
            }
        },
        methods: {
            select() {
                this.$emit('select', this.item);
                this.selected = !this.selected;
            },
            deleteItem() {
                this.$store.dispatch('deleteTodoItem', this.item.id);
            }
        },
    }
</script>

<style scoped>
    .todo-item {
        background-color: rgba(255, 255, 255, 0.24);
        color: rgb(255, 255, 255);
        padding: 7px 20px;
        border: 3px solid transparent;
        margin-bottom: 15px;
        border-radius: 7px;
        text-align: left;
        -webkit-transition: all .2s ease;
        transition: all .2s ease;
    }

    .todo-item:hover {
        background-color: rgba(0, 0, 0, 0.116);
        box-shadow: 0 12px 16px 0 rgba(0, 0, 0, 0.24), 0 17px 50px 0 rgba(0, 0, 0, 0.19);
    }

    a {
        cursor: pointer;
        color: white;
        text-decoration: none;
    }
    span {
        font-size: xx-large;
        font-weight: bolder;
        float: right;
        margin-top: 10px;
    }

    span:hover {
        color: #9c0000;
    }

    .item-title {
        font-size: 25px;
        margin-bottom: 15px;
    }

    .item-des {
        font-size: 20px;
    }

    .item-createddate {
        font-size: 15px;
    }

    .active {
        /*border: 3px solid rgb(127, 238, 0);*/
    }

    .slide-fade-enter,
    .slide-fade-leave-to {
        transform: translatey(-20px);
        opacity: 0;
    }

</style>