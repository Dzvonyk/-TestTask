import React, { useEffect } from "react";
import { useParams } from "react-router-dom";
import useRevenue from "./hooks/useRevenue";

const Revenue = () => {
  const { getRevenueHandler , revenue } = useRevenue();
  const {id} = useParams();

  useEffect(() => {
    if(id){
      getRevenueHandler(id);
    }
    console.log("-| getRevenueHandler  useEffect |-", revenue);
  }, []);
  
  return (
    <div>
      {`${revenue.id} -|- ${revenue._id}`}
      {revenue.data.map((data) => (
        <div>{`${data.curency}`}</div>
      ))}
    </div>
  );
};

export default Revenue;