import "./HeaderComponent.css";

const HeaderComponent = () => {
  return (
    <>
      <div className="banner">
        <div>
          <h4>" HEADER "</h4>
        </div>
        <section className="color-pallet">
          <div style={{ backgroundColor: "yellow" }}></div>
          <div style={{ backgroundColor: "pink" }}></div>
          <div style={{ backgroundColor: "blue" }}></div>
          <div style={{ backgroundColor: "purple" }}></div>
          <div style={{ backgroundColor: "green" }}></div>
          <div style={{ backgroundColor: "orange" }}></div>
          <div style={{ backgroundColor: "lightpink" }}></div>
          <div style={{ backgroundColor: "lightblue" }}></div>
        </section>
      </div>
    </>
  );
};

export default HeaderComponent;
