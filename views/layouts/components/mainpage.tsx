import { Box, Button, Card, Stack, Typography } from "@mui/material";
import Image from "next/image";

const MainPage = () => {
  return (
    <Stack
      direction="column"
      alignContent="center"
      alignItems="center"
      rowGap={2}
      columnGap={4}
      marginTop="32px"
    >
      <Stack gap={4} alignContent="center">
        <Typography variant="h3" fontWeight={600} textAlign="center">
          The everything app, <br /> for work ;
        </Typography>
        <Typography variant="h6" textAlign="center">
          Get everyone working in a single platform <br /> designed to manage
          any type of work.
        </Typography>
      </Stack>
      <Stack gap={4} alignContent="center">
        <Button
          sx={{
            height: "60px",
            padding: "16px",
            minWidth: "400px",
          }}
          variant="contained"
          color="primary"
        >
          <Typography variant="h5" fontWeight={600}>
            Let's have a look
          </Typography>
        </Button>
      </Stack>
    </Stack>
  );
};

export default MainPage;
