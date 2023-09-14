import React, { useEffect } from "react";

const Practice = () => {
  useEffect(() => {
    callApiHandler();
  }, []);

  async function callApiHandler() {
    let response = await fetch(
      "https://www.swiggy.com/dapi/restaurants/list/v5?lat=28.6126255&lng=77.04108959999999&page_type=DESKTOP_WEB_LISTING"
    );
    let da = await response.json();
    console.log(da);
  }
  return <div></div>;
};

export default Practice;
