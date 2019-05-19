function createCounter(count) {
  return {
    increment: function() {
      count = count + 1
    },

    currentValue: function() {
      return count
    }
  }
}
