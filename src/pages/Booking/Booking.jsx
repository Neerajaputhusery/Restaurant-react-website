import { Box,Typography } from '@mui/material';
import React from 'react';
import { styled } from '@mui/system';


import buyIcon from "../../assets/buy_icon.png";
import sellIcon from "../../assets/sell_icon.png";
import rentIcon from "../../assets/sell_icon.png";

import ArrowRightAltIcon from '@mui/icons-material/ArrowRightAlt';

import CustomButton from "../../component/CustomButton/CustomButton";




const Booking = () => {
    const CustomBox = styled(Box)(({ theme }) => ({
      width: "30%",
      [theme.breakpoints.down("md")]: {
        width: "85%",
      },
    }));


    const GuidesBox = styled(Box)(({ theme }) => ({
        display: "flex",
        justifyContent: "space-around",
        width: "70%",
        marginTop:theme.spacing(5),
        marginBottom:theme.spacing(5),
        [theme.breakpoints.down("md")]: {
            width: "100%",
        },
        [theme.breakpoints.down("md")]: {
            marginBottom: "0",
            flexDirection: "column",
        },
        
    }));


    const GuideBox = styled(Box)(({ theme }) => ({
          display: "flex",
          FlexDirection: "column",
          alignItems: "center",
          [theme.breakpoints.down("md")]: {
          marginTop: theme.specing(2,0,2,0),
          },
    }));

return (
    <box
    sx={{
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        padding:'40px'
    }}
    >
        <div
        style={{
           width: "5%",
           height: "5px",
           backgroundColor: "#000339",

           margin: "0 auto",

        }}
        >

        </div>
        <Typography
        variant='h3'
        sx={{ fontSize: "35px", fontWeight: "bold", color: "#000339",my: 3 }}
        >
        How to Book?

        </Typography>
<CustomBox>
<Typography
    variant="body2"
    sx={{
       fontSize: "16px",
       fontSize: "500",
       color: "#5a6473",
       textAlign: "center",

    }}
    >
        Everything you need to know when you book for advance slot



</Typography>
</CustomBox>
<GuidesBox>
<GuidesBox>
<img src={buyIcon} alt="buyIcon" />
<Typography
variant="body2"
sx={{
    fontWeight: "500",
    fontSize: "28px",
    color: "#3B3c45",
    my: 1,
}}
>
    order Guides
</Typography>
<Box
sx={{
    cursor: "pointer",
    display: "flex",
    justifyContent: "center",
    alignItems: "center"
}}
>
    <Typography
    variant='="body2'
    sx={{fontWeight: "bold",fontSize:"14Ppx",color: "#0689FF"}}
    >
        How to order
    </Typography>
    <ArrowRightAltIcon style={{ color: "#0689FF" }} />
</Box>

</GuidesBox>

<GuidesBox>
<img src={rentIcon} alt="buyIcon" />
<Typography
variant="body2"
sx={{
    fontWeight: "500",
    fontSize: "20px",
    color: "#3B3c45",
    my: 1,
}}
>
    Booking Guides
</Typography>
<Box
sx={{
    cursor: "pointer",
    display: "flex",
    justifyContent: "center",
    alignItems: "center"
}}
>
    <Typography
    variant='="body2'
    sx={{fontWeight: "bold",fontSize:"14Ppx",color: "#0689FF"}}
    >
        How to order
    </Typography>
    <ArrowRightAltIcon style={{ color: "#0689FF" }} />
</Box>
</GuidesBox>
<GuidesBox>
<img src={sellIcon} alt="buyIcon" />
<Typography
variant="body2"
sx={{
    fontWeight: "500",
    fontSize: "28px",
    color: "#383c45",
    my: 1,
}}
>
    Payment Guides
</Typography>
<Box
sx={{
    cursor: "pointer",
    display: "flex",
    justifyContent: "center",
    alignItems: "center"
}}
>
    <Typography
    variant='="body2'
    sx={{fontWeight: "bold",fontSize:"14Ppx",color: "#0689FF"}}
    >
        Payment Method
    </Typography>
    <ArrowRightAltIcon style={{ color: "#0689FF" }} />
    </Box>
</GuidesBox>
</GuidesBox>

<CustomButton
backgroundColor="#0F1B4C"
color="#fff"
buttonText="see Full Guides"
guideBtn={true}
/>


        
    </box>




  );
};

export default Booking
