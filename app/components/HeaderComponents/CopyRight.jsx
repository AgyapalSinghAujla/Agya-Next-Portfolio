"use client";
import { useState, useEffect } from "react";

const CopyRight = () => {
  const [dateTime, setDateTime] = useState(null);

  useEffect(() => {
    setDateTime(new Date());

    const interval = setInterval(() => {
      setDateTime(new Date());
    }, 1000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="ag-copy-right">
      <p>© AGYAPAL SINGH. All rights reserved</p>

      <p>
        {dateTime
          ? `${dateTime.toLocaleDateString()} | ${dateTime.toLocaleTimeString()}`
          : "Loading..."}
      </p>
    </div>
  );
};

export default CopyRight;
