
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

Add images in a `screenshots/` folder and reference like:

```markdown
![Dashboard](./screenshots/dashboard.png)

```

(You can remove this section if you don't have screenshots yet.)

* * * * *

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

Build Scripts
-------------

| Command | Description |
| --- | --- |
| `npm run dev` | Start local development server |
| `npm run build` | Create optimized production build |
| `npm run preview` | Preview the production build locally |
| `npm run lint` | Run ESLint analysis |

* * * * *

Netlify Deployment
------------------

For Netlify (Vite + React) configure these build settings:

-   **Base directory:** *(leave empty unless your project is in a subfolder)*

-   **Build command:** `npm run build`

-   **Publish directory:** `dist`

Add a `_redirects` or `netlify.toml` for SPA routing (optional). Example `_redirects` file content:

```
/*    /index.html   200

```

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

Typical state shape:

```
{
  transactions: [
    { id: 1, text: "Salary", amount: 5000 },
    { id: 2, text: "Groceries", amount: -200 }
  ]
}

```

Actions:

-   `ADD_TRANSACTION` --- adds a transaction object with id, text, and amount

-   `DELETE_TRANSACTION` --- removes a transaction by id

### Component Overview

-   **Header** --- App title and basic navigation (if any)

-   **Balance** --- Displays current balance computed from transactions

-   **IncomeExpense** --- Shows total income and total expense breakdown

-   **TransactionList** --- Lists all transactions with delete option

-   **Transaction** --- Single transaction row (amount sign determines styling)

-   **AddTransaction** --- Form to add a new income/expense

* * * * *

License
-------

This project is licensed under the **MIT License**. See [LICENSE](https://chatgpt.com/LICENSE) for full text (or add an MIT LICENSE file at repo root).

Short MIT header:

```
MIT License

Copyright (c) 2025 Dwiti Thaker

Permission is hereby granted, free of charge, to any person obtaining a copy
...

```

(Include the full MIT text in a `LICENSE` file.)

* * * * *

Contact
-------

**Author:** Dwiti Thaker\
**GitHub:** <https://github.com/DwitiThaker>\
**Project:** <https://github.com/DwitiThaker/expenseTracker>


```


::contentReference[oaicite:0]{index=0}

```
