class Terminal {
  constructor(pricingInfo) {
    this.pricingInfo = pricingInfo
    this.list = []
  }
  scan(productCode) {
    const product = this.addToCart(productCode)
    if (product !== undefined) {
      this.list.push(product)
    }
  }
  addToCart(productCode) {
    const { pricingInfo } = this
    for (const product in pricingInfo) {
      const productInList = pricingInfo[product]
      if (productInList.productCode == productCode) {
        return productInList
      }
    }
  }
  total() {
    const total = this.addTotal(this.list)
    return total
  }
  addTotal() {
    const count = this.getCount()
    let total = 0
    count.forEach((product) => {
      if (product.groupPrice && product.count >= product.unitsPerGroup) {
        const dividedAmt = Math.floor(product.count / product.unitsPerGroup)
        const remainder = product.count % product.unitsPerGroup
        total += (dividedAmt * product.groupPrice) + (remainder * product.unitPrice)
      } else {
        total += product.unitPrice * product.count
      }
    })
    return total
  }
  getCount() {
    const count = []
    const copy = this.list.slice(0)
    for (let i = 0; i < this.list.length; i++) {
      let productCount = 0
      const scannedItem = this.list[i]
      for (let p = 0; p < copy.length; p++) {
        if (scannedItem === copy[p]) {
          productCount++
          delete copy[p]
        }
      }
      if (productCount > 0) {
        scannedItem.count = productCount
        count.push(scannedItem)
      }
    }
    return count
  }
}

export default Terminal

