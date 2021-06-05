import React, { Dimensions, PixelRatio} from "react-native";

const baseUnitHeight = 830.9804076957779;

const baseUnitWidth = 423.5294196844927;

const { width, height } = Dimensions.get("window");

class NormalizeSize {
    constructor() {
        this.normalize = this.normalize.bind(this);
    }

    normalize = (size) => (size/ baseUnitHeight) * height;
    normalizePixel = (size) => PixelRatio.getPixelSizeForLayoutSize((size/ baseUnitHeight) * height);
    
}

module.exports = new NormalizeSize();