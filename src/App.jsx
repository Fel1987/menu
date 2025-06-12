import { useState, useCallback } from "react";
import menu from "./data";
import Title from "./Title";
import Menu from "./Menu";
import Button from "./Button";
import Categories from "./Categories";

const categoriesArray = [
  "all",
  ...new Set(menu.map((category) => category.category)),
];

const App = () => {
  const [menuItems, setMenuItems] = useState(menu);
  const [categories, setCategories] = useState(categoriesArray);
  const [category, setCategory] = useState("all");

  const filteredArray =
    category === "all"
      ? menuItems
      : menuItems.filter((item) => item.category === category);

  function handleCategory(category) {
    setCategory(category);
  }

  return (
    <main>
      <section className="menu">
        <Title text="our menu" />

        <Categories>
          {categories.map((categoryItem) => (
            <Button
              key={categoryItem}
              className="btn"
              text={categoryItem}
              onClick={() => handleCategory(categoryItem)}
              isBtnActive={categoryItem === category}
            />
          ))}
        </Categories>
        <Menu items={filteredArray} />
      </section>
    </main>
  );
};
export default App;
