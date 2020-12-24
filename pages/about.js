import Layout from "../components/Layout/Layout";
import styles from "../styles/About.module.css";

const About = ({ team }) => {
  return (
    <Layout>
      <div className={styles.container}>
        <h1>About</h1>
        <p>
          This a demo project for CTIS 478 - Advanced Web Technologies course.
        </p>
        <h1>Team Members</h1>
        <ul>
          {team.map((member) => {
            return (
              <li>
                <h3>{member.name}</h3>
              </li>
            );
          })}
        </ul>
      </div>
    </Layout>
  );
};

export default About;

// Get all the data at the build time
export const getStaticProps = async () => {
  return {
    props: {
      team: [
        { name: "Berk Özdoruk" },
        { name: "Oğuzhan Özkan" },
        { name: "Sinan Işık" },
      ],
    },
  };
};
