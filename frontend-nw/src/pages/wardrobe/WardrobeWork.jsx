import React, { useEffect, useState } from "react";
import { useLocation, useParams } from "react-router-dom";

const WardrobeWork = () => {
  const location = useLocation();
  const { id } = useParams();
  const [data, setData] = useState([]);
  console.log("Data ", data);
  useEffect(() => {
    setData(location.state.workOutfits);
  }, []);
  return (
    <section id="wardrobeInner">
      <div className="container mx-auto flex space-x-20 p-6">
        <h2 className="text-5xl  font-bold text-blue-400 mt-10">
          {id} closet{" "}
        </h2>
        {data.length > 0 ? (
          data.map((item) => (
            <div
              className="flex flex-col justify-start items-center mt-20"
              key={item.driveId}
            >
              <img
                className="w-[200px] h-[200px]"
                src={item?.url}
                alt={item.itemCategory}
              />
              <p className="text-xl font-bold font-helvetica mt-6">
                {item.itemCategory}
              </p>
            </div>
          ))
        ) : (
          <h1 className="mt-[20rem] text-5xl text-black font-bold">No data</h1>
        )}
      </div>
    </section>
  );
};

export default WardrobeWork;
