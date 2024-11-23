import React, { useState } from "react";

const List = () => {
  const [items, setItems] = useState<string[]>([]); // Array to store list items
  const [inputValue, setInputValue] = useState<string>(""); // Input field value

  const addItem = () => {
    if (inputValue.trim() !== "") {
      setItems([...items, inputValue.trim()]);
      setInputValue(""); // Clear input field
    }
  };

  const removeItem = (index: number) => {
    const updatedItems = items.filter((_, i) => i !== index);
    setItems(updatedItems);
  };

  return (
    <div className="max-w-md p-4 mx-auto border rounded">
      <h1 className="mb-4 text-2xl font-bold">Todo App</h1>
      <div className="flex items-center mb-4">
        <input
          type="text"
          className="w-full p-2 border border-gray-400 rounded"
          placeholder="Add a new item"
          value={inputValue}
          onChange={(e) => setInputValue(e.target.value)}
        />
        <button
          className="p-2 ml-2 text-white bg-blue-500 rounded"
          onClick={addItem}
        >
          Add
        </button>
      </div>
      <ul className="pl-5 list-disc">
        {items.map((item, index) => (
          <li key={index} className="flex items-center justify-between mb-2">
            <span>{item}</span>
            <button
              className="px-2 py-1 text-white bg-red-500 rounded"
              onClick={() => removeItem(index)}
            >
              Remove
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default List;
