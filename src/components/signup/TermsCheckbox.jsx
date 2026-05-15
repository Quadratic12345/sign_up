export default function TermsCheckbox({ checked, onChange }) {
  return (
    <label style={{
      display: "flex", alignItems: "flex-start",
      gap: 8, fontSize: 12, color: "#6b7280", lineHeight: 1.5,
    }}>
      <input
        type="checkbox"
        checked={checked}
        onChange={onChange}
        style={{
          marginTop: 2, accentColor: "#4f46e5",
          flexShrink: 0, width: 14, height: 14,
        }}
      />
      I agree to the{" "}
      <a href="#" style={{ color: "#4f46e5", textDecoration: "none" }}>Terms of Service</a>
      {" "}and{" "}
      <a href="#" style={{ color: "#4f46e5", textDecoration: "none" }}>Privacy Policy</a>
    </label>
  );
}