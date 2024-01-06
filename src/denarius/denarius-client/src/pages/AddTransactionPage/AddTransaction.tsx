import {
  Box,
  Container,
  FormControl,
  InputLabel,
  MenuItem,
  Select,
  SelectChangeEvent,
  TextField,
} from "@mui/material";

import { PaperCard } from "../../components/PaperCard";

import "./AddTransactionPage.css";
import React from "react";
import { categories } from "../ListTransactionsPage/TestTransactions";
export function AddTransaction() {
  const [category, setCategory] = React.useState("");

  const handleChange = (event: SelectChangeEvent) => {
    setCategory(event.target.value as string);
  };

  return (
    <Container>
      <Box sx={{ flexGrow: 1, margin: "3% 0" }}>
        <PaperCard label="Add New Transactions">
          <Box
            component="form"
            sx={{
              display: "flex",
              flexWrap: "wrap",
              "& > :not(style)": { m: 1, width: "25ch" },
            }}
          >
            <TextField id="shop-textField" label="Shop" variant="outlined" />
            <FormControl sx={{ m: 1, width: "25ch" }} variant="outlined">
              <InputLabel id="category-label">Category</InputLabel>
              <Select
                labelId="category-label"
                id="category-select"
                value={category}
                label="Category"
                onChange={handleChange}
              >
                {Object.entries(categories).map((key, value) => (
                  <MenuItem key={"category-select-" + value} value={value}>
                    {key[1]}
                  </MenuItem>
                ))}
              </Select>
            </FormControl>
            {/*<DatePicker label="Basic date picker" />*/}
          </Box>
        </PaperCard>
      </Box>
    </Container>
  );
}
