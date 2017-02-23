<style scoped>
</style>

<template>
    <ul>
        <li>
            <div>
                <ul>
                    <li v-for="link in links">
                        <a class="waves-effect grey-text" :href="'#' + link.href">{{link.text}}</a>
                    </li>
                    <li class="tab">
                        <div class="divider"></div>
                    </li>
                </ul>
            </div>
        </li>
        <li class="side-nav-footer">    
            <a class="blue-grey darken-4 white-text" href="//elipse.uq.edu.au" target="_blank">&copy; Example 2017<span class="pull-right">Company</span></a>
        </li>
    </ul>
</template>
<script lang="ts">
    import {
        Vue,
        Component,
        Prop
    } from 'av-ts'

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
        }]

        construct() {
        }
    }
</script>
