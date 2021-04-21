it("should calculate the monthly rate correctly", function () {
  const values = {
    amount: 200000,
    years: 20,
    rate: 5,
  };
  expect(calculateMonthlyPayment(values)).toEqual("1319.91");
});

it("should return a result with 2 decimal places", function () {
  const values = {
    amount: 50000,
    years: 5,
    rate: 5,
  };
  expect(calculateMonthlyPayment(values)).toEqual("943.56");
});

it("should work for a very low interest rate", function () {
  const values = {
    amount: 20000,
    years: 10,
    rate: 0.2,
  };
  expect(calculateMonthlyPayment(values)).toEqual("168.35");
});
