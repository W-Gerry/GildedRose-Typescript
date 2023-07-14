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

            // Reduce sellIn variable by 1 for all other items
            item.sellIn--;

            // Set default degradation value
            let qualityChange = 0;

            // Set min and max quality
            let minQuality = 0;
            let maxQuality = 50;

            // Switch case to adjust value of all other items
            switch(item.name) {
                case "Aged Brie":
                    qualityChange = 1;
                    break;

                case "Backstage passes to a TAFKAL80ETC concert":
                    if (item.sellIn >= 10) {
                        qualityChange = -1;
                        break;
                    }
                    
                    if (item.sellIn >= 5) {
                        qualityChange = 2;
                        break;
                    }

                    if (item.sellIn >= 0) {
                        qualityChange = 3;
                    } else {
                        item.quality = 0;
                        qualityChange = 0;
                    }
                    break;

                case "Conjured Mana Cake":
                    qualityChange = -2;
                    break;

                default:
                    qualityChange = -1;
            }
            
            // Adjust quality values
            item.quality = adjustQuality(item, qualityChange);

            // Check min and max allowed quality values
            item.quality = checkMinMaxQuality(item, minQuality, maxQuality);

        }

        return this.items;
    }

}

function adjustQuality(item, qualityChange) {
    if (item.sellIn < 0) {
        // Items degrade 2x faster after sell date
        qualityChange *= 2;
    }
    return item.quality += qualityChange;
}

function checkMinMaxQuality(item, minQuality, maxQuality) {
    if (item.quality < minQuality) {
        item.quality = minQuality;
    }

    if (item.quality > maxQuality) {
        item.quality = maxQuality;
    }
    return item.quality;
}