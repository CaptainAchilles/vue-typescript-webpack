import Vue from "vue";
import SideNavComponent from "../../../src/components/SideNav.vue";
import "chai";
const assert = chai.assert;


const SideNav = Vue.extend(SideNavComponent);

describe("SideNav.vue", () => {
    beforeEach(() => {
        let main = document.getElementById("app");
        if (main) {
            main.innerHTML = "";
        } else {
            main = document.createElement("div");
            main.id = "app";
            document.body.appendChild(main);
        }
    });

    it("Hides Links Intially", () => {
        let vm = new SideNav().$mount("#app");
        
        // The only child is the "Toggle Links" item
        assert.equal(vm.$el.children.length, 1);
    });

    it("Shows links when clicked", (done) => {
        let vm = new SideNav().$mount("#app");
        
        // The only child is the "Toggle Links" item
        assert.equal(vm.$el.children.length, 1);
        (vm.$el.children[0] as HTMLElement).click();
        
        Vue.nextTick(() => {
            // There are 3 links + 1 toggle link item.
            assert.equal(vm.$el.children.length, 4);
            done();
        });
    });


    it("Toggles links properly", (done) => {
        let vm = new SideNav().$mount("#app");

        // The only child is the "Toggle Links" item
        assert.equal(vm.$el.children.length, 1);
        (vm.$el.children[0] as HTMLElement).click();

        Vue.nextTick(() => {
            assert.equal(vm.$el.children.length, 4);
            (vm.$el.children[0] as HTMLElement).click();

            Vue.nextTick(function() {
                // Clicking it again should hide all links
                assert.equal(vm.$el.children.length, 1);
                done();
            });
        });
    });
});
