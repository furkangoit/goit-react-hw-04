import { useState } from 'react';
import styles from './SearchBar.module.css';
import { toast } from 'react-hot-toast';

function SearchBar({ onSubmit }) {
  const [query, setQuery] = useState('');

  const handleChange = e => setQuery(e.target.value);

  const handleSubmit = e => {
    e.preventDefault();
    if (query.trim() === '') {
      toast.error('Resim aramak için metin girmelisiniz!');
      return;
    }
    onSubmit(query.trim());
    setQuery('');
  };

  return (
    <header className={styles.header}>
      <form className={styles.form} onSubmit={handleSubmit}>
        <input
          className={styles.input}
          type="text"
          autoComplete="off"
          autoFocus
          placeholder="Search images and photos"
          value={query}
          onChange={handleChange}
        />
        <button className={styles.button} type="submit">
          Search
        </button>
      </form>
    </header>
  );
}

export default SearchBar;