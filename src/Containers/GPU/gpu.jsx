import React from "react";

const GPU = () => {
  const array = [
    {
      name: "brad",
    },
    {
      name: "bart",
    },
    {
      brand: "bend",
    },
  ];
  return (
    <div>
      {array?.map((response) => {
        return response.name;
      })}
    </div>
  );
};

export default GPU;
