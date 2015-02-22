/**
 * @module ui/main.reel
 * @requires montage/ui/component
 */
var Component = require("montage/ui/component").Component;
var Cache = require("logic/cache").Cache;
var CacheEntry = require("logic/cache-entry").CacheEntry;

/**
 * @class Main
 * @extends Component
 */
exports.Main = Component.specialize(/** @lends Main# */ {
    constructor: {
        value: function Main() {
            this.super();
            this.cache = new Cache(CacheEntry.entriesForProperties([
                {
                    data: {},
                    metadata: {description: "Region1", type: "Media", size: 40},
                    subEntries: [
                        {
                            data: {},
                            metadata: {description: "Pictures", type: "jpg", size: 15},
                            subEntries: []
                        },
                        {
                            data: {},
                            metadata: {description: "Videos", type: "mp4", size: 20},
                            subEntries: []
                        },
                        {
                            data: {},
                            metadata: {description: "Information", type: "txt", size: 5},
                            subEntries: []
                        }
                    ]
                },
                {
                    data: {},
                    metadata: {description: "Region2", type: "Media", size: 60},
                    subEntries: [
                        {
                            data: {},
                            metadata: {description: "Pictures", type: "jpg", size: 18},
                            subEntries: []
                        },
                        {
                            data: {},
                            metadata: {description: "Videos", type: "mp4", size: 40},
                            subEntries: []
                        },
                        {
                            data: {},
                            metadata: {description: "Information", type: "txt", size: 2},
                            subEntries: []
                        }
                    ]
                }
            ]));
            console.log(this.cache);
        }
    }
});
