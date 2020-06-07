class CircularBasket {
    private _diameter: number = 0
    private _height: number = 0

    private _baseArea: number = 0
    private _sideArea: number = 0
    private _totalArea: number = 0
    private _wireWeight: number = 0
    private _estimulatedTime: number = 0
    private _realTime: number = 0
    private _wirePrice: number = 0
    private _laborPrice: number = 0
    private _totalWithoutProfit: number = 0
    private _maxPrice: number = 0

    get diameter(): number { return this._diameter }
    get height(): number { return this._height }

    get baseArea(): number { return this._baseArea }
    get sideArea(): number { return this._sideArea }
    get totalArea(): number { return this._totalArea }
    get wireWeight(): number { return this._wireWeight }
    get estimulatedTime(): number { return this._estimulatedTime }
    get realTime(): number { return this._realTime }
    get wirePrice(): number { return this._wirePrice }
    get laborPrice(): number { return this._laborPrice }
    get totalWithoutProfit(): number { return this._totalWithoutProfit }
    get maxPrice(): number { return this._maxPrice }

    set diameter(value: number) {
        this._diameter = value
        this.calculate()
    }

    set height(value: number) {
        this._height = value
        this.calculate()
    }

    private getMaxPrice(price: number): number {
        if (price < 6) return 12
        else if (price < 10) return 15
        else if (price < 12) return 18
        else if (price < 15) return 22
        else if (price < 18) return 28
        else if (price < 22) return 32
        else if (price < 25) return 35
        else if (price < 30) return 40
        else if (price < 35) return 45
        else if (price < 40) return 50
        else if (price < 45) return 55
        else if (price < 48) return 60
        else if (price < 52) return 65
        else if (price < 55) return 70
        else if (price < 58) return 75
        else if (price < 62) return 80
        else if (price < 66) return 85
        else if (price < 70) return 90
        else if (price < 74) return 95
        else if (price < 80) return 100
        else if (price < 84) return 105
        else if (price < 88) return 110
        else if (price < 92) return 115
        else if (price < 96) return 120
        else if (price < 100) return 125
        else if (price < 104) return 130
        else if (price < 108) return 140
        else if (price < 108) return 135
        else if (price < 112) return 140
        else if (price < 116) return 145
        else if (price < 120) return 150
        else if (price < 124) return 155
        else if (price < 128) return 160
        else if (price < 132) return 165
        else if (price < 136) return 170
        else if (price < 140) return 175
        else if (price < 144) return 180
        else if (price < 148) return 185
        else if (price < 152) return 190
        else if (price < 156) return 195
        else if (price < 160) return 200
        else if (price < 164) return 205
        else if (price < 168) return 210
        else if (price < 172) return 215
        else if (price < 176) return 220
        else if (price < 180) return 225
        else if (price < 184) return 230
        else if (price < 188) return 235
        else if (price < 192) return 240
        else if (price < 196) return 245
        else if (price < 200) return 250
        else return price * 1.25
    }

    private calculate() {
        this._baseArea = Math.PI * ((this._diameter / 2) ** 2)
        this._sideArea = 2 * Math.PI * (this._diameter / 2) * this._height
        this._totalArea = this._baseArea + this._sideArea
        this._wireWeight = this._totalArea / 2800
        this._estimulatedTime = this._totalArea / 800
        this._wirePrice = (this._totalArea / 2800) * 20
        this._laborPrice = Math.max(this._estimulatedTime, this._realTime) * 10
        this._totalWithoutProfit = this._wirePrice + this._laborPrice
        
        // this._maxPrice = this._totalWithoutProfit < 80 ? this._totalWithoutProfit : this._totalWithoutProfit * 1.25
        this._maxPrice = this.getMaxPrice(this._totalWithoutProfit)
    }
}