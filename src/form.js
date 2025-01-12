import { useState } from "react";

export default function Formm() {
  const [isToggled, setIsToggled] = useState(false);
  const values = [10000, 50000, 100000, 500000, 1000000];
  const [range, satrange] = useState(values[0]);
  const formatValue = (value) => {
    if (value >= 1000000) {
      return `${value / 1000000}m`;
    } else if (value >= 1000) {
      return `${value / 1000}k`;
    } else {
      return value;
    }
  };
  const move = () => {
    setIsToggled(!isToggled);
  };

  let price = (range) => {
    if (range === 10000) {
      return 8;
    } else if (range === 50000) {
      return 12;
    } else if (range === 100000) {
      return 16;
    } else if (range === 500000) {
      return 24;
    } else {
      return 36;
    }
  };
  return (
    <div className="box">
      <div className="d-lg-flex   justify-content-evenly align-items-center py-3">
        <h4
          style={{ fontSize: "16px", color: " hsl(227, 35%, 25%)" }}
          className="text-center "
        >
          {formatValue(range)} Pageviews
        </h4>
        <h2 className="d-none d-lg-inline ">$ {price(range)}/month</h2>
      </div>

      <input
        className="custom-range"
        type="range"
        min="0"
        max={values.length - 1} // أعلى قيمة هي آخر فهرس في المصفوفة
        step="1"
        value={values.indexOf(range)}
        onChange={(e) => {
          const newValue = Number(e.target.value);
          satrange(values[newValue]);
        }}
      />
      <h2 className="d-lg-none d-block text-center py-3">
        $ {price(range)}/month
      </h2>
      <div className="d-flex align-items-center py-4 text-center justify-content-evenly">
        <div style={{ display: "flex" }}>
          <p style={{ marginTop: "0" }}> Monthly Billing</p>
          <button onClick={move} className={`toggel ${isToggled ? "ac" : ""}`}>
            <div className={`div ${isToggled ? "active" : ""}`}></div>
          </button>{" "}
        </div>
        <div className="d-flex align-items-center justify-content-evenly ">
          <p> Yearly Billing </p>
          <p
            className="d-flex"
            style={{
              backgroundColor: "hsl(14, 92%, 95%)",
              padding: "10px",
              color: "hsl(15, 100%, 70%)",
              marginLeft: "10px",
            }}
          >
            <span>25% </span>
            <span className="d-lg-block d-none">discount</span>
          </p>
        </div>
      </div>
      <hr />
      <div className="d-lg-flex  align-items-center py-4 text-center  text-lg-start ">
        <ul>
          <li>
            {" "}
            <img src="img/icon-check.svg" />
            Unlimited websites
          </li>
          <li>
            {" "}
            <img src="img/icon-check.svg" />
            100% data ownership
          </li>
          <li>
            <img src="img/icon-check.svg" /> Email reports
          </li>
        </ul>
        <button className="buttonn"> Start my trial</button>
      </div>
    </div>
  );
}
