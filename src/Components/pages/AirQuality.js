import "./Components/Css/Gases.css"
export const AirQuality = ({ airQuality = [] }) => {
    const gassName = ["CO", "NO", "O", "SO", "PM", "PM"];
    const subs = ["", "2", "3", "2", "2.5", "10"];
    const gassValue = Object.values(airQuality);

    return (<>
        <h1 style={{ margin: "0px" }} id="title"><i className='fa fa-clock' />Air Quality</h1>
        <hr style={{ marginTop: "0px", float: "left", width: "85px", height: "5px", backgroundColor: "orange", border: "none" }} />
        <br />
        <div className=" flex gasBox flex-wrap " >
            {
                gassName.map((item, index) =>
                    <div key={index} className="gases blur-background">
                        <p>
                            {item}
                            <sub>
                                {subs[index]}
                            </sub>
                        </p>
                        <h3>
                            {!isNaN(gassValue[index]) ? Math.round(gassValue[index]) : <i class="fa fa-refresh" aria-hidden="true"></i>}
                            <sub>µg/m³</sub>
                        </h3>
                    </div>

                )
            }
        </div>
    </>
    )

}