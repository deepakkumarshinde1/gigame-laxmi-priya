const List = (props) => {
  let { list, text } = props; // destructuring
  return (
    <>
      <ul>
        {list.map((value, index) => {
          return (
            <li key={index}>
              {value.title}, age is {value.age}
            </li>
          );
        })}
      </ul>
      <p>{text}</p>
    </>
  );
};

export default List;
