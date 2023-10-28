import { useSelector } from "react-redux";
import useCurrentInfo from "../../Hook/useCurrentInfo";
import { Link } from "react-router-dom";
import "./CurrentPage.css";
import Cards from "../Cards";
import Gases from "../Gases";
import ApiErrorResponse from "./ApiErrorResponse";
import ServerIssue from "./ServerIssue";

const CurrentPage = () => {
    // Get the place from the Redux store using useSelector
    const place = useSelector(state => state.placename);
    // Fetch current weather data using the custom hook
    const data = useCurrentInfo(place);
    // Extract relevant data from the fetched data
    const placeAndDate = data&&data.location;
    const currentInfo = data && data.current;
    const todayAstro = data.forecast && data.forecast.forecastday[0].astro;
    // Check for error responses
    if (data === "invalidSearch") {

        return <ApiErrorResponse />;
    } else if (data === 'err' || data.length === 0) {
        return <ServerIssue />;
    } 
    
    else {

        // If data is valid, update local storage with the place name and render the content
        localStorage.clear();
        localStorage.setItem('placename', placeAndDate && placeAndDate.name);

        return (
            <div className='main flex flex-wrap'>
                <div id="current_info" className="flex">
                    <div className='flex flex-wrap date_place'>
                        <span>{placeAndDate && placeAndDate.name}, {placeAndDate && placeAndDate.region}</span>
                        <span>{placeAndDate && placeAndDate.localtime}</span>
                    </div>
                    <div id="temparature">
                        <h1 style={{ margin: "0" ,fontSize:"3em"}}>{!isNaN(currentInfo && currentInfo.temp_c) ? Math.round(currentInfo && currentInfo.temp_c) : <i className="fa fa-refresh" aria-hidden="true"></i>}<small><sup>o</sup>C</small></h1>
                        
                    </div>
                    <div>
                        <h5 style={{ margin: "0", fontSize: "1.3rem" }}>FeelsLike: {!isNaN(currentInfo && currentInfo.feelslike_c) ? Math.round(currentInfo && currentInfo.feelslike_c) : <i className="fa fa-refresh" aria-hidden="true"></i>}<small><sup>o</sup>C</small></h5>
                        <h5 style={{ margin: "0", fontSize: "1.3rem" }}>{currentInfo.condition && currentInfo.condition.text} <img src={`http:${(currentInfo.condition && currentInfo.condition.icon)}`} alt="cond_icon"/></h5>
                    </div>
                    <div className="flex flex-wrap blur-background iconDiv">
                        <Cards titel='Precipitation' unit="in" value={currentInfo && currentInfo.precip_in} img='https://cdn-icons-png.flaticon.com/512/10760/10760499.png' />
                        <Cards titel='Humidity' unit="%" value={currentInfo && currentInfo.humidity} img='https://cdn-icons-png.flaticon.com/512/10576/10576292.png' />
                        <Cards titel='Pressure' unit="mb" value={currentInfo && currentInfo.pressure_mb} img="https://cdn-icons-png.flaticon.com/512/10760/10760594.png" />
                        <Cards titel='Wind Speed' unit="km/h" value={currentInfo && currentInfo.wind_kph} img='https://cdn-icons-png.flaticon.com/512/10760/10760557.png' />
                        <Cards titel='Wind Direction' unit="" value={currentInfo && currentInfo.wind_dir} img='https://cdn-icons-png.flaticon.com/512/7571/7571529.png' />
                    </div>
                    <div>
                        <Link to='/Forecast'><button>Forecast</button></Link>
                    </div>
                </div>
                <div id="current_additional_info">
                    <div className='flex flex-wrap blur-background iconDiv'>
                        <Cards titel='Fahrenheit (°F)' img='https://cdn-icons-png.flaticon.com/512/10591/10591196.png' value={currentInfo && currentInfo.temp_f} unit={`°F`} />
                        <Cards titel='UV' img='https://cdn-icons-png.flaticon.com/512/8117/8117332.png?uid=R118862986' value={currentInfo && currentInfo.uv} unit='' />
                        <Cards titel='Sunrise' img='https://cdn-icons-png.flaticon.com/512/8996/8996185.png' value={todayAstro && todayAstro.sunrise} unit='' />
                        <Cards titel='Sunset' img='https://cdn-icons-png.flaticon.com/512/10760/10760550.png?uid=R118862986' value={todayAstro && todayAstro.sunset} unit='' />
                    </div>
                    <Gases airQuality={currentInfo && currentInfo.air_quality} />
                </div>
            </div>
        );
    }
};
export default CurrentPage