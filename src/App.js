const Pet = ({ name, animal, breed }) => {
  return React.createElement("div", {}, [
    React.createElement("h1", {}, name),
    React.createElement("h2", {}, animal),
    React.createElement("h2", {}, breed),
  ]);
};

const App = () => {
  return React.createElement("div", { id: "app" }, [
    React.createElement("h1", {}, "Adopt Me!"),
    React.createElement(Pet, {
      id: "pet1",
      name: "Dog 1",
      animal: "Dog",
      breed: "Hello Dog 1",
    }),
    React.createElement(Pet, {
      name: "Cat 1",
      animal: "Cat",
      breed: "Hello Cat 1",
    }),
    React.createElement(Pet, {
      name: "Bird 1",
      animal: "Bird",
      breed: "Hello Bird 1",
    }),
  ]);
};

ReactDOM.render(React.createElement(App), document.getElementById("root"));
