import { ProfilePage } from "@/src/features/profile/components/profile-page";
import { Box } from "@mui/material";

export default function Home() {
  return (
    <Box
      sx={{
        minHeight: "100vh",
        p: { xs: 1.25, md: 3 },
      }}
    >
      <Box
        sx={{
          minHeight: "calc(100vh - 32px)",
          overflow: "clip",
          position: "relative",
          borderRadius: { xs: 3, md: 5 },
          borderColor: "divider",
          boxShadow: "0px 0px 15px 1px rgba(15, 23, 42, .5)",
          background:
            "linear-gradient(135deg, rgba(255,255,255,0.92), rgba(236,240,247,0.78) 42%, rgba(19, 119, 220, 0.56))",
          "&::before": {
            content: '""',
            position: "absolute",
            inset: 0,
            pointerEvents: "none",
            background:
              "radial-gradient(circle at 12% 18%, rgba(19, 119, 220, 0.49), transparent 30%), radial-gradient(circle at 82% 8%, rgba(23,23,23,0.08), transparent 26%)",
          },
        }}
      >
        <ProfilePage />
      </Box>
    </Box>
  );
}
