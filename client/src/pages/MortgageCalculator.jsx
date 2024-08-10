import React, { useState } from 'react';

const MortgageCalculator = () => {
  const [loanAmount, setLoanAmount] = useState('');
  const [interestRate, setInterestRate] = useState('');
  const [loanTerm, setLoanTerm] = useState('');
  const [monthlyPayment, setMonthlyPayment] = useState(null);
  const [error, setError] = useState('');

  const calculateMortgage = () => {
    setError('');
    if (!loanAmount || !interestRate || !loanTerm) {
      setError('All fields are required');
      return;
    }

    const principal = parseFloat(loanAmount);
    const interest = parseFloat(interestRate) / 100 / 12;
    const numberOfPayments = parseFloat(loanTerm) * 12;

    if (interest === 0) {
      setMonthlyPayment(principal / numberOfPayments);
      return;
    }

    const payment =
      (principal * interest) / (1 - Math.pow(1 + interest, -numberOfPayments));
    setMonthlyPayment(payment.toFixed(2));
  };

  return (
    <div className="container mx-auto p-4">
      <h1 className="text-4xl font-bold text-center text-cyan-800 mb-6">
        Mortgage Calculator
      </h1>
      <div className="bg-white p-6 rounded-lg shadow-md max-w-md mx-auto">
        <form
          onSubmit={(e) => {
            e.preventDefault();
            calculateMortgage();
          }}
          className="space-y-4"
        >
          <div>
            <label htmlFor="loanAmount" className="block text-sm font-medium text-gray-700">
              Loan Amount ($)
            </label>
            <input
              type="number"
              id="loanAmount"
              value={loanAmount}
              onChange={(e) => setLoanAmount(e.target.value)}
              className="w-full p-2 border border-gray-300 rounded-md"
              placeholder="Enter loan amount"
            />
          </div>
          <div>
            <label htmlFor="interestRate" className="block text-sm font-medium text-gray-700">
              Annual Interest Rate (%)
            </label>
            <input
              type="number"
              step="0.01"
              id="interestRate"
              value={interestRate}
              onChange={(e) => setInterestRate(e.target.value)}
              className="w-full p-2 border border-gray-300 rounded-md"
              placeholder="Enter annual interest rate"
            />
          </div>
          <div>
            <label htmlFor="loanTerm" className="block text-sm font-medium text-gray-700">
              Loan Term (years)
            </label>
            <input
              type="number"
              id="loanTerm"
              value={loanTerm}
              onChange={(e) => setLoanTerm(e.target.value)}
              className="w-full p-2 border border-gray-300 rounded-md"
              placeholder="Enter loan term in years"
            />
          </div>
          <button
            type="submit"
            className="bg-cyan-700 text-white p-3 rounded-lg hover:bg-cyan-800 focus:outline-none focus:ring-2 focus:ring-cyan-500"
          >
            Calculate
          </button>
        </form>
        {error && <p className="text-red-500 mt-4">{error}</p>}
        {monthlyPayment !== null && !error && (
          <div className="mt-4 p-4 bg-gray-100 rounded-md">
            <h2 className="text-xl font-semibold">Estimated Monthly Payment:</h2>
            <p className="text-2xl font-bold text-cyan-800">${monthlyPayment}</p>
          </div>
        )}
      </div>
    </div>
  );
};

export default MortgageCalculator;
