import FormField from "./FormField";
import PasswordField from "./PasswordField";
import SubmitButton from "./SubmitButton";
import SocialButtons from "./SocialButtons";

export default function SignupForm({ form, agreed, onFieldChange, onAgreeChange, onSubmit }) {
  const divider = (
    <div style={{ display: "flex", alignItems: "center", gap: 10, fontSize: 12, color: "#9ca3af" }}>
      <span style={{ flex: 1, height: 0, borderTop: "0.5px solid #e5e7eb" }} />
      or continue with
      <span style={{ flex: 1, height: 0, borderTop: "0.5px solid #e5e7eb" }} />
    </div>
  );

  return (
    <div style={{ display: "flex", flexDirection: "column", gap: 14 }}>
      <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 10 }}>
        <FormField
          label="First name" id="fn" placeholder="Alex"
          value={form.firstName} onChange={onFieldChange("firstName")}
        />
        <FormField
          label="Last name" id="ln" placeholder="Morgan"
          value={form.lastName} onChange={onFieldChange("lastName")}
        />
      </div>

      <FormField
        label="Email" id="em" type="email"
        placeholder="alex@company.com"
        value={form.email} onChange={onFieldChange("email")}
      />

      <PasswordField value={form.password} onChange={onFieldChange("password")} />

      <SubmitButton onClick={onSubmit} />

      {divider}

      <SocialButtons />
    </div>
  );
}