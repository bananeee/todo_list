<template>
    <div id="form">
        <button @click="selectInput">+</button>
        <transition name="slide-fade">
            <form v-if="showInput" id="input" v-on:submit.prevent="addItem">
                <label for="input-title"><b>Title</b></label>
                <input v-model="newItem.title" type="text" placeholder="Enter Title" name="title" id="input-title"
                       required>

                <label for="input-des"><b>Description</b></label>
                <textarea v-model="newItem.des" placeholder="Enter Description" name="description" id="input-des"
                          cols="30" rows="6"></textarea>

                <label for="input-date"><b>Created Date</b></label>
                <input v-model="newItem.createdDate" type="date" name="date" id="input-date" required>

                <button type="submit">Add</button>
            </form>
        </transition>

    </div>
</template>

<script>
    export default {
        name: "InputArea",
        data() {
            return {
                showInput: false,
                nextId: 0,
                newItem: {
                    id: 0,
                    title: null,
                    des: null,
                    createdDate: null,
                },
            }
        },
        methods: {
            selectInput() {
                this.showInput = !this.showInput;
            },

            addItem() {
                // this.$emit('add', this.newItem);
                this.$store.dispatch('addTodoItem', this.newItem);
                this.nextId ++;
                this.newItem = {
                    id: this.nextId,
                    title: null,
                    des: null,
                    createdDate: null,
                };
            },
        },
    }
</script>

<style scoped>
    #form > button {
        margin: 20px;
        font-size: 20px;
        color: white;
        background-color: rgba(255, 255, 255, 0);
        border: none;
        border-radius: 50px;
    }

    #input {
        width: 90%;
        margin-left: auto;
        margin-right: auto;
        -webkit-transition: all .2s ease;
        transition: all .2s ease;
    }

    #input > * {
        margin: 5px 0 20px 0;

    }

    #input > label {
        font-size: 25px;
        color: rgb(255, 255, 255);
    }

    #input > input,
    textarea {
        display: block;
        width: 100%;
        padding: 10px 20px;
        background-color: rgba(255, 255, 255, 0.24);
        color: rgb(255, 255, 255);
        border-radius: 7px;
        font-size: 20px;
    }

    #input > button {
        font-size: 22px;
        font-weight: 700;
        color: rgb(24, 0, 238);
        display: inline-block;
        padding: 15px 50px;
        border-radius: 15px;
        border: none;
        background-image: linear-gradient(to top right, rgb(255, 72, 27), rgb(215, 230, 16));
    }

    #input > input::placeholder,
    textarea::placeholder {
        color: rgba(255, 255, 255, 0.63);
    }

    .slide-fade-enter,
    .slide-fade-leave-to {
        transform: translatey(-20px);
        opacity: 0;
    }
    input {
        border: none;
    }

</style>