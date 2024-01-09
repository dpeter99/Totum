import { Container, Box } from "@mui/material";

import "./Home.css";
import { PaperCard } from "../../components/PaperCard";
import { BarChartWithData } from "../../components/dashboard/BarChartWithData";

//TODO: get a currencyformatter set by the account type

export const Home = () => {
  return (
    <Container className="dashboard--container">
      <Box sx={{ flexGrow: 1 }}>
        <PaperCard label="Compare last 30 days">
          <BarChartWithData />
        </PaperCard>
      </Box>
    </Container>
  );
};
