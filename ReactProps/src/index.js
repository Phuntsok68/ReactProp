import React from "react";
import ReactDOM from "react-dom";

function Card(props) {
  //  return  (<div>
  //   <h1>Beyonce</h1>
  //  <img
  //  src="https://cdn.britannica.com/59/204159-050-5055F2A9/Beyonce-2013.jpg"
  //  alt=""
  // />
  // <p>91334343</p>
  // </div>)
  return (
    <div className="my-style">
      <h1>{props.name}</h1>
      <img src={props.img} alt="" />
      <p>{props.email}</p>
      <p>{props.phone}</p>
    </div>
  );
}

ReactDOM.render(
  <div>
    {/* The code is repetitive */}
    {/* <h1>Beyonce</h1>
    <img
      src="https://cdn.britannica.com/59/204159-050-5055F2A9/Beyonce-2013.jpg"
      alt=""
    />
    <p>91334343</p>
    <h1>Beyonce</h1>
    <img
      src="https://cdn.britannica.com/59/204159-050-5055F2A9/Beyonce-2013.jpg"
      alt=""
    />
    <p>91334343</p> */}

    <Card
      name="Beyonce"
      img="https://cdn.britannica.com/59/204159-050-5055F2A9/Beyonce-2013.jpg"
      email="beyonce@gmail"
      phone="+1 9393893849"
    />
    <Card
      name="Elon Musk"
      img="https://www.investopedia.com/thmb/XJDLdvCuNbcWk_EVZzXx84ae82c=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/GettyImages-1258889149-1f50bb87f9d54dca87813923f12ac94b.jpg"
      email="elon@yahoo"
      phone="+1 3839389389"
    />
  </div>,
  document.getElementById("root")
);
