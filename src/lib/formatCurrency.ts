const formatCurrency = (value: number) => {
  if (!value) {
    value = 0;
  }

  return value.toLocaleString("USD", {
    style: "currency",
    currency: "USD",
  });
};

export default formatCurrency;
