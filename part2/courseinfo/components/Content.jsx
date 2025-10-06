import Header from "./Header";
import Part from "./Parts";
import Total from "./Total";

const Content = ({ course }) => {
  return (
    <>
    <Header title={course.name}/>
      {course.parts.map((part) => (
        <Part key={part.id} part={part} />
      ))}
    <Total parts={course.parts}/>
    </>
  );
};

export default Content;