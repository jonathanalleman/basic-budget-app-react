import React from 'react';
import { Header } from './Header';
import { Balance } from './Balance';
import { IncomeExpenses } from './IncomeExpenses';
import { TransactionList } from './TransactionList';
import { AddTransaction } from './AddTransactions';

import { GlobalProvider } from '../context/GlobalState';

export default function Homepage() { 
    return (
    <>
     <GlobalProvider>
    
      <Header />
      <div className="container">
      
       
        <AddTransaction />
        <TransactionList />
        <Balance />
        <IncomeExpenses />
      </div>
    </GlobalProvider>
    </>
    );
    }