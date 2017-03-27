<template>
    <h1 class="winner">This page is intentionally styled poorly</h1>
</template>
<style scoped>
    .winner {
        color: green;
    }
</style>
<script lang="ts">
    import { Vue, Component } from "av-ts";

    @Component
    export default class WinnerIsYou extends Vue {}
</script>
