# 📊 DashBoardApp

A full-stack **Next.js Dashboard Application** built by following **all chapters of the official Next.js “Dashboard App” tutorial**, structured and customized as a production-ready project.

This repository demonstrates modern **Next.js App Router** concepts including layouts, routing, authentication, server actions, and reusable UI components using **TypeScript** and **Tailwind CSS**

---

## 📌 Table of Contents

1. Project Overview  
2. Project Summary  
3. Tech Stack  
4. Features  
5. Authentication Architecture  
6. Installation & Dependencies  
7. Environment Setup  
8. Running the Project  
9. Build & Production  
10. Docker Support (Optional)  
11. Routing Overview  
12. Learning Reference  
13. Author & License  

---

## 🚀 Project Overview

**DashBoardApp** is a learning-to-production level dashboard application that includes:

- Public and protected routes  
- Authentication & session handling  
- Dashboard layout with sidebar navigation  
- Customers and Invoices pages  
- Server-side rendering and server actions  
- Clean, scalable project architecture  

This project can be used as:
- A strong portfolio project  
- A reference for Next.js App Router  
- A starter template for real dashboard-based systems  

---

## 🧾 Project Summary

DashBoardApp is a production-structured dashboard application built using **Next.js App Router**, following all chapters of the official **Next.js Dashboard App tutorial**.

The project demonstrates real-world dashboard patterns such as **protected routes, authentication, shared layouts, server actions, and modular UI components**, implemented with **TypeScript** and **Tailwind CSS**.

It includes a secure dashboard with pages for **login, dashboard overview, customers, and invoices**, leveraging server-side rendering and clean architectural separation. The project is designed as a **learning-to-production bridge**, making it suitable for portfolio presentation, technical interviews, and as a foundation for scalable dashboard systems.

---

## 🛠 Tech Stack

- **Next.js (App Router)**
- **TypeScript**
- **Tailwind CSS**
- **Auth.js / NextAuth-style authentication**
- **Server Actions**
- **pnpm** (package manager)
- **Docker Compose** (optional)

---

## ✨ Features

- App Router–based routing (`/app`)
- Nested layouts and shared UI components
- Protected dashboard routes
- Authentication and session handling
- Server-side data fetching and mutations
- Fully typed codebase using TypeScript
- Responsive UI with Tailwind CSS
- Modular and scalable application design

---

## 🔐 Authentication Architecture

Authentication follows an **Auth.js / NextAuth-style pattern**:

- `auth.config.ts` defines providers, sessions, and secrets  
- `auth.ts` contains helper methods for session access and validation  
- `proxy.ts` acts as a middleware/proxy layer to manage authentication flow  

All routes under `/dashboard` are protected and require authentication.

---

## 📦 Installation & Dependencies

### Clone the Repository

```bash
git clone https://github.com/Abdul8081/DashBoardApp.git
cd DashBoardApp
```

### Install Dependencies
```bash
pnpm dev
```

### Open Your Browser
```bash
http://localhost:3000
```

### Build and Production
```bash
pnpm build
```

### To start the server
```bash
pnpm start
```

### 🐳 Docker Support (Optional)
If you prefer running the project using Docker:
```bash
docker compose up --build
```

### I have used podman(For this project)
Command to execute podman
```bash
sudo podman compose up
```


### 👨‍💻 Author & License

Author: Abdul Muid
GitHub: https://github.com/Abdul8081

License: MIT License
