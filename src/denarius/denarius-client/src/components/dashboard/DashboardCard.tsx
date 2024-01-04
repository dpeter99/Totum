import { Container, /*createTheme,*/ Paper, Typography } from "@mui/material";
//import { useGetUserBrowserTheme } from "../../theme/consts";
import { ReactElement } from "react";

import "./_dashboard.css";

// eslint-disable-next-line react-hooks/rules-of-hooks
// const theme = useGetUserBrowserTheme();
//
// const paperTheme = createTheme({
//   components: {
//     MuiPaper: {
//       // styleOverrides:{
//       //
//       //   backgroundColor: theme.palette.background.paper
//       // }
//       variants: [
//         {
//           props: {},
//           style: {
//             //backgroundColor: "#1A2027", //theme.palette.background.paper,
//             //...theme.components?.MuiPaper.
//             //...theme.typography.body2,
//             padding: theme.spacing(1),
//             //textAlign: "center",
//             //color: theme.palette.text.primary,
//           },
//         },
//       ],
//     },
//   },
// });

interface DashboardCardProps {
  label: string;
  children: ReactElement;
}

export const DashboardCard = ({ label, children }: DashboardCardProps) => {
  return (
    <>
      <Paper elevation={4} className="dashboard-card">
        <Container>
          <Typography
            className="card-label"
            gutterBottom
            variant="h5"
            component="div"
          >
            {label}
          </Typography>
          <div className="card-content">{children}</div>
        </Container>
      </Paper>
    </>
  );
};
