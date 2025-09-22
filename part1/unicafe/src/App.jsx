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
      </ul>
    )
}

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
