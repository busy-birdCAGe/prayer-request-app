import { Box, useTheme } from "@mui/material";
import RequestCard from "../../components/RequestCard";
import Grid from "@mui/material/Unstable_Grid2";

const RequestsPage = () => {
  const theme = useTheme();
  return (
    <Box
      sx={{
        padding: "12px",
        display: "flex",
        [theme.breakpoints.up("md")]: {
          px: 6,
          pt: 3
        },
      }}
    >
      <Grid container spacing={2} alignItems="center" justifyContent="center">
        <Grid xs={12} sm={6} lg={4}>
          <Box sx={{ display: "flex", justifyContent: "center" }}>
            <RequestCard
              userName={"carcamoa"}
              request={
                "prayer request description, lorem ipsum dolor sit amet, consectetur adipiscing elit, se prayer request description, lorem ipsum dolor sit amet, consectetur adipiscing elit, se"
              }
            />
          </Box>
        </Grid>
        <Grid xs={12} sm={6} lg={4}>
          <Box sx={{ display: "flex", justifyContent: "center" }}>
            <RequestCard
              userName={"carcamoa"}
              request={
                "prayer request description, lorem ipsum dolor sit amet, consectetur adipiscing elit, se prayer request description, lorem ipsum dolor sit amet, consectetur adipiscing elit, se"
              }
            />
          </Box>
        </Grid>
      </Grid>
    </Box>
  );
};

export default RequestsPage;
