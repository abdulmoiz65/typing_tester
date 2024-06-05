import React from "react";
import { Grid, AppBar } from "@mui/material";
import { Box } from "@mui/system";
import Select from "../utils/Select";


const FooterMenu = ({
  themesOptions,
  theme,
  soundMode,
  soundOptions,
  soundType,
  handleSoundTypeChange,
  handleThemeChange,
  isMusicMode,
  isFocusedMode,
  isCoffeeMode,


  isTrainerMode,

  isWordsCardMode,

}) => {
  const isSiteInfoDisabled = isMusicMode || isFocusedMode;
  const isBottomLogoEnabled = isFocusedMode && !isMusicMode;
  const isTypeTestEnabled = !isCoffeeMode && !isTrainerMode && !isWordsCardMode;

  const getModeButtonClassName = (mode) => {
    if (mode) {
      return "zen-button";
    }
    return "zen-button-deactive";
  };

  const getGameModeButtonClassName = (currMode, buttonMode) => {
    if (currMode === buttonMode) {
      return "active-game-mode-button";
    }
    return "inactive-game-mode-button";
  };

  return (
    <AppBar position="static"
    color="transparent" className="bottomBar">
      <Grid container justifyContent="space-between" alignItems="center">
        <Box display="flex" flexDirection="row">
          <Select
            classNamePrefix="Select"
            value={themesOptions.find((e) => e.value.label === theme.label)}
            options={themesOptions}
            isSearchable={false}
            isSelected={false}
            onChange={handleThemeChange}
            menuPlacement="top"
          ></Select>

        
        
          {soundMode && (
            <Select
              classNamePrefix="Select"
              value={soundOptions.find((e) => e.label === soundType)}
              options={soundOptions}
              isSearchable={false}
              isSelected={false}
              onChange={handleSoundTypeChange}
              menuPlacement="top"
            ></Select>
          )}
          
         
        
       
        </Box>
        {!isSiteInfoDisabled && (
          <Box display="block" flexDirection="row">
            {/* <SupportMe></SupportMe> */}
           
          
          </Box>
        )}
       
      </Grid>
    </AppBar>
  );
};

export default FooterMenu;
