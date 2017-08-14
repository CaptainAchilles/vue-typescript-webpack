<template>
  <div id="main">
    <side-nav></side-nav>
    <winner-is-you :showText="'This page is intentionally styled poorly'"></winner-is-you>
  </div>
</template>

<style scoped>
</style>

<script lang="ts">
import Vue, { ComponentOptions } from "vue";
import SideNav from "./components/SideNav.vue";
import WinnerIsYou from "./components/WinnerIsYou.vue";

interface IApp extends Vue {

};

export default {
    components: {
        SideNav,
        WinnerIsYou
    }
} as ComponentOptions<IApp>;

</script>
