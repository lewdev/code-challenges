const countOrders = n => {

  const max_modulo = 10**9 + 7
    
  let valid_order_count = 1
  
  for (let i=1; i<=n; i++) valid_order_count = valid_order_count*i*(2*i-1) % max_modulo;
  
  return valid_order_count
};

const countOrdersTests = [
  [1, 1],
  [2, 6],
  [3, 90],
];