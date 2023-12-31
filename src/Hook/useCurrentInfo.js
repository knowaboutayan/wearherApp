import { useEffect, useState, useCallback } from "react";

const useCurrentInfo = (placeName = "", day = 1) => {
    const [currentData, setCurrentData] = useState([]);

    //     useEffect(() => {
    //         // Use the useEffect hook to perform data fetching when placeName changes
    //         fetch(`https://api.weatherapi.com/v1/forecast.json?key=8782075e635f4382bc521854232210&q=${placeName}&days=${day}&aqi=yes&alerts=no`)
    //             .then((response) => {
    //                 if (!response.ok) {
    //                     return 'invalidSearch';
    //                 }
    //                 else {

    //                     return response.json()
    //                 }
    //             })
    //             .then((response) => {
    //                 // If the response is successful, clear local storage and set the placeName
    //                 if (response.error && (response.erroe.code === 1006)) {
    //                     return 'err'
    //                 }
    //                 else {
    //                     return setCurrentData(response);
    //                 }
    //             })
    //             .catch((err) => {

    //                 return 'err';
    //             });
    //     },[placeName,day]);
    //     return currentData;
    // };

    useEffect(() => {
        async function fetchData() {
            try {
                console.log()
                const response = await fetch(`https://api.weatherapi.com/v1/forecast.json?key=8782075e635f4382bc521854232210&q=${placeName}&days=${day}&aqi=yes&alerts=no`);
                if (!response.ok) return 'err';

                const fetchData = await response.json();
                setCurrentData(fetchData)

            }
            catch (error) {
                return 'err';
            }

        }
        fetchData();
    }, [placeName, day]
    )
    return currentData
    // return currentData;
}
export default useCurrentInfo;
