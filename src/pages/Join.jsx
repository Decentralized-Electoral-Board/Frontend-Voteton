import React from 'react';
import styles from './join.module.css';
import data from "../components/joinData.json"


export default function Join() {
  const { electionName, categories } = data;

  return (
    <div className={styles.joinContainer}>
      <h3>{electionName}</h3>
      <p>Categories (Select the category you want to participate in):</p>
      <ul className={styles.categoryList}>
        {categories.map((category, index) => (
          <li key={index} className={styles.categoryItem}>
            {category}
          </li>
        ))}
      </ul>
    </div>
  );
}

