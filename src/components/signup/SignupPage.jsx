import { useState } from "react";
import SignupForm from "./SignupForm";
import SuccessState from "./SuccessState";

export default function SignupPage() {
  const [form, setForm] = useState({
    firstName: "", lastName: "", email: "", password: "",
  });
  const [submitted, setSubmitted] = useState(false);

  const onFieldChange = (key) => (e) =>
    setForm(f => ({ ...f, [key]: e.target.value }));

  const handleSubmit = () => {
    if (!form.firstName || !form.email || !form.password ) return;
    setSubmitted(true);
  };

  return (
    <div style={{
      minHeight: "100vh", display: "flex",
      alignItems: "center", justifyContent: "center",
      background: "#f5f5f7", padding: "2rem",
      fontFamily: "'DM Sans', sans-serif",
    }}>
      <div style={{
        background: "#fff", border: "0.5px solid #e5e7eb",
        borderRadius: 12, padding: "2.5rem 2rem",
        width: "100%", maxWidth: 400,
        display: "flex", flexDirection: "column", gap: 14,
      }}>

        <h1 style={{
          fontFamily: "'DM Serif Display', serif", fontSize: 22,
          fontWeight: 400, color: "#111827", margin: 0, textAlign: "center",
        }}>
          {submitted ? "Account created 🎉" : "Create your account"}
        </h1>

        {!submitted && (
          <p style={{ fontSize: 13, color: "#6b7280", textAlign: "center", margin: 0 }}>
            Already have one?{" "}
            <a href="#" style={{ color: "#4f46e5", fontWeight: 500, textDecoration: "none" }}>
              Sign in →
            </a>
          </p>
        )}

        {submitted
          ? <SuccessState />
          : <SignupForm
              form={form}
              onFieldChange={onFieldChange}
              onSubmit={handleSubmit}
            />
        }
      </div>
    </div>
  );
}