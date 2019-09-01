function foundation(foundationName, skinType, undertone, price, complexion, productType, quantity, ingridients, manufacturedDate, bestBefore, ) {

    return {

        name: foundationName,
        skinType: skinType,
        underTone: undertone,
        pricing: price,
        complexion: complexion,
        packing: productType,
        qty: quantity,
        ingridients: ingridients,
        manufacturedDate: manufacturedDate,
        bb: bestBefore,
        details: function () {
            console.log(`${this.name}  makes your skin better`)
        }
    }

}

let georgioArmani = foundation('Luminous Silk', `normal to dry`, `olive`, 7000, `medium`, `Glass Bottle`, `30ml`, ['abc', 'def'], ` Nov2018`, 2022);



let frozenYougurt = function (flavour, yogurtType, topping, dripping, price, packing) {
    return {
        flavour: flavour,
        type: yogurtType,
        topping: topping,
        dripping: dripping,
        price: price,
        packing: packing,
        msg: function () {
            console.log(`Indulge Yourself in ${this.flavour} frozen Yougurt :)`);
        }
    }
}

let myCup = frozenYougurt(`blueberry`, `No Suger Added`, `S'mores`, `Whipped Cream`, 350, `cup`);
console.log(myCup);



let myPlayList = function (name, song, date, genre) {
    return {
        singerName: name,
        songName: song,
        dateReleased: date,
        genre: genre,
        premierd: function () {
            console.log(`${this.songName} premierd on ${this.dateReleased}`);
        }
    }
}

let onMyWay = myPlayList(`Alan Walker`, `On My Way`, `March 1, 2019`, `Electronin Dance Music`);
console.log(onMyWay);