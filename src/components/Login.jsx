import React, { useState } from "react";

function Login() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const handleLogin = () => {
    // Panggil API FakeStoreAPI untuk otentikasi
    fetch("https://fakestoreapi.com/auth/login", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        username: username,
        password: password,
      }),
    })
      .then((response) => response.json())
      .then((data) => {
        if (data.token) {
          alert("Success Login");
          window.location.href = "/user   ";
        } else {
          alert("Login gagal. Silakan cek kembali username dan password Anda.");
        }
      })
      .catch((error) => {
        console.error("Terjadi kesalahan:", error);
      });
  };

  const handleLogout = () => {
    setUsername("");
    setPassword("");
  };

  return (
    <div className="App">
        <div className="flex justify-center items-center h-screen">
          <div className="w-1/3 p-8 shadow-lg rounded-md">
            <h2 className="text-3xl mb-6">Login</h2>
              <input
                type="text"
                placeholder="Username"
                className="shadow my-2 px-4 py-2 w-full rounded-md"
                value={username}
                onChange={(e) => setUsername(e.target.value)}
              />
              <input
                type="password"
                placeholder="Password"
                className="shadow my-2 px-4 py-2 w-full rounded-md"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
              <button
                onClick={handleLogin}
                className="bg-blue-500 my-4 text-white py-2 px-4 rounded-md"
              >
                Login
              </button>
          </div>
        </div>
    </div>
  );
}

export default Login;
