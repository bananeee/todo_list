<template>
    <div class="cover">
        <div class="title">Tile: {{ todoListItem.title }}</div>
        <div class="createdDate">Created date: {{ todoListItem.createdDate }}</div>
        <div class="description">Description: {{ todoListItem.des }}</div>
    </div>
</template>

<script>
    export default {
        name: "Detail",
        // data() {
        //     return {
        //         id: this.$route.params.id,
        //     }
        // },
        props: {
            id: {
                type: Number,
                required: true,
            }
        },
        computed: {
            todoListItem() {
                return this.$store.state.list.find(item => item.id == this.id);
            }

        }
    }
</script>

<style scoped>
    * {
        margin: auto;
        color: rgb(255, 255, 255);
        text-align: left;
    }
    .cover {
        width: 70%;
        margin-top: 100px;
    }

    .title {
        font-size: 50px;
        margin-bottom: 50px;
    }

    .description {
        font-size: 30px;
        margin: 15px 0;
    }

    .createdDate {
        font-size: 30px;
    }
</style>