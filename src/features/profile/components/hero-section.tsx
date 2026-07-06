import Box from "@mui/material/Box";
import Chip from "@mui/material/Chip";
import { AnimatedBox } from "@/src/components/ui/animated-box";
import { CButton } from "@/src/components/ui/c-button";
import { profile } from "@/src/features/profile/data/profile";
import { Typography } from "@mui/material";

export function HeroSection() {
  return (
    <Box
      component="section"
      id="intro"
      sx={{
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        minHeight: { xs: "auto", md: "78vh" },
        scrollMarginTop: 96,
        py: { xs: 7, md: 10 },
        gap: { xs: 4, md: 10 },
        mb: { xs: 4, md: 10 },
      }}
    >
      <Box
        sx={{
          display: "flex",
          alignItems: "center",
          flexDirection: "column",
          textAlign: "center",
        }}
      >
        <Chip
          label="Portfolio / 2026"
          variant="outlined"
          sx={{
            bgcolor: "rgba(255,255,255,0.72)",
            borderColor: "divider",
            color: "text.secondary",
          }}
        />
        <AnimatedBox
          component="h1"
          direction="up"
          sx={{
            mt: 2,
            mb: 0,
            fontSize: { xs: 48, sm: 78, lg: 104 },
            lineHeight: 0.98,
            maxWidth: 700,
            letterSpacing: "-0.02em",
          }}
        >
          <Typography
            sx={{
              color: "text.primary",
              fontWeight: 800,
            }}
          ></Typography>
          {profile.name}
        </AnimatedBox>
        <AnimatedBox
          component="p"
          direction="up"
          delay={0.12}
          sx={{
            mt: 2,
            mb: 0,
            color: "primary.main",
            fontSize: { xs: 18, sm: 28 },
            fontWeight: 800,
            letterSpacing: 0,
          }}
        >
          {profile.role}
        </AnimatedBox>
        <AnimatedBox
          component="p"
          direction="up"
          delay={0.22}
          sx={{
            mt: 2,
            mb: 0,
            maxWidth: 650,
            color: "text.secondary",
            fontSize: 18,
            lineHeight: 2,
            textAlign: "center",
          }}
        >
          {profile.summary}
        </AnimatedBox>
        <Box
          sx={{
            mt: 4,
            display: "flex",
            flexWrap: "wrap",
            justifyContent: "center",
            gap: 1.5,
          }}
        >
          <CButton component="a" href="#projects" color="primary">
            View Projects
          </CButton>

          <CButton
            component="a"
            href="#contact"
            variant="outlined"
            color="primary"
            sx={{ bgcolor: "background.paper" }}
          >
            Contact Me
          </CButton>
        </Box>
      </Box>
    </Box>
  );
}
