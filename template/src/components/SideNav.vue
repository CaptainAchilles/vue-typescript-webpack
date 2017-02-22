<style scoped>
    .circle {
        font-weight: 300;
        font-size: 154%;
        text-align: center;
        display: table-cell !important;
        vertical-align: middle;
    }
    
    .side-nav {
        width: 20%;
    }
    
    .tabs-vertical {
        overflow-y: show;
        height: auto;
    }
    
    .tabs-vertical .tab {
        display: block;
    }
    
    .tabs-vertical .tab a,
    .tabs-vertical .tab a i {
        transition: 500ms ease color;
    }
    
    .tabs-vertical .tab a.active,
    .tabs-vertical .tab a.active i {
        color: #009688 !important;
    }
    
    .tabs-vertical .tab a.active {
        border-right: 3px solid #009688
    }
    
    .side-nav-footer {
        bottom: 60px;
        position: absolute;
        width: 100%;
    }
    
    .pull-right {
        float: right;
    }
</style>
<template>
    <ul class="side-nav fixed">
        <li class="dashboard-side-controls relative">
            <div class="auto-overflow-y style-scroll">
                <ul class="tabs-vertical tabs">
                    <li class="tab" v-for="link in links">
                        <a class="waves-effect grey-text" :href="'#' + link.href">'a'</a>
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
            icon: "dashboard",
            text: "Home",
            href: "home"
        }, {
            icon: "info",
            text: "Other Page",
            href: "other"
        }, {
            icon: "rate_review",
            text: "Some Other Page",
            href: "someother"
        }]

        construct() {
            $(this.$el).find('.tabs').tabs();
        }
    }
</script>