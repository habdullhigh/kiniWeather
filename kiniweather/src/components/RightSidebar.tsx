import { currentWeatherurl, apiKey, iconUrl } from "./api";
import { useState, useEffect } from "react";

export default function Rightsidebar({ onSearch }: { onSearch: string } = { onSearch: 'nigeria' }) {
  const [days, setDays] = useState<any[]>([]); // Initial state as an empty array

  async function getDays() {
    try {
      const response = await fetch(`${currentWeatherurl}${onSearch}/next7days?unitGroup=metric&key=${apiKey}&contentType=json`);
      const responseData = await response.json();
      if (responseData && responseData.days) {
        setDays(responseData.days);
        console.log('gotten days')
      } else {
        console.log('Values not found');
      }
    } catch (error) {
      console.error('Error fetching data:', error);
    }
  }

  useEffect(() => {
    getDays();
    console.log('initial value set') // Fetch data when the component mounts
  }, [onSearch]); // Re-fetch if onSearch changes

  return (
    <div className="rightsidebar my-4 text-white border-solid border-2 border-white rounded-lg">
      <h3 className="py-5">7 Day Forecast</h3>
      <div className="rightsidediv flex flex-row space-x-4">
        <p className="flex flex-row space-x-5">
          Today's <img src={days[0]?.icon ? `${iconUrl}/${days[0].icon}.svg` : "#"} alt={days[0]?.icon || "weather-icon"} />
        </p>
        <p>{days[0]?.temp !== undefined ? `${days[0].temp}°C` : 'N/A'}</p>
      </div>
      <div className="rightsidediv flex flex-row space-x-4">
        <p className="flex flex-row space-x-5">
          Tomorrow <img src={days[1]?.icon ? `${iconUrl}/${days[1].icon}.svg` : "#"} alt={days[1]?.icon || "weather-icon"} />
        </p>
        <p>{days[1]?.temp !== undefined ? `${days[1].temp}°C` : 'N/A'}</p>
      </div>
      <div className="rightsidediv flex flex-row space-x-4">
        <p className="flex flex-row space-x-5">
          {days[2]?.datetime || '3 days'} <img src={days[2]?.icon ? `${iconUrl}/${days[2].icon}.svg` : "#"} alt={days[2]?.icon || "weather-icon"} />
        </p>
        <p>{days[2]?.temp !== undefined ? `${days[2].temp}°C` : 'N/A'}</p>
      </div>
      <div className="rightsidediv flex flex-row space-x-4">
        <p className="flex flex-row space-x-5">
          {days[3]?.datetime || '4 days'} <img src={days[3]?.icon ? `${iconUrl}/${days[3].icon}.svg` : "#"} alt={days[3]?.icon || "weather-icon"} />
        </p>
        <p>{days[3]?.temp !== undefined ? `${days[3].temp}°C` : 'N/A'}</p>
      </div>
      <div className="rightsidediv flex flex-row space-x-4">
        <p className="flex flex-row space-x-5">
          {days[4]?.datetime || '5 days'} <img src={days[4]?.icon ? `${iconUrl}/${days[4].icon}.svg` : "#"} alt={days[4]?.icon || "weather-icon"} />
        </p>
        <p>{days[4]?.temp !== undefined ? `${days[4].temp}°C` : 'N/A'}</p>
      </div>
      <div className="rightsidediv flex flex-row space-x-4">
        <p className="flex flex-row space-x-5">
          {days[5]?.datetime || '6 days'} <img src={days[5]?.icon ? `${iconUrl}/${days[5].icon}.svg` : "#"} alt={days[5]?.icon || "weather-icon"} />
        </p>
        <p>{days[5]?.temp !== undefined ? `${days[5].temp}°C` : 'N/A'}</p>
      </div>
      <div className="rightsidediv flex flex-row space-x-4">
        <p className="flex flex-row space-x-5">
          {days[6]?.datetime || '7 days'} <img src={days[6]?.icon ? `${iconUrl}/${days[6].icon}.svg` : "#"} alt={days[6]?.icon || "weather-icon"} />
        </p>
        <p>{days[6]?.temp !== undefined ? `${days[6].temp}°C` : 'N/A'}</p>
      </div>
    </div>
  );
}
