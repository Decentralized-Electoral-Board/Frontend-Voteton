import React, { useState } from "react";
import styles from "./create.module.css";
import { useNavigate } from "react-router-dom";

// import { useNavigate } from 'react-router-dom';

const categoryOptions = [
  "President",
  "Vice President",
  "Director of Sports",
  "Director of Socials",
  "Director of Games",
  "Secretary General",
];

export default function Create() {
  const navigate = useNavigate()

  function handleCreate(){
    navigate("/homepage/create/success")
  }

  const [formData, setFormData] = useState({
    name: "",
    categories: [""],
    duration: "",
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({ ...prevData, [name]: value }));
  };

  const handleCategoryChange = (index, value) => {
    const updatedCategories = formData.categories.map((cat, i) =>
      i === index ? value : cat,
    );
    setFormData((prevData) => ({ ...prevData, categories: updatedCategories }));
  };

  const addCategory = () => {
    setFormData((prevData) => ({
      ...prevData,
      categories: [...prevData.categories, ""],
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (
      formData.name &&
      formData.duration &&
      formData.categories.every((cat) => cat)
    ) {
      console.log("Form submitted:", formData);
      setFormData({
        name: "",
        categories: [""],
        duration: "",
      });
    } else {
      alert("Please fill out all fields.");
    }
  };

  return (
    <div className={styles.formContainer}>
      <h1>Create Election</h1>
      <form onSubmit={handleSubmit}>
        <div className={styles.inputGroup}>
          <label className={styles.label}>Name:</label>
          <input
            type="text"
            name="name"
            value={formData.name}
            onChange={handleInputChange}
            className={styles.input}
            required
          />
        </div>

        <div className={styles.inputGroup}>
          {formData.categories.map((category, index) => (
            <div key={index} >
              <div className={styles.categoryContainer}>
              <label className={styles.label}>{`Add Categories needed`}</label>
              <button
                type="button"
                onClick={addCategory}
                className={styles.addCategory}
              >
                +
              </button>
              </div>
              <select
                value={category}
                onChange={(e) => handleCategoryChange(index, e.target.value)}
                className={styles.input}
                required
              >
                <option value="" disabled>
                  Select a category
                </option>
                {categoryOptions.map((option) => (
                  <option key={option} value={option}>
                    {option}
                  </option>
                ))}
              </select>
            </div>
          ))}
        </div>

        <div className={styles.inputGroup}>
          <label className={styles.label}>Duration:</label>
          <input
            type="text"
            name="duration"
            value={formData.duration}
            onChange={handleInputChange}
            className={styles.input}
            required
          />
        </div>

        <button type="submit" className={styles.buttonStyle} onClick={handleCreate}>
          Submit
        </button>
      </form>
    </div>
  );
}
