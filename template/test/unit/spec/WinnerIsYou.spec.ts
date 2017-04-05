import Vue from "vue";
import WinnerIsYou from "components/WinnerIsYou";
import "chai";
const assert = chai.assert;

describe("WinnerIsYou.vue", () => {
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

    it("Renders nothing when showText undefined", () => {
        let vm = new WinnerIsYou().$mount("#app");
        
        assert.equal(vm.showText, null);
        assert.equal(vm.$el.textContent, "");
    });
    

    it("Updates correctly", done => {
        let vm = new WinnerIsYou().$mount("#app");
        assert.equal(vm.showText, null);
        assert.equal(vm.$el.textContent, "");
        vm.showText = "This page is intentionally styled poorly";

        Vue.nextTick(() => {
            assert.equal(vm.showText,
                "This page is intentionally styled poorly");
            assert.equal(vm.$el.textContent,
                "This page is intentionally styled poorly".toUpperCase());
            done();
        });
    });
    
    it("Captializes correctly", done => {
        let vm = new WinnerIsYou().$mount("#app");
        
        assert.equal(vm.showText, null);
        assert.equal(vm.$el.textContent, "");
        vm.showText = "This page is intentionally styled poorly";

        Vue.nextTick(() => {
            assert.equal(vm.showText,
                "This page is intentionally styled poorly");
            assert.equal(vm.$el.textContent,
                "This page is intentionally styled poorly".toUpperCase());
            
            vm.showText = "hUh";
            Vue.nextTick(() => {
                assert.notEqual(vm.showText,
                    "This page is intentionally styled poorly");
                assert.equal(vm.showText, "hUh");
                assert.equal(vm.$el.textContent, "huh".toUpperCase());
                done();
            });
        });
    });
});
