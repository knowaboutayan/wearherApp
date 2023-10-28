import { useSelector } from "react-redux";
import ForeCastCards from "../ForeCastCards";
import ApiErrorResponse from "./ApiErrorResponse";
import ServerIssue from "./ServerIssue";
import useCurrentInfo from "../../Hook/useCurrentInfo";


const ForeCastPage = () => {
    const place = useSelector(state => state.placename)
    console.log(place)
    const data = useCurrentInfo(place, 5);
    console.log(data)
    const currentLocation = data && data.location;
    const forecastData = data.forecast && data.forecast.forecastday
    if (data === "invalidSearch") {
     
        return <ApiErrorResponse />;
    } else if (data === 'err' || data.length === 0) {
    
        return <ServerIssue />;
    }
    else {
     
        // If data is valid, update local storage with the place name and render the content
        localStorage.clear();
        console.log(place)
        localStorage.setItem('placename', currentLocation && currentLocation.name);
        return (

            <div >
                <div className='flex flex-wrap date_place' style={{ margin: "10px" }}>
                    <span>{currentLocation && currentLocation.name},{currentLocation && currentLocation.region}</span>
                    <span> {currentLocation && currentLocation.localtime}</span>
                </div>
                <h1 style={{ margin: "0px" }} id="title"><i className='fa fa-clock' />5-Days ForeCast</h1>
                <hr style={{ marginTop: "0px", float: "left", width: "85px", height: "5px", backgroundColor: "orange", border: "none" }} />
                <br />
                <div className='flex flex-wrap' style={{ justifyContent: "space-around" }}>
                    {
                        forecastData && forecastData.map((item = [], index) =>
                            <ForeCastCards key={index} forecastInfo={item} />
                        )
                    }


                </div>
            </div>
        )
    }
}
export default ForeCastPage;