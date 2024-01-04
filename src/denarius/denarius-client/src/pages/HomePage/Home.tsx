import { Container, Box } from "@mui/material";

import "./Home.css";
import { DashboardCard } from "../../components/dashboard/DashboardCard";
import { BarChartWithData } from "../../components/dashboard/BarChartWithData";

//TODO: get a currencyformatter set by the account type

export const Home = () => {
  return (
    <Container className="dashboard--container">
      <Box sx={{ flexGrow: 1 }}>
        <DashboardCard label="Compare last 30 days">
          <BarChartWithData />
        </DashboardCard>
      </Box>
    </Container>
  );
};
