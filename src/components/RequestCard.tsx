import { Box, Typography } from "@mui/material";

interface RequestCardProps {
  userName?: String;
  request: String;
}
const RequestCard = ({ userName, request }: RequestCardProps) => {

    const boxShadowStyle = {
        boxShadow:
          "0px 4px 10px 0px rgba(0, 0, 0, 0.05)",
      };

  return (
    <Box
      sx={{
        // width: "95%",
        bgcolor:"background.paper",
        textAlign: "left",
        border: "1",
        borderRadius: "16px",
        px: "25px",
        pt: "13px",
        pb: "20px",
        
      }}
      style={boxShadowStyle}
    >
      <Typography fontWeight={700} fontSize={".9rem"} gutterBottom>
        {userName}
      </Typography>
      <Typography sx={{ lineHeight: "1.25", fontSize: ".9rem" }}>{request} </Typography>
    </Box>
  );
};

export default RequestCard;
