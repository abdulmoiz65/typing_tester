import React from "react";
import { Box } from "@mui/system";


const Stats = ({
  status,
  wpm,
  countDown,
  statsCharCount,
}) => {
  return (
    <>
      <h3>{countDown} s </h3>
      <Box display="flex" flexDirection="row">
        <h3>WPM: {Math.round(wpm)}</h3>
        {status === "finished" && (
          <h4>Accuracy: {Math.round(statsCharCount[0])} %</h4>
        )}
      
       
      </Box>
    </>
  );
};

export default Stats;
