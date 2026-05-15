export default function SubmitButton({ onClick, label = "Create account" }) {
  return (
    <button
      type="button"
      onClick={onClick}
      style={{
        height: 42, background: "#1a1a2e", color: "#fff",
        border: "none", borderRadius: 8, fontSize: 14,
        fontWeight: 500, fontFamily: "inherit",
        cursor: "pointer", width: "100%",
        display: "flex", alignItems: "center",
        justifyContent: "center", gap: 8,
        transition: "opacity 0.15s, transform 0.1s",
      }}
      onMouseEnter={e => e.currentTarget.style.opacity = "0.88"}
      onMouseLeave={e => e.currentTarget.style.opacity = "1"}
      onMouseDown={e => e.currentTarget.style.transform = "scale(0.98)"}
      onMouseUp={e => e.currentTarget.style.transform = "scale(1)"}
    >
      → {label}
    </button>
  );
}