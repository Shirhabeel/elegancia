import { useState, useEffect } from "react";
import "../../src/styles/upperHeader.scss";

function UpperHeader() {
  const line1 = {
    data: "for international website visit",
    websiteURL: "#",
    websiteName: "www.example.com",
  };

  const line2 = {
    data: "click here for: ",
    websiteURL: "#",
    websiteName: "dispatch timeline",
  };

  const [showLine1, setShowLine1] = useState(true);

  useEffect(() => {
    const interval = setInterval(() => {
      setShowLine1((prev) => !prev);
    }, 2000); // Change lines every 3 seconds

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="upperHeader">
      <div className={`${showLine1 ? "show" : ""} line`} id="line1">
        {line1.data.toUpperCase()}{" "}
        <a href={line1.websiteURL} target="blank">
          {line1.websiteName.toUpperCase()}
        </a>
      </div>
      <div className={`${!showLine1 ? "show" : ""} line`} id="line2">
        {line2.data.toUpperCase()}{" "}
        <a href={line2.websiteURL} target="blank">
          {line2.websiteName.toUpperCase()}
        </a>
      </div>
    </div>
  );
}

export default UpperHeader;
