<template>
    <h1 class="winner" @click="doStuff" v-if="showText">\{{ showText.toUpperCase() }}</h1>
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

        doStuff() {
            if (this.showText == "This page is intentionally styled poorly") {
                this.showText = "asdf";
            } else {
                this.showText = "This page is intentionally styled poorly";
            }
        }
    }
</script>
