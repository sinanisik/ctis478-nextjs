import styles from "./SearchInput.module.css";

const SearchInput = ({ ...args }) => {
  return (
    <div className={styles.wrapper}>
      <input className={styles.input} placeholder="Search by name" {...args} />
    </div>
  );
};

export default SearchInput;
