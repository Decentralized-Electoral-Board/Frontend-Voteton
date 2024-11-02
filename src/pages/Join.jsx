import React from 'react';
import styles from './join.module.css';
import data from "../components/joinData.json"
import { useNavigate } from 'react-router-dom';



export default function Join() {
  const navigate = useNavigate()

  function handleCategory(){
    navigate("./cat")
  }
  const { electionName, categories } = data;

  return (
    <div className={styles.joinContainer}>
      <h3>{electionName}</h3>
      <p>Categories (Select the category you want to participate in):</p>
      <ul className={styles.categoryList}>
        {categories.map((category, index) => (
          <button onClick={handleCategory} key={index} className={styles.categoryItem}>
            {category}
          </button >
        ))}
      </ul>
    </div>
  );
}

