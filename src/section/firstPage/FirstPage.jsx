import React, { Component } from 'react';
import whiteCar from '../../assets/WhiteCar.png' 
import { SlArrowUpCircle, SlArrowDownCircle  } from "react-icons/sl";
import './First.css'
import CarType from '../carType/CarType';

class FirstPage extends Component {
    state = {
        isToggledAirConditioner: false,
        isToggledLongRangeVersion: false,
        isToggledCarType: true,
        carType: true
    }

    updateCarType = carType => {
        this.setState({carType: carType})
    }

    // updateIsToggledCarType = isToggledCarType => {
    //     this.setState({isToggledCarType: isToggledCarType})
    // }

    handleChangeAirC = () => {
        let {isToggledAirConditioner} = this.state

        this.setState({
            isToggledAirConditioner: !isToggledAirConditioner
        })
    }


    handleChangeVersion = () => {
        let {isToggledLongRangeVersion} = this.state

        this.setState({
            isToggledLongRangeVersion: !isToggledLongRangeVersion
        })
    }

    handleChangeCarType = () => {
        // let {isToggledCarType} = this.state

        this.setState({
            // isToggledCarType: !isToggledCarType,
            carType: false
        })
    }

    render() {
        const {isToggledAirConditioner, isToggledLongRangeVersion, isToggledCarType, carType} = this.state
        return (
            <section>
                <div className="container">

                    {
                        carType ? 
                            <div className='whiteCarBox'>

                                <img src={whiteCar} alt={whiteCar}/>

                                <div className='powerReserveAndPrice'>
                                    <div>
                                        <span>Запас хода</span>
                                        <b>750км</b>
                                    </div>

                                    <div>
                                        <span>Цена</span>
                                        <b>$89, 990</b>
                                    </div>
                                </div>

                                <div className='machineEquipmentAdjust-box'>
                                    <div className='vehicleSpeed'>

                                        <div>
                                            <span>Скорость автомобиля</span>
                                            <b>60 км/ч</b>
                                        </div>

                                        <div className='vehicleSpeed__arrow-box'>
                                            <SlArrowUpCircle />
                                            <SlArrowDownCircle />
                                        </div>
                                    </div>

                                    <div className='vehicleSpeed'>

                                        <div>
                                            <span>Температура за окнами</span>
                                            <b>20°</b>
                                        </div>

                                        <div className='vehicleSpeed__arrow-box'>
                                            <SlArrowUpCircle />
                                            <SlArrowDownCircle />
                                        </div>
                                    </div>

                                    <div className='vehicleSpeed'>
                                        <div>
                                            <span>Диски</span>
                                            <b>19</b>
                                        </div>

                                        <div className='vehicleSpeed__arrow-box'>
                                            <SlArrowUpCircle />
                                            <SlArrowDownCircle />
                                        </div>
                                    </div>

                                    <div className='toggle-box'>
                                        <span>Кондиционер</span>
                                        <div onClick={this.handleChangeAirC} className={`${isToggledAirConditioner ? 'active bg-toggle' : 'bg-toggle'}`} >
                                            <button  className='toggle-round'></button>
                                        </div>
                                    </div>

                                    <div className='toggle-box'>
                                        <span>Версия Long Range</span>
                                        <div onClick={this.handleChangeVersion} className={`${isToggledLongRangeVersion ? 'active bg-toggle' : 'bg-toggle'}`} >
                                            <button  className='toggle-round'></button>
                                        </div>
                                    </div>

                                    <div className='toggle-box'>
                                        <span>Вид автомобиля</span>
                                        <div onClick={this.handleChangeCarType} className={`${isToggledCarType ? 'active bg-toggle' : 'bg-toggle'}`} >
                                            <button className='toggle-round'></button>
                                        </div>
                                    </div>

                                </div>

                            </div> 
                        :
                        <CarType updateCarType={this.updateCarType} />
                    }

                </div>
            </section>
        );
    }
}

export default FirstPage;
