import { Card, CardContent, Typography, Box } from "@mui/material";

export default function MetricCard({ title, value, icon: Icon, subtitle }) {
  return (
    <Card
      sx={{
        minWidth: 200,
        p: 2,
        height: "100%",
        boxShadow: 3,
        borderRadius: 2,
        transition: "0.3s",
        "&:hover": {
          transform: "scale(1.05)",
          boxShadow: 6,
        },
      }}>
      <CardContent>
        <Box display="flex" alignItems="center" gap={2}>
          {Icon && <Icon fontSize="large" color="primary"
            sx={{
              fontSize: 40,
              transition: "0.3s",
              "&:hover": { transform: "rotate(-10deg) scale(1.2)" },
            }}
          />}
          <Box>
            <Typography variant="h6">{title}</Typography>
            <Typography variant="h3">{value}</Typography>
            {subtitle && (
              <Typography variant="body2" color="text.secondary" sx={{ mt: 0.5 }}>
                {subtitle}
              </Typography>
            )}
          </Box>
        </Box>
      </CardContent>
    </Card>
  );
}
