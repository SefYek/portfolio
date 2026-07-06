import type { ReactNode } from "react";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";

type SectionProps = {
  id: string;
  eyebrow: string;
  title: string;
  children: ReactNode;
};

export function Section({ id, eyebrow, title, children }: SectionProps) {
  return (
    <Box component="section" id={id} sx={{ scrollMarginTop: 96, py: { xs: 6, md: 8 } }}>
      <Box
        sx={{
          mb: 4,
          display: "flex",
          alignItems: { xs: "flex-start", sm: "flex-end" },
          justifyContent: "space-between",
          gap: 2,
          flexDirection: { xs: "column", sm: "row" },
        }}
      >
        <Box>
        <Typography
          sx={{ color: "secondary.main", fontSize: 14, fontWeight: 800 }}
        >
          {eyebrow}
        </Typography>
        <Typography
          component="h2"
          sx={{
            mt: 1,
            color: "text.primary",
            fontSize: { xs: 28, sm: 34 },
            fontWeight: 900,
            lineHeight: 1.25,
          }}
        >
          {title}
        </Typography>
        </Box>
        <Box
          sx={{
            width: { xs: 80, sm: 140 },
            height: 1,
            bgcolor: "divider",
          }}
        />
      </Box>
      {children}
    </Box>
  );
}
