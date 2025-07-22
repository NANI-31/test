const express = require("express");
const cookieParser = require("cookie-parser");
const jwt = require("jsonwebtoken");
const cors = require("cors");

const app = express();
const PORT = 5000;
const JWT_SECRET = "your_jwt_secret_key"; // replace with env var in prod

// Middleware
app.use(express.json());
app.use(cookieParser());

const allowedOrigins = [
  "http://localhost:5173",
  "http://192.168.29.27:5173",
  "https://test-client-p1qm.onrender.com",
];
// app.use(
//   cors({
//     origin: function (origin, callback) {
//       if (!origin || allowedOrigins.includes(origin)) {
//         callback(null, true);
//       } else {
//         callback(new Error("Not allowed by CORS"));
//       }
//     },
//     credentials: true,
//   })
// );
app.use(
  cors({
    origin: true, // dynamically reflect request origin
    credentials: true, // allow cookies (if using HTTP-only JWT)
  })
);
// Dummy user (replace with DB in real app)
const dummyUser = {
  email: "test@example.com",
  password: "password123",
  id: 1,
};

// Login route
app.post("/login", (req, res) => {
  console.log(req.body);
  const { email, password } = req.body;

  // Basic check
  if (email === dummyUser.email && password === dummyUser.password) {
    // Create JWT token
    const token = jwt.sign({ id: dummyUser.id, email }, JWT_SECRET, {
      expiresIn: "1d",
    });

    // Set token as HTTP-only cookie
    res.cookie("token", token, {
      httpOnly: true,
      secure: true, // true if HTTPS
      sameSite: "None", // or "None" if using HTTPS and cross-site
      maxAge: 24 * 60 * 60 * 1000, // 1 day
    });

    return res.json({ message: "Logged in successfully" });
  }

  res.status(401).json({ error: "Invalid credentials" });
});

// Middleware to protect routes
function authenticateToken(req, res, next) {
  const token = req.cookies.token;
  console.log(token);
  if (!token) return res.status(401).json({ error: "No token provided" });

  jwt.verify(token, JWT_SECRET, (err, user) => {
    if (err) return res.status(403).json({ error: "Invalid token" });
    req.user = user;
    next();
  });
}

// Protected route example
app.get("/protected", authenticateToken, (req, res) => {
  console.log("logged");
  res.json({ message: "This is protected data.", user: req.user });
});

app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});
