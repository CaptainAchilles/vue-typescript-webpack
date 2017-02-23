<template>
  <div id="main">
    <side-nav></side-nav>
    <winner-is-you></winner-is-you>
  </div>
</template>
<style scoped>
    #main {
        height: 100%;
    }
</style>
<script lang="ts">
    import {
        Vue,
        Component
    } from 'av-ts'
    import SideNav from './components/SideNav'
    import WinnerIsYou from './components/WinnerIsYou'

    @Component({
        components: {
            SideNav,
            WinnerIsYou
        }
    })
    export default class Entry extends Vue {}
</script>
