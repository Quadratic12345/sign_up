export default function FormField({label,id,type="text",placeholder,value,onChange}){
    return(
        <div style={{display:"flex",flexDirection:"Column",gap:5}}>
            <label htmlFor={id} style={{fontSize:14,fontWeight:500,color:"#6b7280",
                textTransform:"uppercase",letterSpace:"1px",
            }}>
                {label}
            </label>
            <input
        id={id}
        type={type}
        placeholder={placeholder}
        value={value}
        onChange={onChange}
        style={{
          height: 38, border: "0.5px solid #e5e7eb", borderRadius: 8,
          padding: "0 12px", fontSize: 14, width: "100%",
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
        </div>
    );
}