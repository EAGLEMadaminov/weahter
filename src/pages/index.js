import Head from "next/head";
import Image from "next/image";
import { useGlobalContext } from "../contex.jsx";
import Weather from "../components/Weather.jsx";

export default function Home() {
  const { setCity, loading, handleSubmit, addInfo, city } = useGlobalContext();
  if (loading) {
    return (
      <div className="bg-[#1c1717]  flex w-[100vw] justify-center items-center  h-[100vh]  mx-auto">
        <div className="text-center">
          <b>l</b>
          <b>o</b>
          <b>a</b>
          <b>d</b>
          <b>i</b>
          <b>n</b>
          <b>g</b>
        </div>
      </div>
    );
  }
  return (
    <div className="h-[100vh]">
      <Head>
        <title>Weather App</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div className="absolute top-0 left-0 right-0 bottom-0 bg-black/40 z-[1] "></div>
      <Image
        src="https://images.unsplash.com/photo-1601134467661-3d775b999c8b?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2575&q=80"
        alt="full image"
        layout="fill"
        className="object-cover w-auto  h-auto"
      ></Image>
      <h1 className="relative z-[2] text-white text-center text-3xl pt-3">
        Would you like to know about your city weather ?
      </h1>
      <div className="relative flex flex-col justify-between items-center w-[250px] md:w-[700px] lg:w-full   mx-auto pt-4 text-white z-10">
        <form
          onSubmit={handleSubmit}
          className="flex justify-between items-center p-3 w-[300px] pl-5 md:w-[400px]  lg:w-[500px] mx-auto bg-transparent border border-gray-300 rounded-2xl "
        >
          <div className="w-full block">
            <input
              value={city}
              onChange={(e) => {
                setCity(e.target.value);
              }}
              type="text"
              className=" bg-transparent  text-white border-none focus:outline-none text-2xl"
              placeholder="Enter city name"
            />
          </div>
          <button className="text-2xl inline-block translate-x-[-30px] sm:translate-x-0">
            🔍
          </button>
        </form>
        <Weather />
      </div>
    </div>
  );
}
