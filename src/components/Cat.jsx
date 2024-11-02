import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import styles from './cat.module.css';

export default function Cat() {
  const navigate = useNavigate();

  function handleJoin() {
    navigate("/homepage/create/success");
  }

  const [formData, setFormData] = useState({
    name: '',
    description: '',
    photo: null,
    photoPreview: null,
  });

  // Handle change for text inputs
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  // Handle photo upload and display preview
  const handlePhotoChange = (e) => {
    const file = e.target.files[0];
    setFormData({
      ...formData,
      photo: file,
      photoPreview: URL.createObjectURL(file),
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Submit form data logic
    console.log(formData);
  };

  return (
    <div className={styles.container}>
      <h1 className={styles.heading}>Category</h1>
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
          <label className={styles.label}>Description:</label>
          <textarea
            name="description"
            value={formData.description}
            onChange={handleInputChange}
            className={`${styles.input} ${styles.textarea}`}
            required
          />
        </div>

        <div className={styles.inputGroup}>
          <label className={styles.label}>Photo:</label>
          <input
            type="file"
            accept="image/*"
            onChange={handlePhotoChange}
            className={styles.input}
            required
          />
          {formData.photoPreview && (
            <div className={styles.photoPreview}>
              <img
                src={formData.photoPreview}
                alt="Preview"
              />
            </div>
          )}
        </div>

        <button
          onClick={handleJoin}
          type="submit"
          className={styles.button}
        >
          Submit
        </button>
      </form>
    </div>
  );
}
