

## 🧾 BillPay - Utility Bill Payment System

A responsive React-based web application that allows users to **view**, **filter**, and **pay utility bills** (like electricity, gas, internet, etc.). It supports **user authentication**, **individual user balance**, and **local payment history**, all with a clean, modern UI.

---

### 🌐 Live Demo

👉 [Live URL](https://fastcassh.netlify.app/)


---

### 🎯 Purpose

The purpose of this project is to demonstrate a **user-specific** bill payment system where:

* Each user has their own balance
* Paid bills are tracked and disabled for repeated payments
* Bills can be filtered by category
* User profiles can be updated

---

### 🚀 Key Features

* 🔐 Firebase Authentication (email/password + Google)
* 💰 Live balance management with localStorage
* 📄 Filterable bill list (electricity, gas, water, etc.)
* ✅ Prevents paying the same bill twice
* ✏️ Editable user profile with photo
* ⚡ Responsive UI with Tailwind CSS & DaisyUI
* 📦 Clean route structure using React Router v7

---

### 📦 Dependencies (NPM Packages)

| Package                   | Purpose                          |
| ------------------------- | -------------------------------- |
| **react** / **react-dom** | Core library                     |
| **react-router-dom**      | Client-side routing              |
| **firebase**              | Authentication                   |
| **axios**                 | HTTP requests (optional use)     |
| **react-hot-toast**       | Toast notifications              |
| **react-icons**           | Icons including `FiEdit2`        |
| **lucide-react**          | Icon set used in navbar          |
| **daisyui**               | Beautiful Tailwind UI components |
| **tailwindcss**           | Utility-first CSS framework      |
| **vite**                  | Lightning-fast dev environment   |
| **eslint**                | Linting and code standards       |

---

### 🛠️ Dev Commands

```bash
npm install       # Install all dependencies
npm run dev       # Start development server
npm run build     # Build for production
npm run preview   # Preview production build
```

---




