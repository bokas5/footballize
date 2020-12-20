import React, { useState, useEffect } from "react";
import {Link} from 'react-router-dom';

function Main() {
  useEffect(() => {
    fetchItems();
  }, []);

  const [items, setItems] = useState([]);
  const fetchItems = async () => {
    const data = await fetch(
      "https://fortniteapi.io/v1/items/upcoming?lang=en",
      {
        headers: {
          Authorization: "1705625ba6mshc729c27efeedca5p1ab791jsnf0cd595f1c26",
        },
      }
    );

    const items = await data.json();
    console.log(items.items);
    setItems(items.items);
  };
  return (
    <div>
      {items.map(item => (
        <h1>
            <Link to={`/shop/${item.id}`}>{item.name}</Link></h1>
      ))}
    </div>
  );
}

export default Main;
