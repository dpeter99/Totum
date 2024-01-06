import {
  Box,
  Checkbox,
  Container,
  FormControl,
  FormControlLabel,
  Input,
  InputAdornment,
  InputLabel,
  MenuItem,
  OutlinedInput,
  Select,
  SelectChangeEvent,
  TextField,
  Typography,
} from "@mui/material";
import { DatePicker } from "@mui/x-date-pickers/DatePicker";

import { PaperCard } from "../../components/PaperCard";

import "./AddTransactionPage.css";
import React from "react";
import {
  cardTypes,
  categories,
  users,
} from "../ListTransactionsPage/TestTransactions";
import { AccountCircle } from "@mui/icons-material";
export function AddTransaction() {
  const [category, setCategory] = React.useState("");
  const [user, setUser] = React.useState("");
  const [card, setCard] = React.useState("");
  const [cleared, setCleared] = React.useState<boolean>(false);

  const handleCategoryChange = (event: SelectChangeEvent) => {
    setCategory(event.target.value as string);
  };
  const handleUserChange = (event: SelectChangeEvent) => {
    setUser(event.target.value as string);
  };

  const handleCardChange = (event: SelectChangeEvent) => {
    setCard(event.target.value as string);
  };

  React.useEffect(() => {
    if (cleared) {
      const timeout = setTimeout(() => {
        setCleared(false);
      }, 1500);

      return () => clearTimeout(timeout);
    }
    return () => {};
  }, [cleared]);

  return (
    <Container>
      <Box sx={{ flexGrow: 1, margin: "3% 0" }}>
        <PaperCard label="Add New Transactions">
          <Box
            component="form"
            sx={{
              display: "flex",
              //flexDirection: "column",
              //alignItems: "center",
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
                onChange={handleCategoryChange}
              >
                {Object.entries(categories).map((key, value) => (
                  <MenuItem key={"category-select-" + value} value={value}>
                    {key[1]}
                  </MenuItem>
                ))}
              </Select>
            </FormControl>
            <DatePicker
              label="Date"
              openTo="month"
              views={["year", "month", "day"]}
              slotProps={{
                field: { clearable: true, onClear: () => setCleared(true) },
              }}
            />
            <FormControl fullWidth sx={{ m: 1 }}>
              <InputLabel htmlFor="outlined-adornment-amount">
                Amount
              </InputLabel>
              <OutlinedInput
                id="amounttextField"
                inputMode="numeric"
                startAdornment={
                  <InputAdornment position="start">Ft</InputAdornment>
                }
                label="Amount"
              />
            </FormControl>
            <TextField
              id="description-textField"
              label="Description"
              multiline
              variant="outlined"
            />
            <FormControl sx={{ m: 1, width: "25ch" }} variant="outlined">
              <InputLabel id="user-label">User</InputLabel>
              <Select
                labelId="user-label"
                id="user-select"
                value={user}
                label="User"
                onChange={handleUserChange}
              >
                {Object.entries(users).map((key, value) => (
                  <MenuItem key={"user-select-" + value} value={value}>
                    <AccountCircle />
                    {key[1]}
                  </MenuItem>
                ))}
              </Select>
            </FormControl>
            <FormControl sx={{ m: 1, width: "25ch" }} variant="outlined">
              <InputLabel id="card-label">Card type</InputLabel>
              <Select
                labelId="card-label"
                id="card-select"
                value={card}
                label="Card type"
                onChange={handleCardChange}
              >
                {Object.entries(cardTypes).map((key, value) => (
                  <MenuItem key={"card-select-" + value} value={value}>
                    {key[1]}
                  </MenuItem>
                ))}
              </Select>
            </FormControl>
            <FormControlLabel
              label="Is common expense?"
              control={<Checkbox defaultChecked color="secondary" />}
            />
          </Box>
        </PaperCard>
      </Box>
    </Container>
  );
}
