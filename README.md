# User Profile Microservice

A lightweight microservice for creating, retrieving, updating, and deleting user profiles.
Designed for microservice‑based applications where each service handles a single responsibility.

This service stores profile data in a local JSON file and exposes a simple REST API for other services to consume.

---

## 🚀 Features
- Create a new user profile
- Retrieve an existing profile
- Update profile fields (including avatar URL)
- Delete a profile
- Simple JSON‑based storage
- Fully RESTful API design
- Easy to integrate with authentication or image microservices

---

## 📦 Installation

Clone the repository:

```bash
git clone https://github.com/cortez-devs/user-profile-microservice.git
cd user-profile-microservice
```

Install Dependencies:
```bash
npm install
```

Start Server:
```bash
npm start
```

Microservice will run at:
```code
https://localhost:3002
```
---

# 🛠 API Endpoints

All profile operations use the /profiles base route.

## ➕ Create Profile

**POST /profiles**

Request Body Example:
```json
{
  "userId": "12345",
  "name": "John Doe",
  "email": "johndoe@example.com",
  "avatarUrl": "https://example.com/avatar.png"
}
```
Response:
```json
{
  "message": "Profile created successfully",
  "profile": {...}
}
```

## 📄 Get Profile

**GET /profiles/:userId**

Example:
```code
GET /profiles/12345
```
Response:
```json
{
  "userId": "12345",
  "name": "John Doe",
  "email": "johndoe@example.com",
  "avatarurl": "https://example.com/avatar.png"
}
```

## ✏️ Update Profile

**PUT /profiles/:userId**

Body Example (partial or full update):
```json
{
  "name": "Updated Name",
  "avatarUrl": "https://new-image-url.com/avatar.png"
}
```
Response:
```json
{
  "message": "Profile updated successfully",
  "profile": { ... }
}
```
