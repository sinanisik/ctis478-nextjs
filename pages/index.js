import { useState } from "react";
import Layout from "../components/Layout/Layout";
import SearchInput from "../components/SearchInput/SearchInput";
import styles from "../styles/Home.module.css";
import CountriesTable from "../components/CountriesTable/CountriesTable";

export default function Home({ countries }) {
  const [name, setName] = useState("");
  const filteredCountries = countries.filter((country) => {
    return country.name.toLowerCase().includes(name);
  });

  const onInputChange = (e) => {
    e.preventDefault();
    setName(e.target.value.toLowerCase());
  };
  return (
    <Layout title={"Home Page"}>
      <div>Total countries: {countries.length}</div>
      <SearchInput onChange={onInputChange} />
      <CountriesTable countries={filteredCountries} />
    </Layout>
  );
}

// Get all the data at the build time
export const getStaticProps = async () => {
  const res = await fetch("https://restcountries.eu/rest/v2/all");
  const countries = await res.json();

  return {
    props: {
      countries: countries,
    },
  };
};
