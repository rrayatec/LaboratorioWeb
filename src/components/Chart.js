// https://recharts.org/en-US/examples/BrushBarChart
import * as React from "react";
import { useTheme } from "@mui/material/styles";
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  Label,
  ResponsiveContainer,
  Tooltip,
} from "recharts";

// Generate Sales Data
function createData(time, amount, time2, amount2) {
  return { time, amount, time2, amount2 };
}

const data = [
  createData("00:00", 0, "00:00", 10),
  createData("03:00", 300, "00:00", 100),
  createData("06:00", 600, "00:00", 200),
  createData("09:00", 800, "00:00", 300),
  createData("24:00", undefined, "24:00", undefined),
];

export default function Chart() {
  const theme = useTheme();

  return (
    <React.Fragment>
      Today
      <ResponsiveContainer>
        <LineChart
          data={data}
          margin={{
            top: 16,
            right: 16,
            bottom: 0,
            left: 24,
          }}
        >
          <XAxis
            dataKey="time"
            stroke={theme.palette.text.secondary}
            style={theme.typography.body2}
          />
          <YAxis
            stroke={theme.palette.text.secondary}
            style={theme.typography.body2}
          >
            <Label
              angle={270}
              position="left"
              style={{
                textAnchor: "middle",
                fill: theme.palette.text.primary,
                ...theme.typography.body1,
              }}
            >
              Sales ($)
            </Label>
          </YAxis>

          <Line
            isAnimationActive={true}
            type="monotone"
            dataKey="amount"
            stroke={theme.palette.primary.main}
            dot={true}
          />
          <Line
            isAnimationActive={true}
            type="monotone"
            dataKey="amount2"
            stroke="#8884d8"
            dot={true}
          />
          <Tooltip />
        </LineChart>
      </ResponsiveContainer>
    </React.Fragment>
  );
}
