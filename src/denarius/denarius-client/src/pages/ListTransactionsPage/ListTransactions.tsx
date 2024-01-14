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
import { testTransactions } from "./TestTransactions";
import { GlobalContext } from "../../contex/GlobalState";
import { useContext } from "react";

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
      field: "payee",
      headerName: "Payee",
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

  const { transactions } = useContext(GlobalContext);

  const rows = transactions;

  const theme = useGetUserBrowserTheme();

  return (
    <Box
      sx={{
        //width: _isMobile || window.screen.width < 1200 ? "95%" : "80%",
        width: _isMobile ? "95%" : "80%",
        margin: _isMobile ? "5% auto" : "3% auto",
        "& .plus": {
          color: theme.palette.success.main,
          fontWeight: "bold",
        },
        "& .minus": {
          color: theme.palette.error.main,
          fontWeight: "bold",
        },
      }}
      //className="list--container"
    >
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
          editMode="row"
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
    </Box>
  );
};
