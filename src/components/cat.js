import React, { useState } from 'react';

const Category = () => {
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
    <div>
    <h1>Category</h1>
      <form onSubmit={handleSubmit}>
        <div>
          <label>Name:</label>
          <input
            type="text"
            name="name"
            value={formData.name}
            onChange={handleInputChange}
          />
        </div>

        <div style={{ marginTop: '10px' }}>
          <label>Description:</label>
          <textarea
            name="description"
            value={formData.description}
            onChange={handleInputChange}
          />
        </div>

        <div style={{ marginTop: '10px' }}>
          <label>Photo:</label>
          <input type="file" accept="image/*" onChange={handlePhotoChange} />
          {formData.photoPreview && (
            <div style={{ marginTop: '10px' }}>
              <img
                src={formData.photoPreview}
                alt="Preview"
                style={{ width: '100px', height: '100px', objectFit: 'cover' }}
              />
            </div>
          )}
        </div>

        <button type="submit" style={{ marginTop: '20px' }}>Submit</button>
      </form>
    </div>
  );
};

export default Category;
