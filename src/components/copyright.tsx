import { Typography, Link, Stack } from "@mui/material";

export function Copyright(props: any) {
    return (
      <Stack spacing={0.1}>
        <Typography variant="caption" color="white" align="center">
          {'Copyright © '}
          <Link color="#C9c6c6" href="https://www.facebook.com/ph.kayn" underline="none">Phạm Hoàng Vũ</Link>
        </Typography>
        <Typography variant="caption" color="white" align="center">
          <Link color="#C9c6c6" href="https://www.facebook.com/anhvu.maihoang.5" underline="none">Mai Hoàng Anh Vũ,</Link>
          {' '}{new Date().getFullYear()}{'.'}
        </Typography>
      </Stack>    
    );
}