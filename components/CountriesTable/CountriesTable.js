import styles from "./CountriesTable.module.css";
import Link from "next/link";

const CountriesTable = ({ countries }) => {
  return (
    <div>
      <div className={styles.heading}>
        <button className={styles.heading_name}>
          <div>Name</div>
        </button>
        <button className={styles.heading_flag}>
          <div>Flag</div>
        </button>
      </div>
      {countries.map((country) => {
        return (
          <Link href={`/country/${country.alpha3Code}`}>
            <div className={styles.row}>
              <div className={styles.name}>{country.name}</div>
              <div className={styles.flag}>
                <img src={country.flag}></img>
              </div>
            </div>
          </Link>
        );
      })}
      {/* Built-in styled-jsx, library built by the same people with Next.js */}
      {/* Scoped CSS, which is great for maintainability because the CSS is only affecting the component it’s applied to. */}
      {/* <style jsx>{`
        img {
          width: 50%;
        }
      `}</style>
      ; */}
    </div>
  );
};

export default CountriesTable;
