
import Cards from "./Cards";
import Gases from "./Gases";
import "./Css/ForeCastCards.css";

import { useState } from "react";

const ForeCastCards = ({ forecastInfo = {}, key = [] }) => {
    const forecastDate = new Date(forecastInfo && forecastInfo.date);
    const dayName = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday']
    console.log(forecastInfo && forecastInfo)
    const [showGases, setShowGases] = useState(false);
    return (
        
        <>
            <div className="forecastBox blur-background flex flex-wrap">
                <div className="flex" id="box1">
                    <div >
                        <h5 style={{ margin: "0" }}><main>{forecastDate.getDate()}.{forecastDate.getMonth()+1}.{forecastDate.getFullYear()}</main>{dayName[forecastDate.getDay()]}</h5>
                    </div>
                    <div id="forecastCondition" className="flex">
                        <img src={`http:${forecastInfo && forecastInfo.day.condition.icon}`} alt="condi" />
                        <h4 style={{ margin: "0", color: "#494949" }}>{forecastInfo && forecastInfo.day.condition.text}</h4>
                    </div>
                </div>
                <div className="flex flex-wrap" id="tempBox">
                    <div id="forTemp">
                        <img src="https://cdn-icons-png.flaticon.com/512/10760/10760536.png" width={'80px'} style={{ minWidth: "60px" }} alt="temp" />
                        <h1>                           Avg:{forecastInfo && forecastInfo.day.avgtemp_c}<small><sup>o</sup>C</small>
                        </h1>

                        <h5> Max:{forecastInfo && forecastInfo.day.maxtemp_c}<small><sup>o</sup>C</small></h5>
                        <h5> Min:{forecastInfo && forecastInfo.day.mintemp_c}<small><sup>o</sup>C</small></h5>
                    </div>
                    <div className="flex flex-wrap blur-background" id="cardBox">

                        <Cards titel='Precipitation' unit="in" value={forecastInfo && forecastInfo.day.totalprecip_in} img='https://cdn-icons-png.flaticon.com/512/10760/10760499.png' />
                        <Cards titel='humidity' unit="%" value={forecastInfo && forecastInfo.day.avghumidity} img='https://cdn-icons-png.flaticon.com/512/10576/10576292.png' />
                        <Cards titel='wind speed' unit="km/h" value={forecastInfo && forecastInfo.day.maxwind_kph
                        } img='https://cdn-icons-png.flaticon.com/512/10760/10760557.png' />
                        <Cards titel='UV' img='https://cdn-icons-png.flaticon.com/512/8117/8117332.png?uid=R118862986' value={forecastInfo && forecastInfo.day.uv} unit='' />
                        <Cards titel='Sunrise' img='https://cdn-icons-png.flaticon.com/512/8996/8996185.png' value={forecastInfo && forecastInfo.astro.sunrise} unit='' />
                        <Cards titel='sunset' img='https://cdn-icons-png.flaticon.com/512/10760/10760550.png?uid=R118862986' value={forecastInfo && forecastInfo.astro.sunset} unit='' />

                    </div>
                    <div>
                    </div>
                </div>

                <h5 style={{ textAlign: "right", cursor: "pointer" }} onClick={() => setShowGases(!showGases)}>AirQuality {!showGases ? <i class="fa fa-chevron-circle-down" aria-hidden="true"></i> : <i class="fa fa-chevron-circle-up" aria-hidden="true"></i>}</h5>

                <div id="Gases">
                    {showGases && <Gases key={key} airQuality={forecastInfo && forecastInfo.day.air_quality} />}
                </div>
            </div>
        </>
    )

}
export default ForeCastCards;
