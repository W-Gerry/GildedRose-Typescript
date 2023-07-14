export class Item {
    name: string;
    sellIn: number;
    quality: number;

    constructor(name, sellIn, quality) {
        this.name = name;
        this.sellIn = sellIn;
        this.quality = quality;
    }
}

export class GildedRose {
    items: Array<Item>;

    constructor(items = [] as Array<Item>) {
        this.items = items;
    }

    updateQuality() {

        for (let item of this.items) {
            // If Sulfuras, don't change sell by date or value
            if (item.name === "Sulfuras, Hand of Ragnaros") {
                continue;
            }

            // Define function for changing quality value of items and set default degradation
            let newQuality = function changeQuality(degradationValue) {
                return item.quality += degradationValue;
            }
            let degradationValue = 0;

            // Reduce sellIn variable by 1 for all other items
            item.sellIn--;

            // Switch case to adjust value of all other items
            switch(item.name) {
                case "Aged Brie":
                    if (item.sellIn >= 0) {
                        item.quality += 1;
                    } else {
                        item.quality += 2;
                    }
                    break;

                case "Backstage passes to a TAFKAL80ETC concert":
                    if (item.sellIn >= 10) {
                        item.quality -= 1;
                        break;
                    }
                    
                    if (item.sellIn >= 5) {
                        item.quality += 2;
                        break;
                    }

                    if (item.sellIn >= 0) {
                        item.quality += 3;
                    } else {
                        item.quality = 0;
                    }
                    break;

                default:
                    if (item.sellIn >= 0) {
                        item.quality -= 1;
                    } else {
                        item.quality -= 2;
                    }
            }     

            if (item.quality > 50) {
                item.quality = 50;
            }

            if (item.quality < 0) {
                item.quality = 0;
            }

        }

        // for (let i = 0; i < this.items.length; i++) {
        //     if (this.items[i].name != 'Aged Brie' && this.items[i].name != 'Backstage passes to a TAFKAL80ETC concert') {
        //         if (this.items[i].quality > 0) {
        //             if (this.items[i].name != 'Sulfuras, Hand of Ragnaros') {
        //                 this.items[i].quality = this.items[i].quality - 1;
        //             }
        //         }
        //     } else {
        //         if (this.items[i].quality < 50) {
        //             this.items[i].quality = this.items[i].quality + 1
        //             if (this.items[i].name == 'Backstage passes to a TAFKAL80ETC concert') {
        //                 if (this.items[i].sellIn < 11) {
        //                     if (this.items[i].quality < 50) {
        //                         this.items[i].quality = this.items[i].quality + 1
        //                     }
        //                 }
        //                 if (this.items[i].sellIn < 6) {
        //                     if (this.items[i].quality < 50) {
        //                         this.items[i].quality = this.items[i].quality + 1
        //                     }
        //                 }
        //             }
        //         }
        //     }
        //     if (this.items[i].name != 'Sulfuras, Hand of Ragnaros') {
        //         this.items[i].sellIn = this.items[i].sellIn - 1;
        //     }
        //     if (this.items[i].sellIn < 0) {
        //         if (this.items[i].name != 'Aged Brie') {
        //             if (this.items[i].name != 'Backstage passes to a TAFKAL80ETC concert') {
        //                 if (this.items[i].quality > 0) {
        //                     if (this.items[i].name != 'Sulfuras, Hand of Ragnaros') {
        //                         this.items[i].quality = this.items[i].quality - 1
        //                     }
        //                 }
        //             } else {
        //                 this.items[i].quality = this.items[i].quality - this.items[i].quality
        //             }
        //         } else {
        //             if (this.items[i].quality < 50) {
        //                 this.items[i].quality = this.items[i].quality + 1
        //             }
        //         }
        //     }
        // }

        // for (let i = 0; i < this.items.length; i++) {
        //     console.log(`new Item("${this.items[i].name}", ${this.items[i].sellIn}, ${this.items[i].quality}),`);
        // }
        return this.items;
    }

}

