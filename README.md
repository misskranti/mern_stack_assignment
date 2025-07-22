# 🚀 MERN Stack Developer Assignment 

This repository contains solutions for the **Assignment Tasks** including:

1. ✅ Data Structures & Algorithms (DSA)
2. ✅ MongoDB Aggregation Query
3. ✅ React To-Do List Application

Each task is implemented with a focus on **performance**, **code readability**, and **best practices**.

---

## 📁 Folder Structure

```
assessment-tasks/
├── dsa/                                      # 🔹 Task 1 & 2: DSA Problems
│   ├── longestIncreasingSubsequence.js       # 🧠 Finds length of longest increasing subsequence (O(n log n))
│   └── twoSum.js                             # ➕ Finds indices of two elements summing to a target (O(n))
│
├── mongodb-aggregation/                      # 🔹 Task 3: MongoDB Aggregation
│   ├── node_modules/                         # 📦 Contains installed Node.js dependencies
│   ├── package.json                          # 📋 Defines dependencies & scripts
│   ├── package-lock.json                     # 🔒 Locks dependency versions
│   └── sales-aggregation.js                  # 📊 Aggregation pipeline to calculate monthly revenue per store
│
├──  todo-app/                                # 🔹 Task 4: React To-Do App
│   ├── node_modules/                         # 📦 Contains React & tooling dependencies
│   ├── package.json                          # 📋 Project metadata and dependencies
│   ├── package-lock.json                     # 🔒 Dependency lock file
│   ├── public/
│   │   └── index.html                        # 🌐 HTML entry point for React app
│   │
│   ├── src/
│   │   ├── components/                       # 🧩 Modular UI components
│   │   │   ├── AddTodo.js                    # ➕ Input & add task button
│   │   │   ├── Filter.js                     # 🧼 All / Completed / Pending filter buttons
│   │   │   ├── TodoApp.js                    # 🧠 Root logic for managing state & actions
│   │   │   ├── TodoItem.js                   # ✅ Displays each task (with checkbox/delete)
│   │   │   └── TodoList.js                   # 📃 Renders filtered list of todos
│   │   │
│   │   ├── App.js                            # 🔗 Connects all components (entry for UI)
│   │   ├── App.css                           # 🎨 App-wide styles
│   │   ├── index.js                          # 🚀 ReactDOM entry file
│   │   ├── index.css                         # 🌍 Global styles
│   │   └── logo.svg                          # 🖼️ Default logo asset
│
└── README.md                                 # 📘 Documentation with setup and usage instructions


````

---

## ✅ Task 1: Longest Increasing Subsequence

### 🔹 Path: `dsa/longestIncreasingSubsequence.js`

### 🔍 Problem:
Given an array of integers, return the length of the longest **strictly increasing subsequence**.

### ✅ Example:
```js
Input: [10, 9, 2, 5, 3, 7, 101, 18]
Output: 4 // [2, 3, 7, 101]
````

### ⏱️ Time Complexity:

* Optimized: `O(n log n)` using Binary Search + DP

---

## ✅ Task 2: Two Sum

### 🔹 Path: `dsa/twoSum.js`

### 🔍 Problem:

Return the indices of two numbers that add up to the given target.**cannot reuse** the same element twice.

### ✅ Example:

```js
Input: nums = [2, 7, 11, 15], target = 9
Output: [0, 1] // 2 + 7 = 9
```

### ⏱️ Time Complexity:

* `O(n)` using a HashMap

### ⚠️ Edge Case Handling:

* If array is empty or has < 2 elements → throws error
* If no valid pair → returns a message

---

## ✅ Task 3: MongoDB Aggregation – Monthly Revenue Report

### 🔹 Path: `mongodb-aggregation/sales-aggregation.js`

### 🗂 Collection Name: `sales`

### 🧾 Document Structure:

```json
{
  "_id": "687f0ed10513c488b42fefbc",
  "date": "2024-06-15T00:00:00.000+00:00",
  "store": "Store A",
  "items": [
    { "name": "item1", "quantity": 5, "price": 10.0 },
    { "name": "item2", "quantity": 3, "price": 20.0 }
  ]
}
```

### 🎯 Goal:

Calculate the following for **each store per month**:

* Total Revenue = sum of (price × quantity)
* Average Item Price
* Sort by store and then by month

### 📈 Sample Output:

```json
[
  {
    "store": "Store A",
    "month": "2024-06",
    "totalRevenue": 230.0,
    "averagePrice": 15.0
  },
  {
    "store": "Store B",
    "month": "2024-06",
    "totalRevenue": 150.0,
    "averagePrice": 12.5
  }
]
```

### 🛠️ Technologies:

* MongoDB Aggregation Pipeline
* Operators used: `$unwind`, `$addFields`, `$group`, `$project`, `$sort`

---

## ✅ Task 4: React – Dynamic To-Do List App

### 🔹 Path: `react-todo-app/`

### 🎯 Features:

* Add tasks with text input
* Mark tasks as complete or pending
* Delete tasks
* Filter: All / Completed / Pending
* Persist tasks using `localStorage`

### 🧱 Components:

| Component  | Description                       |
| ---------- | --------------------------------- |
| `TodoApp`  | Main app wrapper                  |
| `AddTodo`  | Input box + Add button            |
| `TodoItem` | Displays each task with status    |
| `TodoList` | Renders filtered task list        |
| `Filter`   | Buttons to switch between filters |

### 🔧 State Management:

* `useState` for task list and filters
* `useEffect` to sync with localStorage

---

## 🛠️ Setup Instructions

### 🔃 Clone the Repository

```bash
git clone https://github.com/misskranti/mern_stack_assignment.git
cd mern_stack_assignment
```

---

### ▶️ Run DSA Tasks

```bash
cd dsa
node longestIncreasingSubsequence.js
node twoSum.js
```

---

### ▶️ Run MongoDB Aggregation

1. Update connection string in `sales-aggregation.js`:

```js
const uri = "mongodb+srv://Saswath1403:S%40swath9476@cluster0.fjep0.mongodb.net/SalesDB?retryWrites=true&w=majority";
```

2. Run the aggregation:

```bash
cd mongodb-aggregation
npm install
node sales-aggregation.js
```

---

### ▶️ Run React To-Do App

```bash
cd todo-app
npm install
npm start
```

Open browser at:
🌐 `http://localhost:3000`

---

## 📌 Tech Stack Used

| Area        | Tech                |
| ----------- | ------------------- |
| Backend     | Node.js, JavaScript |
| Database    | MongoDB Atlas       |
| Frontend    | React (Hooks)       |
| Persistence | Local Storage       |
| Aggregation | MongoDB Pipeline    |
| Tools       | VSCode, Git, npm    |

---    