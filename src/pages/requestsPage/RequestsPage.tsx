import { Box, useTheme } from "@mui/material";
import RequestCard from "../../components/RequestCard";
import Grid from "@mui/material/Unstable_Grid2";
import mockRequestData from "../../utils/mockRequestData.json";

const RequestsPage = () => {
  const theme = useTheme();
  return (
    <Box
      sx={{
        padding: "12px",
        display: "flex",
        [theme.breakpoints.up("md")]: {
          px: 8,
          pt: 3,
        },
      }}
    >
      <Grid container spacing={2} alignItems="center" justifyContent="center" >
        {mockRequestData.map((request) => (
          <Grid xs={12} sm={6} md={4} lg={4}>
            <Box sx={{ display: "flex", justifyContent: "center" }}>
              <RequestCard
                userName={request.userName}
                request={request.request}
              />
            </Box>
          </Grid>
        ))}
      </Grid>
    </Box>
  );
};

export default RequestsPage;
