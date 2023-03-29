import React, { useEffect, useState } from "react";
import Button from "../Buttons/Button";
import SingleData from "../SingleData/SingleData";


const Card = () => {
  const [data, setData] = useState([]);
  const [showAll, setShowAll] = useState(false);
// show 12 
  const handleShowAll=()=>{
    setShowAll(true);

  }
   

  useEffect(() => {
    const loadData = async () => {
      const res = await fetch(
        `https://openapi.programming-hero.com/api/ai/tools`
      );
      const value= await res.json();
      setData(value.data.tools);
    };
    loadData();
  }, []);
 
  return(
    <>
    <div className="grid grid-cols-1 md:grid-cols-3 lg-grid-cols-3 gap-4 lg:ox-12 my-6">
        {
            data.slice(0, showAll ? 12 : 6).map((singleData)=>{
               return <SingleData singleData={singleData} key={singleData.id}></SingleData>
            })
        }
    </div>
    <div>
   {
    !showAll &&  <span onClick={handleShowAll}>
    <Button>See More</Button>
    </span>
   }
    </div>
    </>
  )
  
};


export default Card;
