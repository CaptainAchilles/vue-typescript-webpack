import Vue from 'vue'
import SideNav from 'components/SideNav'
import assert from "assert";

describe('SideNav.vue', function () {
    beforeEach(function () {
        var main = document.getElementById("app");
        if (main) {
            main.innerHTML = "";
        } else {
            main = document.createElement("div");
            main.id = "app";
            document.body.appendChild(main);
        }
    });

    it('Hides Links Intially', function () {
        var vm = new SideNav().$mount("#app");
        
        // The only child is the 'Toggle Links' item
        assert.equal(vm.$el.children.length, 1);
    });

    it('Shows links when clicked', function (done) {
        var vm = new SideNav().$mount("#app");
        
        // The only child is the 'Toggle Links' item
        assert.equal(vm.$el.children.length, 1);
        vm.$el.children[0].click();
        
        Vue.nextTick(function() {
            // There are 3 links + 1 toggle link item.
            assert.equal(vm.$el.children.length, 4);
            done();
        })
    });


    it('Toggles links properly', function (done) {
        var vm = new SideNav().$mount("#app");

        // The only child is the 'Toggle Links' item
        assert.equal(vm.$el.children.length, 1);
        vm.$el.children[0].click();

        Vue.nextTick(function() {
            assert.equal(vm.$el.children.length, 4);
            vm.$el.children[0].click();

            Vue.nextTick(function() {
                // Clicking it again should hide all links
                assert.equal(vm.$el.children.length, 1);
                done();
            })
        })
    })

});