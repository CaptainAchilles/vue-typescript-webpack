<template>
    <h1 class="winner" @click="doStuff" v-if="showText">{{ showText.toUpperCase() }}</h1>
</template>

<style scoped>
    .winner {
        color: green;
    }
</style>

<script lang="ts">
import Vue, { ComponentOptions } from "vue";

interface IWinnerIsYou extends Vue {
    showText: string;
    doStuff(): void;
};

export default {

    data: function() {
        return {
            showText: "This page is intentionally styled poorly"
        };
    },

    methods: {
        doStuff() {
            if (this.showText == "This page is intentionally styled poorly") {
                this.showText = "asdf";
            } else {
                this.showText = "This page is intentionally styled poorly";
            }
        }
    }

} as ComponentOptions<IWinnerIsYou>;

</script>
