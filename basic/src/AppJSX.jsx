import "./App.css";

function AppJSX() {
  const list = ["우유", "딸기", "바나나"];
  return (
    <>
      <h1>연습공간입니다.</h1>
      <ul>
        {list.map((items) => (
          <li> {items}</li>
        ))}
        {list.map((items) => {
          return <li> {items}</li>;
        })}
        {list.map(function (items) {
          return <li> {items}</li>;
        })}
      </ul>
    </>
  );
}

export default AppJSX;
