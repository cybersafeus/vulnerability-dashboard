
import styles from '../styles/ProductSuggestions.module.css'

export default function ProductSuggestions({ filteredSuggestions, activeSuggestionIndex, onClick }) {
  return filteredSuggestions && filteredSuggestions.length ? (
    <ul className={styles.suggestions}>
      {filteredSuggestions.map((suggestion, index) => {
        return (
          <li className={index === activeSuggestionIndex ? styles['suggestion-active'] : undefined} key={suggestion.cpe23Uri} onClick={() => onClick(suggestion)}>
            {suggestion.title}
          </li>
        );
      })}
    </ul>
  ) : (
    <div className={styles['no-suggestions']}>
      <em>No suggestions, you are on your own!</em>
    </div>
  );
}
