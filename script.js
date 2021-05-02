let cash = 100000;
const DEPOSIT_PERCENT = 0.1;
const LOAN_PERCENT = 0.15;

const placeDeposit = (amount, numberOfYear) => {
  let percentEarned = 0;

  let i;
  for (i = 0; i < numberOfYear; i++) {
    percentEarned += amount * DEPOSIT_PERCENT;
  }

  cash -= percentEarned;
  return percentEarned;
};

const takeLoan = (amount, numberOfYear) => {
  let percentGenerated = 0;

  let i;
  for (i = 0; i < numberOfYear; i++) {
    percentGenerated += amount * LOAN_PERCENT;
  }

  cash += percentGenerated;
  return percentGenerated;

};

const current_cash = (cash) => {
    console.log("current bank cash = %d", cash);
};

// console.log(
//     "customer earned by placing 1000 manat over 3 years = %d" ,
//     placeDeposit(1000, 3)
// );
// current_cash(cash);

// console.log(
//     "customer lost by placing 1000 manat over 3 years = %d" ,
//     takeLoan(10000, 3)
// );
// current_cash(cash);
