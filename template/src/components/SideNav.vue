<style scoped>
</style>

<template>
    <ul>
        <li v-for="link in links">
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
    }
</script>
