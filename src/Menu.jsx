import MenuItem from "./MenuItem";

function Menu({ items }) {
  return (
    <ul className="section-center">
      {items.map((menuItem) => (
        <MenuItem key={menuItem.id} {...menuItem} />
      ))}
    </ul>
  );
}

export default Menu;
