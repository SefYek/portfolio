"use client";
import Box from "@mui/material/Box";
import Chip from "@mui/material/Chip";
import { Section } from "@/src/components/ui/section";
import { profile } from "@/src/features/profile/data/profile";
import { Stack, Typography } from "@mui/material";
import { useState } from "react";

type Skill = {
  name: string;
  description: string;
};

export function SkillsSection() {
  const [selectedSkill, setSelectedSkill] = useState<Skill | null>(null);

  return (
    <Section id="skills" eyebrow="Skills" title="Tools I Work With">
      <Stack
        direction="row"
        sx={{
          mb: 1.5,
          gap: 1.5,
          justifyContent: "space-between",
          alignItems: "flex-start",
        }}
      >
        <Box
          sx={{
            display: "flex",
            flexWrap: "wrap",
            gap: 1.5,
            maxWidth: { xs: "auto", md: 350 },
            borderColor: "divider",
            p: 1,
          }}
        >
          {profile.skills.map((skill: Skill) => (
            <Chip
              key={skill.name}
              label={skill.name}
              variant="outlined"
              onMouseEnter={() => setSelectedSkill(skill)}
              onMouseLeave={() => setSelectedSkill(null)}
              sx={{
                minHeight: 44,
                bgcolor: "rgba(255,255,255,0.72)",
                borderColor: "divider",
                color: "text.secondary",
                fontWeight: 800,
                px: 1.5,
                transform: "translateY(0) scale(1)",
                transition:
                  "transform 0.3s ease, box-shadow 0.3s ease , scale .5s ease , background-color 0.1s ease",
                boxShadow: "0 0 3px 1px black",
                "&:hover": {
                  bgcolor: "primary.main",
                  boxShadow: "0 2px 15px 5px #2d2d2d66",
                  transform: "translateY(-4px) scale(1.07)",
                  color: "primary.contrastText",
                  cursor: "pointer",
                },
              }}
            />
          ))}
        </Box>

        <Box
          sx={{
            display: { xs: "none", md: "block" },
            mt: 0,
            p: 2,
            minHeight: 80,
            width: "100%",
            textAlign: "right",
            opacity: selectedSkill ? 1 : 0,
            transition: "all 0.5s ease",
            transform: selectedSkill ? "translateY(0)" : "translateY(20px)",
          }}
        >
          {selectedSkill ? (
            <>
              <Typography
                sx={{
                  fontSize: 24,
                  fontWeight: 700,
                }}
              >
                {selectedSkill.name}
              </Typography>
              <Typography variant="body2" color="text.secondary">
                {selectedSkill.description}
              </Typography>
            </>
          ) : (
            <Typography color="text.secondary"></Typography>
          )}
        </Box>
      </Stack>
    </Section>
  );
}
