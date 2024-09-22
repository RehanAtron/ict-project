import ListGroup from "./List.tsx";

function App() {
  return (
    <div>
      <h1>
        <ListGroup
          items={["Rehan Ahmed", "Naveeda Raheel"]}
          headings="Project Owners"
        />
        <ListGroup
          headings="Subjects"
          items={["Focp", "Ict", "Func Eng", "Pre maths 1", "Pre maths 2"]}
        />
      </h1>
    </div>
  );
}

export default App;
