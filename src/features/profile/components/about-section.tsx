import Box from "@mui/material/Box";
import Paper from "@mui/material/Paper";
import Typography from "@mui/material/Typography";
import { Section } from "@/src/components/ui/section";
import { profile } from "@/src/features/profile/data/profile";

export function AboutSection() {
  return (
    <Section id="about" eyebrow="About Me" title="A Closer Look">
      <Box
        sx={{
          display: "grid",
          gap: 2,
          gridTemplateColumns: { xs: "1fr", md: "1fr 1fr" },
        }}
      >
        {profile.about.map((paragraph, index) => (
          <Paper
            key={paragraph}
            variant="outlined"
            sx={{
              p: 3,
              borderColor: "divider",
              bgcolor: index === 0 ? "primary.main" : "rgba(255,255,255,0.72)",
              color: index === 0 ? "primary.contrastText" : "text.secondary",
            }}
          >
            <Typography sx={{ lineHeight: 2 }}>{paragraph}</Typography>
          </Paper>
        ))}
      </Box>
    </Section>
  );
}
