<template>
    <div id="home" class="valign-wrapper">
        <div class="winner valign center-align">
            <h1>A winner is you</h1>
        </div>
    </div>
</template>
<style scoped>
    #home {
        margin-left: 20%;
        width: 80%;
        height: 100%;
    }
    
    .winner {
        width: 100%;
    }
</style>
<script lang="ts">
    import {
        Vue,
        Component
    } from 'av-ts'
    @Component
    export default class WinnerIsYou extends Vue {
        construct() {}
    }
</script>