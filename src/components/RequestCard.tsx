import { Box, Typography } from "@mui/material";

interface RequestCardProps {
  userName?: String;
  request: String;
}
const RequestCard = ({ userName, request }: RequestCardProps) => {
  const boxShadowStyle = {
    boxShadow: "0px 4px 10px 0px rgba(0, 0, 0, 0.05)",
  };

  return (
    <Box
      sx={{
        // width: "95%",
        minWidth: "100%",
        height: "120px",
        bgcolor: "background.paper",
        textAlign: "left",
        border: "1",
        borderRadius: "16px",
        px: "25px",
        pt: "13px",
        pb: "20px",
        overflow: "hidden",
      }}
      style={boxShadowStyle}
    >
      <Typography fontWeight={700} fontSize={".9rem"} gutterBottom>
        {userName}
      </Typography>
      <Typography
        sx={{
          lineHeight: "1.25",
          fontSize: ".9rem",
          display: "-webkit-box",
          WebkitBoxOrient: "vertical",
          WebkitLineClamp: 3,
          overflow: "hidden",
        }}
      >
        {request}
      </Typography>
    </Box>
  );
};

export default RequestCard;
