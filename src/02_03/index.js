function doIf(condition, func) {
  if(condition) {
    func()
  }
}

const x = 1

doIf(x === 1, sayXis1)
doIf(x === "Bananas", sayXisBananas)
doIf(x < 10 &&x > 0, sayXisBetweenoAnd10)

function sayXis1() {console.log("x is equal to 1")}
function sayXisBananas() {consosle.log("x is equal to 'Bananas'")}
function sayXisBetweenoAnd10() {console.log("x is between 0 and 10")}
