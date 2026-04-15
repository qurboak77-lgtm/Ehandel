"use client";

import { useState } from "react";
import Header from "../../components/Header";
import { useAuth } from "../../components/Providers";

export default function AccountPage() {
  const { user, login, logout, register } = useAuth();
  const [mode, setMode] = useState<"login" | "register">("login");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [message, setMessage] = useState("");

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    if (mode === "login") {
      const result = login(email, password);
      setMessage(result ? "Inloggning lyckades." : "Fel e-post eller lösenord.");
    } else {
      const result = register(email, password);
      setMessage(result ? "Konto skapat och inloggad." : "Konto finns redan eller ogiltig e-post.");
    }
  };

  return (
    <main>
      <Header />
      <div className="form-card" style={{ maxWidth: "540px", margin: "2rem auto" }}>
        <h1 className="section-title">Mitt konto</h1>

        {user ? (
          <div>
            <p>Inloggad som <strong>{user.email}</strong>.</p>
            <button className="button" onClick={logout}>Logga ut</button>
          </div>
        ) : (
          <>
            <div style={{ display: "flex", gap: "1rem", marginBottom: "1.5rem" }}>
              <button className="button" style={{ flex: 1 }} onClick={() => setMode("login")}>Logga in</button>
              <button className="button" style={{ flex: 1 }} onClick={() => setMode("register")}>Registrera</button>
            </div>
            <form onSubmit={handleSubmit} className="input-group">
              <label htmlFor="email">E-post</label>
              <input id="email" type="email" value={email} onChange={(event) => setEmail(event.target.value)} required />

              <label htmlFor="password">Lösenord</label>
              <input id="password" type="password" value={password} onChange={(event) => setPassword(event.target.value)} required />

              <button className="button" type="submit">{mode === "login" ? "Logga in" : "Registrera"}</button>
            </form>
            {message && <p style={{ marginTop: "1rem" }}>{message}</p>}
          </>
        )}
      </div>
    </main>
  );
}
