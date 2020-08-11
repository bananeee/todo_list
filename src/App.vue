<template>
    <div id="app">
        <router-view/>
    </div>
</template>

<style>
    * {
        box-sizing: border-box;
    }

    html {
        margin: 0px;
        height: 100%;
    }

    body {
        /* background: linear-gradient(to bottom right, rgb(160, 96, 212), rgb(94, 12, 224)); */
        background-image: linear-gradient(to bottom right, rgb(170, 118, 212), rgb(71, 1, 184));
        background-size: 100%;
        background-attachment: fixed;
        background-repeat: no-repeat;
        padding: 0;
        margin: 0;
        font-family: 'Quicksand', sans-serif;
    }


    h1 {

        margin-top: 40px;
        text-align: center;
        font-size: 5em;
        color: white;
    }
</style>
