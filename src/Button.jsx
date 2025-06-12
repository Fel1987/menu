export default function Button({ className, text, onClick, isBtnActive }) {
  return (
    <button
      className={`${className} ${isBtnActive ? "active" : ""}`}
      onClick={onClick}
    >
      {text || "Default Text"}
    </button>
  );
}
