<template>
    <h1 class="winner" v-if="showText">\{{ showText.toUpperCase() }}</h1>
</template>
<style scoped>
    .winner {
        color: green;
    }
</style>
<script lang="ts">
    import { Vue, Component, Prop } from "av-ts";

    @Component
    export default class WinnerIsYou extends Vue {
        @Prop
        showText: string;
    }
</script>
