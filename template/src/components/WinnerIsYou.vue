<template>
    <h1 class="winner" @click="doStuff" v-if="text">{{ text }}</h1>
</template>

<style scoped>
    .winner {
        color: green;
    }
</style>

<script lang="ts">
import Vue, { ComponentOptions } from "vue";

export interface IWinnerIsYou extends Vue {
    showText: string;
    showAlternate: boolean;
    text: string;
    doStuff(): void;
};

export default {

    props: {
        "showText": {
            default: ""
        }
    },

    data: function() {
        return {
            showAlternate: false
        };
    },
    computed: {
        text: function() {
            return this.showAlternate
                ? "ALTERNATIVE TEXT" : this.showText.toUpperCase();
        }
    },

    methods: {
        doStuff() {
            this.showAlternate = !this.showAlternate;
        }
    }

} as ComponentOptions<IWinnerIsYou>;

</script>
