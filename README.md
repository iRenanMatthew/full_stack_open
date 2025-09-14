# Full Stack Open – Repository Guide

This repo contains my solutions, notes, and projects for the [Full Stack Open](https://fullstackopen.com/) course.
Each part has its own folder, and subfolders contain exercises or apps.

---

## 📂 Folder Structure
```
full\_stack\_open/
│── part0/        # Basics of web apps
│   └── notes/
│
│── part1/        # React basics
│   ├── courseinfo/
│   ├── unicafe/
│   └── anecdotes/
│
│── part2/        # Communicating with server
│   ├── phonebook/
│   └── countries/
│
│── part3/        # Node.js and Express server
│   └── phonebook-backend/
│
│── .../
└── README.md
```
---

## 🔄 Updating the Repository

**Always work in `develop` first.** Once exercises are final and tested, merge into `main` for submission.

1. Switch to develop:
   git checkout develop
   git pull origin develop

2. Add and commit changes:
   git add .
   git commit -m "Part 2: Completed Phonebook step 7"
   git push origin develop

3. Merge into main when final:
   git checkout main
   git pull origin main
   git merge develop
   git push origin main

---

## 📝 Notes

* Keep each part in its own folder (`part0`, `part1`, etc.)
* Use descriptive commit messages
* Run `git status` often to check changes
