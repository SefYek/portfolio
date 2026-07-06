import Box from "@mui/material/Box";
import Link from "@mui/material/Link";
import Typography from "@mui/material/Typography";
import { profile } from "@/src/features/profile/data/profile";

export function SiteFooter() {
  return (
    <Box
      component="footer"
      sx={{
        bgcolor: "transparent",
        borderTop: "1px solid",
        borderColor: "divider",
      }}
    >
      <Box
        sx={{
          py: 3.5,
          px: 5,
          display: "flex",
          flexDirection: { xs: "column", sm: "row" },
          alignItems: { sm: "center" },
          justifyContent: "space-between",
          gap: 1.5,
        }}
      >
        <Typography variant="body2" sx={{ color: "text.secondary" }}>
          {profile.name} - Personal Portfolio
        </Typography>
        <Box sx={{ display: "flex", flexWrap: "wrap", gap: 2 }}>
          {profile.socials.map((item) => (
            <Link
              key={item.label}
              href={item.href}
              color="text.secondary"
              underline="none"
              target="_blank"
              rel="noreferrer"
              sx={{
                transition: "0.2s ease",
                "&:hover": { color: "text.primary" },
              }}
            >
              {item.label}
            </Link>
          ))}
        </Box>
      </Box>
    </Box>
  );
}
