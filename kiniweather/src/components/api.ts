export const apiKey = `UWSSKWB7HCNXTGTCCA3XNJL5C`
export const currentWeatherurl = `https://weather.visualcrossing.com/VisualCrossingWebServices/rest/services/timeline/`

export const iconUrl = `https://raw.githubusercontent.com/visualcrossing/WeatherIcons/58c79610addf3d4d91471abbb95b05e96fb43019/SVG/1st%20Set%20-%20Color`


/**import { useEffect, useState } from 'react';
import { currentWeatherurl, apiKey, iconUrl } from './api';

export const Rightsidebar = ( {onSearch}:{onSearch:string}) => {
  const [forecastData, setForecastData] = useState<any[]>([]);

  async function getData() {
    try {
      const response = await fetch(
        `${currentWeatherurl}${onSearch}/next7days?unitGroup=metric&key=${apiKey}&contentType=json`
      );
      const responseData = await response.json();
      console.log('gotten 7 days data')
      return responseData;
    } catch (error) {
      console.error('Error fetching data:', error);
    }
  }

  async function getDays() {
    const responseData = await getData();

    if (responseData && responseData.days) {
      setForecastData(responseData.days);
    } else {
      console.error('No data available');
    }
  }

  useEffect(() => {
    getDays();
  }, [onSearch]);

  return (
    <div className="rightsidebar my-4 text-white border-solid border-2 border-white rounded-lg">
      <h3 className="py-5">7 Day Forecast</h3>
      {forecastData.map((day, index) => (
        <div key={index} className="rightsidediv flex flex-row space-x-4">
          <p className="flex flex-row space-x-5">
            {index === 0
              ? "Today's"
              : index === 1
              ? "Tomorrow"
              : `${index + 1} days`}
            <img src={`${iconUrl}/${day.icon}.svg`} alt={day.icon} />
          </p>
          <p>{day.temp}°C</p>
        </div>
      ))}
    </div>
  );
}; */



