import React, { useState } from "react";
import axios from "../hooks/axiosConfig";

export default function App() {
  const [email, setEmail] = useState("test@example.com");
  const [password, setPassword] = useState("password123");
  const [message, setMessage] = useState("");
  const [protectedData, setProtectedData] = useState(null);

  const handleLogin = async (e) => {
    e.preventDefault();
    setMessage("");
    setProtectedData(null);

    try {
      console.log(email, password);
      const res = await axios.post("/login", { email, password });
      setMessage(res.data.message);
    } catch (err) {
      setMessage(err.response?.data?.error || "Login failed");
    }
  };

  const getProtectedData = async () => {
    setMessage("");
    try {
      const res = await axios.get("/protected");
      setProtectedData(res.data);
    } catch (err) {
      setMessage(err.response?.data?.error || "Failed to fetch protected data");
    }
  };

  return (
    <div className="min-h-screen bg-gray-100 dark:bg-gray-900 flex flex-col items-center justify-center p-6">
      <form
        onSubmit={handleLogin}
        className="bg-white dark:bg-gray-800 p-6 rounded shadow-md w-full max-w-sm mb-6"
      >
        <h2 className="text-2xl font-bold mb-4 text-gray-900 dark:text-gray-100">
          Login
        </h2>

        <label className="block mb-2">
          Email:
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="mt-1 block w-full p-2 border rounded dark:bg-gray-700 dark:border-gray-600"
            required
          />
        </label>

        <label className="block mb-4">
          Password:
          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            className="mt-1 block w-full p-2 border rounded dark:bg-gray-700 dark:border-gray-600"
            required
          />
        </label>

        <button
          type="submit"
          className="w-full bg-blue-600 hover:bg-blue-700 text-white py-2 rounded transition"
        >
          Login
        </button>
      </form>

      {message && (
        <p className="mb-4 text-red-600 dark:text-red-400">{message}</p>
      )}

      <button
        onClick={getProtectedData}
        className="bg-green-600 hover:bg-green-700 text-white py-2 px-4 rounded mb-4"
      >
        Get Protected Data
      </button>

      {protectedData && (
        <pre className="bg-gray-200 dark:bg-gray-700 text-gray-900 dark:text-gray-100 p-4 rounded max-w-md whitespace-pre-wrap">
          {JSON.stringify(protectedData, null, 2)}
        </pre>
      )}
    </div>
  );
}
