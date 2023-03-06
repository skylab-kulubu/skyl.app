import { useRef, useState } from "react";
import "./Filter.css";

const Filter = (props) => {
  const dropdown = useRef();
  const [selectedCategory, setSelectedCategory] = useState("Tümü");
  return (
    <div className="dropdown">
      <span
        onClick={() => {
          dropdown.current.style.display =
            dropdown.current.style.display === "block" ? "" : "block";
        }}
      >
        {selectedCategory}{" "}
        <img src={process.env.PUBLIC_URL + "/images/arrow-down.png"} />
      </span>
      <div className="dropdown-content" ref={dropdown}>
        <ul>
          {props.categories.map((category) => {
            return (
              <li
                key={category}
                onClick={() => {
                  props.onFilter(category, setSelectedCategory);
                  dropdown.current.style.display = "";
                }}
              >
                {category}
              </li>
            );
          })}
        </ul>
      </div>
    </div>
  );
};
export default Filter;
