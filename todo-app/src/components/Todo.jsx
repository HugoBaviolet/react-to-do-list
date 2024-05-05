import { useState } from "react";

const Todo = () => {
  const [inputValue, setInputValue] = useState("");
  const [items, setItems] = useState([]);
  const [editIndex, setEditIndex] = useState(null);

  function handleOnChange() {
    setInputValue(event.target.value);
  }

  function handleClick() {
    if (inputValue.trim() !== "") {
      setItems([...items, inputValue]);
      setInputValue("");
    }
  }
  function handleDelete(index) {
    const updatedItems = items.filter((_, i) => i !== index);
    setItems(updatedItems);
  }

  function handleEdit(index) {
    setEditIndex(index); // Set the index of the item being edited
    setInputValue(items[index]); // Set the input value to the current item's value
  }

  function handleSave() {
    if (inputValue.trim() !== "") {
      const updatedItems = [...items];
      updatedItems[editIndex] = inputValue;
      setItems(updatedItems);
      setInputValue(""); // Clear the input value
      setEditIndex(null); // Reset editIndex
    }
  }

  return (
    <div>
      <h2>To Do List!</h2>
      <input
        type="text"
        value={inputValue}
        onChange={handleOnChange}
        placeholder="What to do!"
      />
      <button onClick={handleClick}>Add</button>
      <ul>
        {items.map((i, index) => (
          <li key={index}>
            {editIndex === index ? (
              <>
                <input
                  type="text"
                  value={inputValue}
                  onChange={handleOnChange}
                />
                <button onClick={handleSave}>Save</button>
              </>
            ) : (
              <>
                {i}
                <button onClick={() => handleEdit(index)}>Change</button>
                <button onClick={() => handleDelete(index)}>Delete</button>
              </>
            )}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Todo;
