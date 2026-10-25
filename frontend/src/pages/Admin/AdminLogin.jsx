
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./AdminLogin.css";

function AdminLogin() {
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const [error, setError] = useState("");
    const [loading, setLoading] = useState(false);

    const navigate = useNavigate();

    const handleLogin = async (e) => {
        e.preventDefault();

        setError("");
        setLoading(true);

        try {
            const response = await fetch(
                "http://localhost:8081/api/admin/login",
                {
                    method: "POST",
                    headers: {
                        "Content-Type": "application/json",
                    },
                    body: JSON.stringify({
                        username,
                        password,
                    }),
                }
            );

            const data = await response.text();

            if (!response.ok) {
                throw new Error(
                    data || "Invalid username or password"
                );
            }

            // The backend returns the JWT as plain text.
            const token = data.trim();

            if (!token) {
                throw new Error("Login succeeded, but no token was returned.");
            }

            // Save JWT and login state.
            localStorage.setItem("adminToken", token);
            localStorage.setItem("adminLoggedIn", "true");

            // Open the admin dashboard.
            navigate("/admin");

        } catch (error) {
            setError(error.message || "Login failed");
        } finally {
            setLoading(false);
        }
    };

    return (
        <div className="admin-login-page">
            <div className="admin-login-card">

                <div className="admin-login-header">
                    <h1>Al-Hadi Tours</h1>
                    <p>Admin Panel</p>
                </div>

                <form onSubmit={handleLogin}>

                    <div className="login-field">
                        <label>Username</label>
                        <input
                            type="text"
                            placeholder="Enter username"
                            value={username}
                            onChange={(e) =>
                                setUsername(e.target.value)
                            }
                            required
                        />
                    </div>

                    <div className="login-field">
                        <label>Password</label>
                        <input
                            type="password"
                            placeholder="Enter password"
                            value={password}
                            onChange={(e) =>
                                setPassword(e.target.value)
                            }
                            required
                        />
                    </div>

                    {error && (
                        <div className="login-error">
                            {error}
                        </div>
                    )}

                    <button
                        type="submit"
                        className="admin-login-button"
                        disabled={loading}
                    >
                        {loading ? "Logging in..." : "Login"}
                    </button>

                </form>

            </div>
        </div>
    );
}

export default AdminLogin;
