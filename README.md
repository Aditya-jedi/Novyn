
# Novyn
=======
# Novyn Electronics E-Commerce Website

A full-stack e-commerce platform for electronics, built with React (frontend) and Node.js/Express (backend), featuring user authentication, product management, order processing, and Razorpay payment integration.

## Features

- User registration and login with JWT authentication
- Product catalog with categories and search/filter functionality
- Shopping cart and checkout process
- Order management for users and admins
- Payment processing with Razorpay
- Admin dashboard for managing products, orders, and users
- Responsive design with Material-UI

## Tech Stack

- **Frontend:** React, Vite, React Router, Material-UI, Axios
- **Backend:** Node.js, Express, MongoDB, Mongoose, JWT, bcrypt
- **Payment:** Razorpay
- **Deployment:** Ready for platforms like Heroku, Vercel, or similar

## Prerequisites

- Node.js (v14 or higher)
- MongoDB (local or Atlas)
- Razorpay account for payment integration

## Installation

1. Clone the repository:
   ```bash
   git clone <repository-url>
   cd Novyn-Electronics_E-Commerce_Website--main
   ```

2. Install dependencies for both frontend and backend:
   ```bash
   # Install root dependencies (concurrently for dev)
   npm install

   # Install backend dependencies
   cd Backend
   npm install
   cd ..

   # Install frontend dependencies
   cd Frontend
   npm install
   cd ..
   ```

3. Set up environment variables:
   - Copy `.env.example` to `.env` in the root directory
   - Fill in the required values:
     ```
     MONGO_URI=your_mongodb_connection_string
     PORT=5000
     JWT_SECRET=your_jwt_secret_here
     RAZORPAY_KEY_ID=your_razorpay_key_id
     RAZORPAY_KEY_SECRET=your_razorpay_key_secret
     ```

## Development

To run the application in development mode:
```bash
npm run dev
```
This will start both the backend server (on port 5000) and the frontend dev server (on port 5173) concurrently.

## Production Build

1. Build the frontend:
   ```bash
   npm run build
   ```

2. Start the production server:
   ```bash
   npm start
   ```
   This will serve the built frontend static files and run the backend API.

## Deployment

### Option 1: Heroku

1. Create a Heroku app
2. Set environment variables in Heroku dashboard
3. Deploy using Heroku CLI or connect to GitHub for automatic deploys

### Option 2: Vercel (for frontend) + Heroku (for backend)

1. Deploy frontend to Vercel:
   - Build command: `npm run build`
   - Output directory: `dist`
   - Set API base URL to your backend URL

2. Deploy backend to Heroku or similar platform

### Option 3: Single Server Deployment

For platforms like DigitalOcean, AWS, etc.:
1. Build the frontend
2. Start the backend server
3. Configure reverse proxy (nginx) to serve the app

## API Endpoints

- `GET /` - API status
- `POST /api/users/register` - User registration
- `POST /api/users/login` - User login
- `GET /api/products` - Get all products
- `POST /api/orders` - Create order
- And more... (see routes for full list)

## Contributing

1. Fork the repository
2. Create a feature branch
3. Make your changes
4. Test thoroughly
5. Submit a pull request

## License

ISC

