
function withDiscount(original) {
  const discount = original <= 100 ? 1 : original <= 500 ? 5 : original <= 1000 ? 10 : 15
  const finalCost = (original * (100 - discount)/100)
  return {
    finalCost,
    discount
  }
}

module.exports = withDiscount;
