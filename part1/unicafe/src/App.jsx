import { useState } from "react";

const Text = (props) => {
  const { isHeadingOne, name } = props;

  if (isHeadingOne) {
    return (
      <>
        <h1>{name}</h1>
      </>
    );
  } else {
    return (
      <>
        <h2>{name}</h2>
      </>
    );
  }
};

const Statistics = (props) => {
  return(
      <ul>
        <li>Good: {props.data.good}</li>
        <li>Neutral: {props.data.neutral}</li>
        <li>Bad: {props.data.bad}</li>
        <li>All: {getConversion(props.data, 'total')}</li>
        <li>Average: {getConversion(props.data, 'average')}</li>
        <li>Positive: {getConversion(props.data, 'percent')}</li>
      </ul>
    )
}

const getConversion = (data, cat) => {
  if (cat === 'average'){
    const avgTotal = data.good + data.neutral + data.bad;
    if (avgTotal === 0) return 0;
    const score = data.good*1 + data.neutral*0 + data.bad*-1;
    return (score / avgTotal).toFixed(2);
  } else if (cat === 'total'){
    return data.good + data.neutral + data.bad;
  } else {
    const avgTotal = data.good + data.neutral + data.bad;
    if (avgTotal === 0) return 0;
    return (data.good / avgTotal).toFixed(2) * 100 + "%";
  }
};

const App = () => {
  const [result, setResult] = useState(
    {
      good: 0,
      neutral: 0,
      bad: 0,
    },
  );

  const setFeedback = (cat) => {
    if (cat === "good") {
      setResult({ ...result, good: result.good + 1 });
    } else if (cat === "neutral") {
      setResult({ ...result, neutral: result.neutral + 1 });
    } else {
      setResult({ ...result, bad: result.bad + 1 });
    }
  };

  const Button = (props) => {
    const { onclick, name } = props;
    return (<button onClick={onclick}>{name}</button>);
};

  return (
    <>
      <div>
        <Text
          isHeadingOne={true}
          name="Give Feedback"
        />
        <Button
          onclick={() => setFeedback("good")}
          name="good"
        />
        <Button
          onclick={() => setFeedback("neutral")}
          name="neutral"
        />
        <Button
          onclick={() => setFeedback("bad")}
          name="bad"
        />
      </div>
      <div>
        <Text
          isHeadingOne={false}
          name="Statistics"
        />
        <Statistics data={result}/>
      </div>
    </>
  );
};

export default App;
