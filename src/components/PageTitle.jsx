import { Typography } from "@mui/material";

export default function PageTitle({ children }) {
	return (
		<Typography variant="h4" gutterBottom>
			{children}
		</Typography>
	);
}