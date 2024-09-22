function ListGroup() {
  const projectOwners = ["Rehan Ahmed", "Naveeda Raheel"];
  return (
    <>
      <h1>Project Owners</h1>
      {projectOwners.length !== 2 ? (
        <p>Error Found</p>
      ) : (
        <ul className="list-group">
          {projectOwners.map((item) => (
            <li
              className="list-group-item"
              key={item}
              onClick={() => console.log(item)}
            >
              {item}
            </li>
          ))}
        </ul>
      )}
    </>
  );
}
export default ListGroup;
