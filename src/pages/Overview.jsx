import { Grid } from "@mui/material";
import MetricCard from "../components/MetricCard";
import PageTitle from "../components/PageTitle";

import PeopleIcon from "@mui/icons-material/People";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import DevicesIcon from "@mui/icons-material/Devices";


export default function Overview() {
  const metrics = [
    { title: "Users", value: 10, icon: PeopleIcon, subtitle: "+2 this week" },
    { title: "Orders", value: 15, icon: ShoppingCartIcon, subtitle: "5 new today" },
    { title: "Active Sessions", value: 8, icon: DevicesIcon, subtitle: "Today’s peak: 10"},
  ];

  return (
    <>
      <PageTitle>Overview</PageTitle>

      <Grid container spacing={3}>
        {metrics.map((metric, index) => (
          <Grid size={{ xs: 12, sm: 12, md: 6, lg: 4 }} key={index}>
            <MetricCard
              title={metric.title}
              value={metric.value}
              icon={metric.icon}
              subtitle={metric.subtitle}
            />
          </Grid>
        ))}
      </Grid>
    </>
  );
}
