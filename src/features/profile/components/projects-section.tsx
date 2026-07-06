import Box from "@mui/material/Box";
import Paper from "@mui/material/Paper";
import Typography from "@mui/material/Typography";
import { Section } from "@/src/components/ui/section";
import { profile } from "@/src/features/profile/data/profile";

export function ProjectsSection() {
  return (
    <Section id="projects" eyebrow="Work" title="Selected Projects">
      <Box
        sx={{
          display: "grid",
          gap: 2,
          gridTemplateColumns: { xs: "1fr", md: "repeat(2, 1fr)" },
        }}
      >
        {profile.projects.map((project) => (
          <Paper
            component="article"
            variant="outlined"
            key={project.title + project.company}
            sx={{
              p: 3,
              minHeight: 230,
              display: "flex",
              flexDirection: "column",
              borderColor: "divider",
              bgcolor: "rgba(255,255,255,0.72)",
              transition: "0.24s ease",
              "&:hover": {
                transform: "translateY(-6px)",
                boxShadow: "0 22px 60px rgba(15, 23, 42, 0.12)",
              },
            }}
          >
            <Typography
              sx={{ color: "secondary.main", fontSize: 14, fontWeight: 800 }}
            >
              {project.type} / {project.year}
            </Typography>
            <Typography
              component="h3"
              sx={{ mt: 1.5, fontSize: 18, fontWeight: 900 }}
            >
              {project.title}
            </Typography>
            <Typography
              sx={{ mt: 0.75, color: "text.secondary", fontWeight: 800 }}
            >
              {project.company}
            </Typography>
            <Typography
              sx={{ mt: 1.5, color: "text.secondary", lineHeight: 1.9 }}
            >
              {project.description}
            </Typography>
            <Box sx={{ flexGrow: 1 }} />
            <Typography sx={{ mt: 3, fontSize: 13, fontWeight: 900 }}>
              View Case
            </Typography>
          </Paper>
        ))}
      </Box>
    </Section>
  );
}
