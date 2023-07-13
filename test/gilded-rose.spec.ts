import { expect } from "chai";
import { Item, GildedRose } from "../app/gilded-rose";

describe("Gilded Rose", function () {

    // it("should foo", function() {
    //     const gildedRose = new GildedRose([ new Item("foo", 0, 0) ]);
    //     const items = gildedRose.updateQuality();
    //     expect(items[0].name).to.equal("foo");
    // });

    // it("should have a sellIn value", function() {
    //     const gildedRose = new GildedRose([
    //         new Item("foo", -1, 20),
    //         // new Item("foo", 0, 20),
    //         // new Item("foo", 1, 20),
    //     ])

    //     const items = gildedRose.updateQuality();
    //     expect(items[0].sellIn).to.equal(!undefined);
    // })

    it("matches the golden record", function() {
        const gildedRose = new GildedRose([
            new Item("foo", -1, 20),
            new Item("foo", 0, 20),
            new Item("foo", 1, 20),
            new Item("foo", 2, 20),
            new Item("foo", 3, 20),
            new Item("foo", 8, 20),
            new Item("foo", 11, 20),
            new Item("foo", 15, 20),
            new Item("foo", 7, 20),
            new Item("Sulfuras, Hand of Ragnaros", -1, 80),
            new Item("Sulfuras, Hand of Ragnaros", -1, 80),
            new Item("Sulfuras, Hand of Ragnaros", -1, 80),
            new Item("Sulfuras, Hand of Ragnaros", -1, 80),
            new Item("Sulfuras, Hand of Ragnaros", 0, 80),
            new Item("Sulfuras, Hand of Ragnaros", 1, 80),
            new Item("Aged Brie", -2, 20),
            new Item("Aged Brie", 1, 20),
            new Item("Aged Brie", 0, 20),
            new Item("Aged Brie", 8, 20),
            new Item("Aged Brie", 7, 20),
            new Item("Backstage passes to a TAFKAL80ETC concert", 7, 20),
            new Item("Backstage passes to a TAFKAL80ETC concert", 0, 20),
            new Item("Backstage passes to a TAFKAL80ETC concert", 1, 20),
            new Item("Backstage passes to a TAFKAL80ETC concert", -1, 20),
        ])

        const goldenRecord = [
            new Item("foo", -2, 18),
            new Item("foo", -1, 18),
            new Item("foo", 0, 19),
            new Item("foo", 1, 19),
            new Item("foo", 2, 19),
            new Item("foo", 7, 19),
            new Item("foo", 10, 19),
            new Item("foo", 14, 19),
            new Item("foo", 6, 19),
            new Item("Sulfuras, Hand of Ragnaros", -1, 80),
            new Item("Sulfuras, Hand of Ragnaros", -1, 80),
            new Item("Sulfuras, Hand of Ragnaros", -1, 80),
            new Item("Sulfuras, Hand of Ragnaros", -1, 80),
            new Item("Sulfuras, Hand of Ragnaros", 0, 80),
            new Item("Sulfuras, Hand of Ragnaros", 1, 80),
            new Item("Aged Brie", -3, 22),
            new Item("Aged Brie", 0, 21),
            new Item("Aged Brie", -1, 22),
            new Item("Aged Brie", 7, 21),
            new Item("Aged Brie", 6, 21),
            new Item("Backstage passes to a TAFKAL80ETC concert", 6, 22),
            new Item("Backstage passes to a TAFKAL80ETC concert", -1, 0),
            new Item("Backstage passes to a TAFKAL80ETC concert", 0, 23),
            new Item("Backstage passes to a TAFKAL80ETC concert", -2, 0),
        ]
        
        const items = gildedRose.updateQuality();
        expect(items).to.deep.equal(goldenRecord);
    })

    it("degrades twices as fast after sell by date", function() {
        const gildedRose = new GildedRose([
            new Item("foo", -1, 20),
            new Item("foo", 0, 20),
            new Item("foo", 1, 20),
            new Item("Sulfuras, Hand of Ragnaros", -1, 80),
            new Item("Sulfuras, Hand of Ragnaros", -1, 80),
            new Item("Sulfuras, Hand of Ragnaros", -1, 80),
            new Item("Aged Brie", -2, 20),
            new Item("Aged Brie", 1, 20),
            new Item("Aged Brie", 0, 20),
        ])

        const goldenRecord = [
            new Item("foo", -2, 18),
            new Item("foo", -1, 18),
            new Item("foo", 0, 19),
            new Item("Sulfuras, Hand of Ragnaros", -1, 80),
            new Item("Sulfuras, Hand of Ragnaros", -1, 80),
            new Item("Sulfuras, Hand of Ragnaros", -1, 80),
            new Item("Aged Brie", -3, 22),
            new Item("Aged Brie", 0, 21),
            new Item("Aged Brie", -1, 22),
        ]
        
        const items = gildedRose.updateQuality();
        expect(items).to.deep.equal(goldenRecord);
    })

    // it("should never have a negative quality value", function() {
    //     const gildedRose = new GildedRose([
    //         new Item("foo", -1, 0),
    //         new Item("foo", 0, 0),
    //         new Item("foo", 1, 1),
    //         new Item("Aged Brie", -2, 20),
    //         new Item("Aged Brie", 1, 20),
    //         new Item("Aged Brie", 0, 20),
    //         new Item("Backstage passes to a TAFKAL80ETC concert", 1, 10),
    //         new Item("Backstage passes to a TAFKAL80ETC concert", -1, 0),
    //         new Item("Sulfuras, Hand of Ragnaros", -1, 80),
    //     ])

    //     const goldenRecord = [
    //         new Item("foo", -2, 0),
    //         new Item("foo", -1, 0),
    //         new Item("foo", 0, 0),
    //         new Item("Aged Brie", -3, 22),
    //         new Item("Aged Brie", 0, 21),
    //         new Item("Aged Brie", -1, 22),
    //         new Item("Backstage passes to a TAFKAL80ETC concert", 0, 13),
    //         new Item("Backstage passes to a TAFKAL80ETC concert", -2, 0),
    //         new Item("Sulfuras, Hand of Ragnaros", -1, 80),
    //     ]
        
    //     const items = gildedRose.updateQuality();
    //     expect(items).to.deep.equal(goldenRecord);
    // })

    // it("'Aged Brie' should increase in value with age", function() {
    //     const gildedRose = new GildedRose([
    //         new Item("Aged Brie", -5, 23),
    //         new Item("Aged Brie", 1, 20),
    //         new Item("Aged Brie", 0, 20),
    //     ])

    //     const goldenRecord = [
    //         new Item("Aged Brie", -6, 25),
    //         new Item("Aged Brie", 0, 21),
    //         new Item("Aged Brie", -1, 22),
    //     ]
        
    //     const items = gildedRose.updateQuality();
    //     expect(items).to.deep.equal(goldenRecord);
    // })
});
