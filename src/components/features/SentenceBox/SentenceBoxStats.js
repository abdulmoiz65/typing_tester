import React from "react";
import { Box } from "@mui/system";
// import { Tooltip } from "@mui/material";
// import { SENTENCE_CHAR_TOOLTIP_TITLE } from "../../../constants/Constants";

const SentenceBoxStats = ({ status, wpm, countDown, stats, rawKeyStrokes }) => {
  return (
    <>
      <h3>{countDown} s </h3>
      <Box display="flex" flexDirection="row">
        <h3>WPM: {Math.round(wpm)}</h3>
        {status === "finished" && (
          <h4>
            Accuracy:{" "}
            {Math.round(
              (stats.correct /
                (stats.correct + stats.incorrect + stats.extra)) *
                100
            )}{" "}
            %
          </h4>
        )}
       
      </Box>
    </>
  );
};

export default SentenceBoxStats;
