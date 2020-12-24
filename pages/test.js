const Test = ({ hours, minutes, seconds }) => {
  return (
    <div>
      <h1>Hello, this is CTIS 478</h1>
      <p>{`${hours}:${minutes}:${seconds}`}</p>
    </div>
  );
};

export default Test;

// Add some content that will be evaluated at the build time
export const getStaticProps = () => {
  var timeNow = new Date();
  var hours = timeNow.getHours();
  var minutes = timeNow.getMinutes();
  var seconds = timeNow.getSeconds();
  return {
    props: {
      hours,
      minutes,
      seconds,
    },
  };
};
