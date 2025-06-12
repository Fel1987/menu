import MenuItem from "./MenuItem";

export default function Menu({ items }) {
  return (
    <ul className="section-center">
      {items.map((menuItem) => (
        <MenuItem key={menuItem.id} {...menuItem} />
      ))}
    </ul>
  );
}
