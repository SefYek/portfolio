import { ProfilePage } from "@/src/features/profile/components/profile-page";
import { Box } from "@mui/material";

export default function Home() {
  return (
    <Box
      sx={{
        minHeight: "100vh",
        p: { xs: 0, md: 3 },
      }}
    >
      <Box
        className="mesh-shell"
        sx={{
          minHeight: "calc(100vh - 32px)",
          overflow: "clip",
          position: "relative",
          borderRadius: { xs: "none", md: 5 },
          borderColor: "divider",
          boxShadow: "0px 0px 15px 1px rgba(15, 23, 42, .5)",
          background:
            "linear-gradient(135deg, rgba(255,255,255,0.88), rgba(236,240,247,0.72) 42%, rgba(95, 152, 238, 0.42))",
        }}
      >
        <Box sx={{ position: "relative", zIndex: 1 }}>
          <ProfilePage />
        </Box>
      </Box>
    </Box>
  );
}
