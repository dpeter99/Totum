import { Box, Typography } from "@mui/material";
import * as React from "react";
import {
  DataGrid,
  GridCellParams,
  GridColDef,
  GridToolbar,
} from "@mui/x-data-grid";

import "./ListTransactions.css";
import { useGetUserBrowserTheme } from "../../theme/consts";
import {
  // BrowserView,
  // MobileView,
  // isBrowser,
  isMobile,
} from "react-device-detect";

export const ListTransactions = () => {
  const _isMobile = isMobile;

  const columns: GridColDef[] = [
    { field: "id", headerName: "ID", width: 100 },
    {
      field: "date",
      headerName: "Date",
      type: "date",
      flex: 0 /*width: 100*/,
    },
    {
      field: "shop",
      headerName: "Shop",
      flex: 0,
      minWidth: _isMobile ? 110 : 180,
    },
    {
      field: "category",
      headerName: "Category",
      flex: 0,
      minWidth: _isMobile ? 130 : 160,
      /*type: "Category",*/ /*width: 130,*/
    },
    {
      field: "description",
      headerName: "Desc.",
      sortable: false,
      flex: 0,
      minWidth: _isMobile ? 110 : 220,
      /*width: 130,*/
    },
    {
      field: "amount",
      headerName: "Amount (Ft)",
      type: "number",
      flex: 0,
      /* width: 80,*/
    },
    {
      field: "user",
      headerName: "User",
      flex: 0,
      //type: "User",
      width: 130,
    },
    {
      field: "isCommon",
      headerName: "Common",
      type: "boolean",
      flex: 0,
      minWidth: 130,
      /*width: 50,*/
    },
    {
      field: "cardType",
      headerName: "Card",
      flex: 0,
      minWidth: 130,
      //type: "CartType",
      /*width: 130,*/
    },
  ];

  const rows = [
    {
      id: 1,
      date: new Date("2023.10.31"),
      shop: "Papír írószer",
      category: "Other",
      description: "-",
      amount: -2630,
      user: "Lau",
      isCommon: true,
      cardType: "Main Debit Card",
    },
    {
      id: 2,
      date: new Date("2023.11.08"),
      shop: "rent",
      category: "Rent",
      description: "-",
      amount: -100000,
      user: "Lau",
      isCommon: true,
      cardType: "Main Debit Card",
    },
    {
      id: 3,
      date: new Date("2023.11.05"),
      shop: "Wolt",
      category: "Food Delivery",
      description: "-",
      amount: -5864,
      user: "Lau",
      isCommon: true,
      cardType: "SZÉP",
    },
    {
      id: 4,
      date: new Date("2023.12.12"),
      shop: "Alle Gyógyszertár",
      category: "Medicine",
      description: "feketenadálytő krém",
      amount: -1129,
      user: "Lau",
      isCommon: true,
      cardType: "Main Debit Card",
    },
    {
      id: 5,
      date: new Date("2023.10.28"),
      shop: "MvM Áram",
      category: "Rent",
      description: "-",
      amount: -6708,
      user: "Peter",
      isCommon: true,
      cardType: "Main Debit Card",
    },
    {
      id: 6,
      date: new Date("2023.12.22"),
      shop: "Clario Clinical Kft.",
      category: "Income",
      description: "Salary",
      amount: 630060,
      user: "Lau",
      isCommon: false,
      cardType: "Main Debit Card",
    },
  ];

  const theme = useGetUserBrowserTheme();

  return (
    // <Container className="addNew--container">
    <Box
      sx={{
        //flexGrow: 1,
        //display: "flex",
        //justifyContent: "center",
        //alignItems: "center",
        //direction: "column",
        //width: _isMobile || window.screen.width < 1200 ? "95%" : "80%",
        width: _isMobile ? "95%" : "80%",
        marginLeft: "auto",
        marginRight: "auto",
        "& .plus": {
          color: theme.palette.success.main,
        },
        "& .minus": {
          color: theme.palette.error.main,
        },
      }}
      className="list--container"
    >
      {/*<PaperCard label="Add New Transactions">*/}
      <div>
        <Typography gutterBottom variant="h5" component="div">
          List Transactions
        </Typography>
        <DataGrid
          rows={rows}
          columns={columns}
          autoHeight={true}
          //autoPageSize={true} // doesn't work well with filtering
          disableColumnMenu={true}
          ignoreDiacritics={true}
          slots={{
            toolbar: GridToolbar,
          }}
          getCellClassName={(params: GridCellParams<any, any, number>) => {
            if (params.field !== "amount" || params.value == null) {
              return "";
            }
            return params.value > 0 ? "plus" : "minus";
          }}
          initialState={{
            pagination: {
              paginationModel: { page: 0, pageSize: 10 },
            },
            columns: {
              columnVisibilityModel: {
                // Hide columns
                id: false,
              },
            },
            sorting: {
              sortModel: [{ field: "date", sort: "desc" }],
            },
          }}
          pageSizeOptions={[5, 10, 20]}
          checkboxSelection
        />
      </div>
      {/*</PaperCard>*/}
    </Box>
    // </Container>
  );
};
