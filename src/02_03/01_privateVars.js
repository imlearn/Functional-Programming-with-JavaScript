const myCounter = {
  count: 0,
  increment: function() {
    this.count += 1
  },
  currentValue: function () {
    return this.count
  }
}

console.log(myCounter.currentValue())

myCounter.increment()
myCounter.increment()

console.log(myCounter.currentValue())

myCounter.count = 999

console.log(myCounter.currentValue());

