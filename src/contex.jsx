import axios from "axios";
import React, { useContext, useState } from "react";

const AppContext = React.createContext(null);
const url = `https://api.weatherapi.com/v1/forecast.json?key=${process.env.NEXT_PUBLIC_WEATHER_KEY}&q=`;

const Approvider = ({ children }) => {
  const [city, setCity] = useState("");
  const [loading, setLoading] = useState(false);
  const [choosen, setChoosen] = useState(false);
  const [addInfo, setAddInfo] = useState([]);
  const [hourlyInfo, setHourlyInfo] = useState([]);
  const [current, setCurrent] = useState("");
  const [currentIcon, setCurrentIcon] = useState("");

  //    submit
  const handleSubmit = (e) => {
    e.preventDefault();
    setChoosen(true);
    let setUrl = `${url}${city}&days=1&aqi=no&alerts=no`;
    getAllData(setUrl);
    setCity(null);
  };
  //   get data by url
  const getAllData = async (url) => {
    setLoading(true);

    try {
      const { data } = await axios.get(url);
      setAddInfo([data]);
      setCurrent(data.current.temp_c.toFixed(0));
      setCurrentIcon(data.current.condition.icon);
      setHourlyInfo(data.forecast.forecastday[0].hour);
    } catch (error) {
      console.log(error);
    }
    setLoading(false);
  };

  return (
    <AppContext.Provider
      value={{
        setCity,
        loading,
        handleSubmit,
        hourlyInfo,
        current,
        currentIcon,
        addInfo,
      }}
    >
      {children}
    </AppContext.Provider>
  );
};

export const useGlobalContext = () => {
  return useContext(AppContext);
};

export { AppContext, Approvider };
