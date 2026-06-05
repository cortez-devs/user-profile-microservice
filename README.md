# User Profile Microservice

A lightweight microservice for creating, retrieving, updating, and deleting user profiles.
Designed for microservice‑based applications where each service handles a single responsibility.

This service stores profile data in a local JSON file and exposes a simple REST API for other services to consume.

---

# 🚀 Features
- Create a new user profile
- Retrieve an existing profile
- Update profile fields (including avatar URL)
- Delete a profile
- Simple JSON‑based storage
- Fully RESTful API design
- Easy to integrate with authentication or image microservices

# 📦 Installation

Clone the repository:

`git clone https://github.com/cortez-devs/user-profile-microservice.git`
`cd user-profile-microservice`

Install Dependencies:
`npm install`

Start Server:
`npm start`

Microservice will run at:
`https://localhost:3002`

# 🛠 API Endpoints

All profile operations use the /profiles base route.

➕ Create Profile
POST /profiles

Body Example:
`{
  "userId": "12345",
  "name": "Cristo Cortez",
  "email": "cristo@example.com",
  "avatarUrl": "https://example.com/avatar.png"
}`
