import { useState } from "react";

export default function PasswordField({ value, onChange }) {
  const [visible, setVisible] = useState(false);

  return (
    <div style={{ display: "flex", flexDirection: "column", gap: 5 }}>
      <label htmlFor="pw" style={{
        fontSize: 12, fontWeight: 500, color: "#6b7280",
        textTransform: "uppercase", letterSpacing: "0.5px",
      }}>
        Password
      </label>
      <div style={{ position: "relative" }}>
        <input
          id="pw"
          type={visible ? "text" : "password"}
          placeholder="Min. 8 characters"
          value={value}
          onChange={onChange}
          style={{
            height: 38, border: "0.5px solid #e5e7eb", borderRadius: 8,
            padding: "0 38px 0 12px", fontSize: 14, width: "100%",
            boxSizing: "border-box", outline: "none", fontFamily: "inherit",
          }}
          onFocus={e => {
            e.target.style.borderColor = "#4f46e5";
            e.target.style.boxShadow = "0 0 0 3px rgba(79,70,229,0.12)";
          }}
          onBlur={e => {
            e.target.style.borderColor = "#e5e7eb";
            e.target.style.boxShadow = "none";
          }}
        />
        <button
          type="button"
          onClick={() => setVisible(v => !v)}
          aria-label="Toggle password visibility"
          style={{
            position: "absolute", right: 10, top: "50%",
            transform: "translateY(-50%)", background: "none",
            border: "none", cursor: "pointer", fontSize: 16,
            color: "#9ca3af", display: "flex", alignItems: "center", padding: 0,
          }}
        >
        </button>
      </div>
    </div>
  );
}