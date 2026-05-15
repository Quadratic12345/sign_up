export default function SuccessState() {
  return (
    <div style={{
      display: "flex", flexDirection: "column",
      alignItems: "center", textAlign: "center",
      padding: "1rem 0", gap: 10,
    }}>
      <span style={{ fontSize: 44 }}></span>
      <h3 style={{
        fontFamily: "'DM Serif Display', serif",
        fontSize: 20, fontWeight: 400,
        color: "#111827", margin: 0,
      }}>
        You're all set!
      </h3>
      <p style={{ fontSize: 13, color: "#6b7280", margin: 0 }}>
        Welcome aboard. Check your inbox to verify your email.
      </p>
    </div>
  );
}