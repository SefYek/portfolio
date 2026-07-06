import { SiteFooter } from "@/src/components/layout/site-footer";
import { SiteHeader } from "@/src/components/layout/site-header";
import { AboutSection } from "@/src/features/profile/components/about-section";
import { ContactSection } from "@/src/features/profile/components/contact-section";
import { HeroSection } from "@/src/features/profile/components/hero-section";
import { ProjectsSection } from "@/src/features/profile/components/projects-section";
import { SkillsSection } from "@/src/features/profile/components/skills-section";
import { Box } from "@mui/material";

export function ProfilePage() {
  return (
    <>
      <SiteHeader />
      <Box
        component="main"
        sx={{
          px: 5,
        }}
      >
        <HeroSection />
        <AboutSection />
        <SkillsSection />
        <ProjectsSection />
        <ContactSection />
      </Box>
      <SiteFooter />
    </>
  );
}
