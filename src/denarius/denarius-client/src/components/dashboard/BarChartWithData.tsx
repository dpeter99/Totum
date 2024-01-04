import { MonoStackerBar } from "../charts/stackedBar/MonoStackerBar";
import { useGetUserBrowserTheme } from "../../theme/consts";
import { Container, Typography } from "@mui/material";

export function BarChartWithData() {
  const a = { number: 399449, color: "", user: "Peti", diff: 0 };
  const b = { number: 597098, color: "", user: "Lau", diff: 0 };
  //TODO: diff calc doesn't help much if we're checking past 30 days all the time cuz it'll catch up
  // or it does exactly cuz we see in real time who spent more?
  const sum = a.number + b.number;

  const theme = useGetUserBrowserTheme();

  if (a.number > b.number) {
    a.color = theme.palette.secondary.dark;
    b.color = theme.palette.secondary.light;
    a.diff = a.number - sum / 2;
  } else {
    b.color = theme.palette.secondary.dark;
    a.color = theme.palette.secondary.light;
    b.diff = b.number - sum / 2;
  }

  return (
    <span className="stackBarData--container">
      <MonoStackerBar
        data={[
          { value: (a.number / sum) * 100, color: a.color, caption: a.user },
          { value: (b.number / sum) * 100, color: b.color, caption: b.user },
        ]}
        radius={4}
        height={30}
        unit={"%"}
      />
      <Container>
        <Typography variant="body1" component="div">
          {a.user + ": " + currencyFormat(a.number)}
        </Typography>
        <Typography variant="body1" component="div">
          {b.user + ": " + currencyFormat(b.number)}
        </Typography>
        <Typography variant="body1" component="div">
          Difference:{" "}
          {a.diff > 0
            ? b.user + " owns " + currencyFormat(a.diff) + " to " + a.user
            : a.user + " owns " + currencyFormat(b.diff) + " to " + b.user}{" "}
        </Typography>
      </Container>
    </span>
  );
}

function currencyFormat(num: number) {
  return (
    num
      //.toFixed(2)
      .toString()
      .replace(/\B(?=(\d{3})+(?!\d))/g, ",") + " Ft"
  );
}
