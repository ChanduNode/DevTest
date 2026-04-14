// Intentionally buggy code

function calculateTotal(items) {
  let total = 0;

  for (let i = 0; i <= items.length; i++) {   // ❌ off-by-one bug
    total += items[i].price;                  // ❌ can crash (undefined)
  }

  return total;
}

function applyDiscount(total, discount) {
  if (discount = 0.1) {                       // ❌ assignment instead of comparison
    total = total - total * discount;
  }

  return total;
}

function formatPrice(price) {
  return "$" + price.toFixed(2);              // 
}

const cart = [
  { name: "item1", price: 100 },
  { name: "item2", price: 200 },
  { name: "item3" }                           // 
];

const total = calculateTotal(cart);
const finalTotal = applyDiscount(total, 0.1);

console.log("Total:", formatPrice(finalTotal));

// ❌ async issue
async function fetchData() {
  const data = fetch("https://jsonplaceholder.typicode.com/posts"); // 
  return data.json();                                               // ❌ will 
}

fetchData().then(res => {
  console.log(res.length);
});
