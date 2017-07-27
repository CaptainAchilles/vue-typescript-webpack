<style scoped>
    ul > li:first-of-type {
        cursor: pointer;
    }
</style>

<template>
    <ul>
        <li @click="toggleMenu">\{{ showLinks ? "Hide Menu" : "Show Menu" }}
        <li v-if="showLinks" v-for="link in links">
            <a :href="'#' + link.href">\{{ link.text }}</a>
        </li>
    </ul>
</template>

<script lang="ts">
import Vue, { ComponentOptions } from "vue";

interface ILink {
    text: string;
    href: string;
};

interface ISideNav extends Vue {
    links: Array<ILink>;
    showLinks: boolean;
};

export default {

    data: function() {
        return {
            links: [
                {
                    text: "Home",
                    href: "home"
                },
                {
                    text: "Other Page",
                    href: "other"
                },
                {
                    text: "Some Other Page",
                    href: "someother"
                }
            ],

            showLinks: false
        };
    },

    methods: {
        toggleMenu() {
            // Have a branch for code coverage reasons
            if (this.showLinks) {
                this.showLinks = false;
            } else {
                this.showLinks = true;
            }
        }
    }
} as ComponentOptions<ISideNav>;

</script>
