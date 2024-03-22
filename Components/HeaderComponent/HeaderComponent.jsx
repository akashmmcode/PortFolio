import "./HeaderComponent.css";

const HeaderComponent = () => {
  return (
    <>
      <div className="banner">
        <div className="print-details">
          <h3>"All the news</h3>
          <h3>thats fit to print"</h3>
        </div>
        <div className="heading-div">
          <h4 className="heading">AKASH.MM</h4>
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

        <div className="horizontal-line"></div>
      <div className="band-details">
          <h4 className="heading-details">VOL.CXIX.. No.59,417</h4>
          <h4 className="heading-details">BANGALORE,THURSDAY,MARCH 23,2024</h4>
          <h4 className="heading-details">$0.00</h4>
      </div>
        <div className="horizontal-line"></div>
    </>
  );
};

export default HeaderComponent;
