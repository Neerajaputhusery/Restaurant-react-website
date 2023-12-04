import React from 'react';
import { styled } from '@mui/system';
import { Button } from '@mui/material';

const CustomButton = ({
  backgroundColor,
  color,
  buttonText,
  welcomeBtn,
  guideBtn,
  getStartedBtn,
}) => {
  const StyledButton = styled(Button)(({ theme }) => ({
    background: backgroundColor,
    color: color,
    fontWeight: "700",
    fontSize: "14px",
    cursor: "pointer",
    padding: "0.5rem 1.25rem",
    borderRadius: "7px",  // Corrected typo: borderRedius to borderRadius
    textTransform: "none",
    display: "block",
    border: "2px solid transparent",
    "&:hover": {
      backgroundColor: color,
      color: backgroundColor,
      borderColor: backgroundColor,
    },
    [theme.breakpoints.down('md')]: {
      margin: (welcomeBtn || getStartedBtn) && theme.spacing(0, "auto", 3, "auto"),
      width: (welcomeBtn || getStartedBtn) && "90%",
    },
    [theme.breakpoints.down("sm")]: {
      margin: (welcomeBtn || getStartedBtn) && theme.spacing(0, "auto", 3 ,"auto"),
      width: guideBtn && "90%",  // Corrected typo: guidebtn to guideBtn
    },
  }));

  return <StyledButton>{buttonText}</StyledButton>;
};

export default CustomButton;
