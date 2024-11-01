import React, { useState } from 'react';
import styles from './create.module.css';
// import { useNavigate } from 'react-router-dom';


export default function Create() {

  const [formData, setFormData] = useState({
    name: '',
    categories: [''],
    duration: ''
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({ ...prevData, [name]: value }));
  };

  const handleCategoryChange = (index, value) => {
    const updatedCategories = formData.categories.map((cat, i) =>
      i === index ? value : cat
    );
    setFormData((prevData) => ({ ...prevData, categories: updatedCategories }));
  };

  const addCategory = () => {
    setFormData((prevData) => ({
      ...prevData,
      categories: [...prevData.categories, '']
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (formData.name && formData.duration && formData.categories.every(cat => cat)) {
      console.log('Form submitted:', formData);
      setFormData({
        name: '',
        categories: [''],
        duration: ''
      });
    } else {
      alert('Please fill out all fields.');
    }
  };

  return (
    <div className={styles.formContainer}>
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
            <div key={index} className={styles.categoryContainer}>
              <label className={styles.label}>{`Category ${index + 1}:`}</label>
              <input
                type="text"
                value={category}
                onChange={(e) => handleCategoryChange(index, e.target.value)}
                className={styles.input}
                required
              />
            </div>
          ))}
          <button type="button" onClick={addCategory} className={styles.buttonStyle}>
            Add Category
          </button>
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

        <button type="submit" className={styles.buttonStyle} >
          Submit
        </button>
      </form>
    </div>
  );
}
