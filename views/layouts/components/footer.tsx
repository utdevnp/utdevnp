import { Stack, Typography } from "@mui/material";

const Footer = () => {
  return (
    <Stack
      alignItems="center"
      justifyContent="center"
      gap={3}
      sx={{
        background: "#000",
        minHeight: "30px",
        marginTop: "30px",
      }}
    >
      <Typography color="white">All right reserve</Typography>
    </Stack>
  );
};

export default Footer;
