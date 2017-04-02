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
    import { Vue, Component, Prop } from "av-ts";

    @Component
    export default class SideNav extends Vue {
        links = [{
            text: "Home",
            href: "home"
        }, {
            text: "Other Page",
            href: "other"
        }, {
            text: "Some Other Page",
            href: "someother"
        }];

        showLinks: boolean = false;

        toggleMenu() {
            // Have a branch for code coverage reasons
            if (this.showLinks) {
                this.showLinks = false;
            } else {
                this.showLinks = true;
            }
        }
    }
</script>
