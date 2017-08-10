import Vue from "vue";
import WinnerIsYouComponent, { IWinnerIsYou } from "../../../src/components/WinnerIsYou.vue";
import "chai";
const assert = chai.assert;

const WinnerIsYou = Vue.extend(WinnerIsYouComponent);


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

        const mountPoint = document.createElement("div");
        mountPoint.id = "mountMe";
        document.getElementById("app").appendChild(mountPoint);
    });

    it("Renders nothing when showText undefined", () => {
        let vm = new WinnerIsYou().$mount("#mountMe") as IWinnerIsYou;

        assert.equal(vm.text, "");
        assert.equal(vm.$el.textContent, "");
    });

    it("Updates correctly", (done) => {
        let vm = new WinnerIsYou().$mount("#mountMe") as IWinnerIsYou;
        assert.equal(vm.text, "");
        assert.equal(vm.$el.textContent, "");
        vm.showText = "This page is intentionally styled poorly";

        Vue.nextTick(() => {
            assert.equal(vm.text,
                "This page is intentionally styled poorly".toUpperCase());
            assert.equal(vm.$el.textContent,
                "This page is intentionally styled poorly".toUpperCase());
            done();
        });
    });

    it("Captializes correctly", (done) => {
        let vm = new WinnerIsYou().$mount("#mountMe") as IWinnerIsYou;
        assert.equal(vm.text, "");
        assert.equal(vm.$el.textContent, "");
        vm.showText = "This page is intentionally styled poorly";
        vm.doStuff();

        Vue.nextTick(() => {
            assert.equal(vm.showAlternate, true);
            assert.equal(vm.text,
                "ALTERNATIVE TEXT");
            assert.equal(vm.$el.textContent,
                "ALTERNATIVE TEXT".toUpperCase());
            vm.doStuff();

            Vue.nextTick(() => {
                assert.equal(vm.showAlternate, false);
                assert.equal(vm.text, "This page is intentionally styled poorly".toUpperCase());
                assert.equal(vm.$el.textContent, "This page is intentionally styled poorly".toUpperCase());
                done();
            });
        });
    });
});
