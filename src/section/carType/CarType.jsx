import React, { Component } from "react";
import SaloonBlack from "../../assets/SaloonBlack.png";
import SaloonWhite from "../../assets/SaloonWhite.png";
import SaloonB2A69A from "../../assets/SaloonB2A69A.png";

import "./CarType.css";
class CarType extends Component {
  constructor() {
    super();
    this.state = {
      isToggledCarType: false,
      blackColor: false,
      whiteColor: false,
      B2A69AColor: false
    };
  }

  blackColorBtn = () => {
    this.setState({
      blackColor: true,
      whiteColor: false,
      B2A69AColor: false
    });
  };

  whiteColorBtn = () => {
    this.setState({
      whiteColor: true
    });
  };

  B2A69AColorBtn = () => {
    this.setState({
      B2A69AColor: true,
      blackColor: false,
      whiteColor: false
    });
  };

//   handleChangeCarType = () => {
//     let { isToggledCarType } = this.state;
//     this.setState({
//       isToggledCarType: !isToggledCarType,
//     });
//   };
  
  render() {
    let { isToggledCarType, whiteColor, B2A69AColor } =
      this.state;

    return (
      <div className="whiteCarBox">

        {whiteColor === true ? 
          <img src={SaloonWhite} alt={SaloonWhite} />
         : B2A69AColor === true ? 
          <img src={SaloonB2A69A} alt={SaloonB2A69A} />
         : 
          <img width={414} src={SaloonBlack} alt={SaloonBlack} />
        }

        <div className="powerReserveAndPrice">
          <div>
            <span>Запас хода</span>
            <b>750км</b>
          </div>

          <div>
            <span>Цена</span>
            <b>$89, 990</b>
          </div>
        </div>

        <div className="machineEquipmentAdjust-box" style={{ gap: "70px" }}>
          <div className="vehicleSpeed">
            <div>
              <span>Цвет салона</span>

              <div className="colorCircle-box">
                <button
                  onClick={this.blackColorBtn}
                  className="blackColorBtn"
                ></button>
                <button
                  onClick={this.whiteColorBtn}
                  className="whiteColorBtn"
                ></button>
                <button
                  onClick={this.B2A69AColorBtn}
                  className="B2A69AColorBtn"
                ></button>
              </div>
            </div>
          </div>

          <div className="toggle-box">
            <span>Вид автомобиля</span>

            <div
              onClick={() => this.props.updateCarType(true)}
              className={`${
                isToggledCarType ? "active bg-toggle" : "bg-toggle"
              }`}
            >
              <button className="toggle-round"></button>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default CarType;