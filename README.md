
# OwnMyCash -- Expense Tracker 

OwnMyCash is a minimal, fast, and intuitive expense-tracking web application built with React and Vite. It helps users record, categorize, and visualize their transactions in a clean, responsive interface. All data is managed client-side, making it instantly usable with no backend setup.

---

## Overview

**OwnMyCash** is a lightweight personal finance tracker that allows users to monitor income, expenses, and balances in real time. The application uses React Context and a reducer-based state management system to maintain a global transaction list and compute financial summaries.

The design focuses on simplicity, clarity, and performance.

---

## Features

- Add new transactions (income or expense)
- Automatic balance, income, and expense calculations
- Categorized transaction list with real-time updates
- Context API + Reducer for predictable global state management
- Clean and responsive user interface
- Zero backend --- works entirely in the browser
- Vite-powered fast development and build system

---

## Live Demo

https://ownmycash.netlify.app/

---

## Screenshots


![Dashboard](https://github.com/user-attachments/assets/0ab1231d-46be-445d-b213-277b72df6bc1)


![Transactions](https://github.com/user-attachments/assets/ce53bce6-0e72-4409-8d29-bb98601e26cd)


Tech Stack
----------

**Frontend**

-   React 19

-   React DOM

-   Vite 7

-   CSS

**Tooling**

-   ESLint

-   @vitejs/plugin-react

**State Management**

-   React Context API

-   Custom Reducer (`AppReducer.jsx`)

* * * * *

Installation
------------

Clone the repository:

```
git clone https://github.com/DwitiThaker/expenseTracker.git
cd expenseTracker

```

Install dependencies:

```
npm install

```

Start development server:

```
npm run dev

```

* * * * *

Usage
-----

1.  Launch the application in your browser after running:

    ```
    npm run dev

    ```

2.  Add income or expense transactions using the input form.

3.  View your live-updating balance and financial summary.

4.  Review or delete transactions from the list.

5.  All data persists until browser refresh (or longer if you later add localStorage).


* * * * *

Project Structure
-----------------

```
expenseTracker/
├── index.html
├── vite.config.js
├── package.json
├── src/
│   ├── main.jsx
│   ├── index.css
│   ├── assets/
│   ├── components/
│   │   ├── AddTransaction.jsx
│   │   ├── Balance.jsx
│   │   ├── Header.jsx
│   │   ├── IncomeExpense.jsx
│   │   ├── Transaction.jsx
│   │   └── TransactionList.jsx
│   └── context/
│       ├── AppReducer.jsx
│       └── GlobalState.jsx
└── README.md

```

Adjust the tree to match your repo if any filenames differ.

* * * * *

How It Works
------------

### Global State

The app uses a centralized state pattern based on:

-   **React Context** --- provides global access to transactions and actions.

-   **Reducer (`AppReducer.jsx`)** --- handles state transitions in a predictable way.



MIT License

Copyright (c) 2025 Dwiti Thaker

Permission is hereby granted, free of charge, to any person obtaining a copy


* * * * *

Contact
-------

**Author:** Dwiti Thaker\
**GitHub:** <https://github.com/DwitiThaker>\
**Project:** <https://github.com/DwitiThaker/expenseTracker>


```
