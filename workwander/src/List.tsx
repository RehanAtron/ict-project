import React, { useState } from "react";

interface Props{
  items: string[];
  headings: string;
}

function ListGroup(props: Props) {
  const [selectedIndex,setSelectedIndex] = useState(-1);
  const activeSelection = (index) => selectedIndex === index ? "list-group-item active" : "list-group-item";
  const handleClick = (index) => selectedIndex === index ? setSelectedIndex(-1) : setSelectedIndex(index)
  return (
    <>
      <h1>{props.headings}</h1>
      <ul className="list-group">
      {props.items.map((item,index) => (
          <li className={activeSelection(index)} key={item} 
          onClick={() => handleClick(index)}>
            {item}
          </li>
        ))}
      </ul>
    </>
  );
}
export default ListGroup;
