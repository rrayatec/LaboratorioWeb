import React, { useState } from "react";
import { Carousel } from "react-bootstrap";

function Sandwiches({ data }) {
  const [index, setIndex] = useState(0);

  const handleSelect = (selectedIndex, e) => {
    setIndex(selectedIndex);
    try {
      console.log(e.target.ariaLabel.replace("Slide ", ""));
    } catch {}
  };

  return (
    <Carousel
      variant="dark"
      id={index}
      activeIndex={index}
      onSelect={handleSelect}
      keyboard={true}
    >
      {data.map((a) => (
        <Carousel.Item interval={2000}>
          <img
            className="d-block w-100"
            src="https://picsum.photos/100/100?random=1"
            alt="First slide"
          />
          <Carousel.Caption>
            <h3>{a.name}</h3>
            <p>{a.company.catchPhrase}</p>
          </Carousel.Caption>
        </Carousel.Item>
      ))}
    </Carousel>
  );
}

export default Sandwiches;
