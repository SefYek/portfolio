import Button from "@mui/material/Button";
import type { ButtonProps } from "@mui/material/Button";

export function CButton({ sx, ...props }: ButtonProps) {
  return (
    <Button
      variant="contained"
      size="large"
      {...props}
      sx={{
        px: 3,
        transition: "all 0.1s ease",
        "&:hover": {
          transform: "translateY(-1px)",
          boxShadow: "0 0px 10px 5px rgba(50, 123, 231, 0.25)",
          scale: "1.03",
        },
        ...sx,
      }}
    />
  );
}
