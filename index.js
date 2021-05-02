const cashDiv = document.querySelector(".cash");
cashDiv.innerHTML = "Current cash : " + cash;

const updateCash = () =>{
    const cashDiv = document.querySelector(".cash");
    cashDiv.innerHTML = "Current cash : " + cash;
};

//for deposit
const placeDepositView = () => {
    const amount = document.querySelector(".deposit-amount").value;
    const year = document.querySelector(".deposit-year").value;
    console.log(amount);
    console.log(year);

    placeDeposit(amount, year);
};

const depositSubmit = document.querySelector(".deposit-submit");
depositSubmit.addEventListener("click", () => {
placeDepositView();
updateCash();
});

updateCash();

//for loan

const takeLoanView = () => {
    const amount = document.querySelector(".loan-amount").value;
    const year = document.querySelector(".loan-year").value;
    console.log(amount);
    console.log(year);

    takeLoan(amount, year);
};

const loanSubmit = document.querySelector(".loan-submit");
loanSubmit.addEventListener("click", () => {
takeLoanView();
updateCash();
});

updateCash();






























