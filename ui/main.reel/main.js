/**
 * @module ui/main.reel
 * @requires montage/ui/component
 */
var Component = require("montage/ui/component").Component;

/**
 * @class Main
 * @extends Component
 */
exports.Main = Component.specialize(/** @lends Main# */ {
    constructor: {
        value: function Main() {
            this.super();
        }
    },

    data: {
        value: [{text: "one"}, {text: "two"}, {text: "three"}]
    },

    enterDocument: {
        value: function (firstTime) {
            var self = this;
            if (firstTime) {
                this.templateObjects.rangeController.content = this.data;
                window.setTimeout(function () {
                    self.data.push({text: "pushed"});
                }, 1000);
                window.setTimeout(function () {
                    self.data.splice(1, 1);
                }, 2000);
                window.setTimeout(function () {
                    self.data.splice(2, 0, {text: "inserted"});
                }, 3000);
            }
        }
    }
});
