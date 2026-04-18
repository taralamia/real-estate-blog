# 🏡 Real Estate Blog - Full Stack App
![GitHub license](https://img.shields.io/github/license/Sk-Azraf-Sami/hands-on-volunteering-platform)
![GitHub last commit](https://img.shields.io/github/last-commit/taralamia/real-estate-blog)
![GitHub repo size](https://img.shields.io/github/repo-size/taralamia/real-estate-blog)
![GitHub contributors](https://img.shields.io/github/contributors/taralamia/real-estate-blog)
![GitHub pull requests](https://img.shields.io/github/issues-pr/taralamia/real-estate-blog)
![GitHub top language](https://img.shields.io/github/languages/top/taralamia/real-estate-blog)
## 📌 Project Overview

A full-stack real estate blog application where users can view and create property blog posts.

**Live Demo:** [Frontend](https://real-estate-blog-coral.vercel.app) | [API](https://real-estate-blog-20qs.onrender.com/api)
## ✅ Key Features

| Feature | Description |
|---------|-------------|
| View posts | Responsive grid layout of all blog posts |
| Single post | Detailed view of individual posts |
| Create post | Form to add new posts (title, description, image URL) |
| Responsive UI | Works on mobile + desktop |
| REST API | Full CRUD operations |
## 🛠️ Tech Stack

| Layer | Technologies |
|-------|--------------|
| Frontend | React, Vite, TypeScript, Axios, React Router |
| Backend | Node.js, Express, TypeScript, PostgreSQL |
| DevOps | Docker, Render (backend), Vercel (frontend) |
## 🔌 API Endpoints

| Method | Endpoint | Description |
|--------|----------|-------------|
| GET | `/api/posts` | Get all posts |
| GET | `/api/posts/:id` | Get single post |
| POST | `/api/posts` | Create new post |
## 🚀 Quick Start

```bash
# Clone
git clone https://github.com/taralamia/real-estate-blog.git

# Backend
cd backend
npm install
# Create .env with DATABASE_URL
npm run dev

# Frontend (new terminal)
cd frontend
npm install
# Create .env with VITE_API_URL
npm run dev
```
## 📊 Project Status
✅ Complete - All assessment requirements fulfilled
## 🔜 Future Improvements
- JWT authentication

- Image upload (vs URL)

- Edit/Delete posts

- Pagination
## 📝 License

This project is licensed under the MIT License.

