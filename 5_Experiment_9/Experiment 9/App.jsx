const { useState, useEffect } = React;

function App() {
  return (
    <div
      style={{
        border: "2px solid black",
        padding: "20px",
        width: "700px",
        margin: "20px auto",
        borderRadius: "10px",
        textAlign: "center",
        fontFamily: "Arial"
      }}
    >
      <h1
        style={{
          color: "brown",
          marginBottom: "30px"
        }}
      >
        Product Showcase
      </h1>

      <div
        style={{
          display: "flex",
          justifyContent: "center",
          gap: "20px",
          flexWrap: "wrap"
        }}
      >

        <div
          style={{
            backgroundColor: "lightblue",
            padding: "20px",
            borderRadius: "10px",
            border: "2px solid blue",
            width: "180px"
          }}
        >
          <h2>Wireless Mouse</h2>
          <p>Price:799</p>
          <p>Category: Electronics</p>
        </div>

        <div
          style={{
            backgroundColor: "lightgreen",
            padding: "20px",
            borderRadius: "10px",
            border: "2px solid green",
            width: "180px"
          }}
        >
          <h2>Running Shoes</h2>
          <p>Price:2499</p>
          <p>Category: Footwear</p>
        </div>

        <div
          style={{
            backgroundColor: "pink",
            padding: "20px",
            borderRadius: "10px",
            border: "2px solid red",
            width: "180px"
          }}
        >
          <h2>Smart Watch</h2>
          <p>Price:3999</p>
          <p>Category: Gadgets</p>
        </div>

      </div>
    </div>
  );
}
