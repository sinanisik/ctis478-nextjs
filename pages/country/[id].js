import Layout from "../../components/Layout/Layout";
import styles from "./Country.module.css";

const Country = ({ country }) => {
  return (
    <Layout title={country.name}>
      <div className={styles.container}>
        <div className={styles.flag}>
          <img src={country.flag} alt={country.name} />
        </div>

        <div className={styles.countryName}>
          <div className={styles.value}>{country.name}</div>
        </div>
        <div className={styles.field}>
          <div className={styles.label}>Region</div>
          <div className={styles.value}>{country.region}</div>
        </div>
        <br />
        <div className={styles.field}>
          <div className={styles.label}>Population</div>
          <div className={styles.value}>{country.population}</div>
        </div>
        <br />
        <div className={styles.field}>
          <div className={styles.label}>Area</div>
          <div className={styles.value}>{country.area}</div>
        </div>
      </div>
    </Layout>
  );
};

export default Country;

// pre-render at request time. If the population is updated every second, every minite or every day.
// This data does not need to be updated that often.
// Time to first byte will be slower than getStaticProps.
// Server must compute the result on every request
// export const getServerSideProps = async ({ params }) => {
//   const res = await fetch(
//     `https://restcountries.eu/rest/v2/alpha/${params.id}`
//   );

//   const country = await res.json();

//   return {
//     props: {
//       country: country,
//     },
//   };
// };

export const getStaticPaths = async () => {
  const res = await fetch("https://restcountries.eu/rest/v2/all");
  const countries = await res.json();

  const paths = countries.map((country) => {
    return {
      params: {
        id: country.alpha3Code,
      },
    };
  });

  return {
    paths,
    fallback: false, // return 404 not found for every other route
  };
};

// To be able to use getStaticProps with dynamic routes we should use getStaticPaths function.
// We should define a list of paths that have to be rendered to HTML at build time.
export const getStaticProps = async ({ params }) => {
  const res = await fetch(
    `https://restcountries.eu/rest/v2/alpha/${params.id}`
  );

  const country = await res.json();

  return {
    props: {
      country: country,
    },
  };
};
