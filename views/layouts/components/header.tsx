import { Button, Stack, Typography } from "@mui/material";
import Image from "next/image";
const style = {
  border: "1px solid #dedede",
  padding: "5px",
  alignItems: "center",
  borderRadius: "14px",
};
const Header = () => {
  return (
    <Stack direction="row" justifyContent="space-between" gap={1} mt={1}>
      <Stack direction="row" sx={style} gap={2} justifyContent="space-between">
        <Stack gap={2}>
          <Image
            src="https://clickup.com/assets/brand/logo-v3-clickup-light.svg"
            alt="logo"
            height={23}
            width={94}
          />
        </Stack>
        <Typography>|</Typography>
        <Typography> UT Prototype</Typography>
      </Stack>

      <Stack direction="row" sx={style} gap={1}>
        <Button variant="outlined" color="secondary" size="medium">
          Single Sign in
        </Button>
        <Button variant="outlined" color="secondary">
          Event Planner
        </Button>
        <Button variant="outlined" color="secondary">
          Tax calculator
        </Button>
        <Button variant="outlined" color="secondary">
          Burger Builder
        </Button>

        <Button variant="outlined" color="secondary">
          Email Builder
        </Button>
        <Button variant="outlined" color="secondary">
          My shop
        </Button>
      </Stack>

      <Stack direction="row" sx={style} gap={1}>
        <Button variant="outlined" color="secondary">
          Login
        </Button>
        <Button variant="contained" color="primary">
          Sign up
        </Button>
      </Stack>
    </Stack>
  );
};
export default Header;
