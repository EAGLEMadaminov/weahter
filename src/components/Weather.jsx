import React from "react";
import Image from "next/image";
import { useGlobalContext } from "../contex.jsx";

function Weather() {
  const { addInfo, hourlyInfo, current, currentIcon } = useGlobalContext();

  return (
    <div className=" flex w-[250px] md:w-[700px] lg:w-full flex-col   justify-center items-center mx-auto text-center">
      {addInfo.map((item, index) => {
        return (
          <div key={index}>
            <div className="flex text-white  w-[250px] md:w-[600px] lg:w-[500px] justify-between text-2xl mx-auto">
              <h1>{item.location.name}</h1>
              <div>
                {item.forecast.forecastday.map((one) => {
                  return (
                    <div key={index} className="flex">
                      <p className="mx-3">{one.date}</p>
                    </div>
                  );
                })}
              </div>
            </div>
            <div className="flex mx-auto w-[250px] md:w-[600px] justify-between items-center">
              <p className="text-[#007ACC] text-4xl">now {current} &#176;C</p>
              <Image
                src={`https:${currentIcon}`}
                width={100}
                height={50}
                alt="current-text"
              ></Image>
            </div>
          </div>
        );
      })}
      <div className="flex flex-wrap w-full justify-center">
        {hourlyInfo.map((last, index) => {
          return (
            <div
              className="text-white w-[250px] m-5  p-5 text-center bg-black/50"
              key={index}
            >
              <h3>{last.time}</h3>
              <Image
                alt={last.condition.text}
                src={`http:${last.condition.icon}`}
                width={100}
                height={50}
                className="mx-auto "
              ></Image>
              <div className="flex w-20 mx-auto justify-between">
                <p className="capitalize">{last.condition.text}</p>
                <p>{last.temp_c.toFixed(0)}&#176;C</p>
              </div>
              <div className="flex justify-between">
                <p>Hum: {last.humidity}%</p>
                <p>Wind {last.wind_mph.toFixed(0)} MPH</p>
              </div>
              <p>Feels Like {last.feelslike_c.toFixed(0)}&#176;C</p>
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default Weather;
