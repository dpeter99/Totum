import { Box, Container } from "@mui/material";
import { PaperCard } from "../../components/PaperCard";

import "./AddTransactionPage.css";
export function AddTransaction() {
  return (
    <Container className="addNew--container">
      <Box sx={{ flexGrow: 1 }}>
        <PaperCard label="Add New Transactions">
          <div>asd</div>
        </PaperCard>
      </Box>
    </Container>
  );
}
