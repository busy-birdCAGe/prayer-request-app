import { Box, useTheme } from "@mui/material";
import { useEffect, useState } from "react";
import RequestCard from "../../components/RequestCard";
import Grid from "@mui/material/Unstable_Grid2";
import RequestService from "../../services/request";
import { RequestView } from "../../services/request";

const RequestsPage = () => {
  const [requestData, setRequestData] = useState<Array<RequestView>>([]);
  const theme = useTheme();

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await RequestService.getCommunityRequests([], 10, 0);
        setRequestData(response);
      } catch (error) {
        console.error("Error fetching request data:", error);
      }
    };

    fetchData();
  }, []);

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
      <Grid container spacing={2} alignItems="center" justifyContent="center">
        {requestData.map((request) => (
          <Grid xs={12} sm={6} md={4} lg={3}>
            <Box sx={{ display: "flex", justifyContent: "center" }}>
              <RequestCard userName={request.userName} text={request.text} />
            </Box>
          </Grid>
        ))}
      </Grid>
    </Box>
  );
};

export default RequestsPage;
