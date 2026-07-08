"use client";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import ButtonBase from "@mui/material/ButtonBase";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import { navItems } from "@/src/features/profile/data/profile";
import { useScrollTrigger } from "@mui/material";

export function SiteHeader() {
  const trigger = useScrollTrigger({
    disableHysteresis: true,
    threshold: 10,
  });
  return (
    <AppBar
      component="header"
      position="sticky"
      elevation={trigger ? 5 : 0}
      sx={{
        top: 0,
        width: "100%",
        background:
          "linear-gradient(135deg, rgba(19, 119, 220, 0.09), rgba(236,240,247,0.78) 42%, rgba(255,255,255,0.92))",
        color: "text.primary",
        border: "none",
        borderBottom: "1px solid",
        borderColor: "divider",
        backdropFilter: "blur(18px)",
        px: 1,
      }}
    >
      <Box sx={{ position: "relative", zIndex: 1 }}>
        <Toolbar
          component="nav"
          disableGutters
          sx={{
            minHeight: { xs: 68, sm: 72 },
            gap: 2,
            justifyContent: "space-between",
            px: { xs: 1, md: 5 },
          }}
        >
          <Typography
            component="a"
            href="#intro"
            sx={{
              minWidth: 42,
              height: 42,
              display: "grid",
              placeItems: "center",
              borderRadius: 3,
              bgcolor: "primary.main",
              color: "primary.contrastText",
              fontSize: 14,
              fontWeight: 900,
              whiteSpace: "nowrap",
            }}
          >
            AM
          </Typography>

          <Box
            sx={{
              display: "flex",
              alignItems: "center",
              gap: 0.5,
              overflowX: "auto",
              border: "1px solid",
              borderColor: "divider",
              borderRadius: 999,
              bgcolor: "rgba(255,255,255,0.78)",
              boxShadow: "0 12px 40px rgba(63, 191, 175, 0.15)",
              p: 0.5,
            }}
          >
            {navItems.map((item) => (
              <ButtonBase
                key={item.href}
                component="a"
                href={item.href}
                sx={{
                  px: { xs: 1.5, md: 3 },
                  py: 0.75,
                  borderRadius: 999,
                  color: "text.secondary",
                  fontSize: { xs: 12, md: 14 },
                  whiteSpace: "nowrap",
                  transition: "all 0.25s ease",
                  "&:hover": {
                    bgcolor: "primary.main",
                    color: "primary.contrastText",
                    boxShadow: "0 0px 100px 50px #327ae740",
                    scale: "1.05",
                  },
                }}
              >
                {item.label}
              </ButtonBase>
            ))}
          </Box>
          <Typography
            component="a"
            href="#contact"
            sx={{
              display: { xs: "none", sm: "inline-flex" },
              alignItems: "center",
              minHeight: 42,
              px: 2,
              border: "1px solid",
              borderColor: "divider",
              borderRadius: 999,
              bgcolor: "rgba(255,255,255,0.78)",
              fontSize: 13,
              fontWeight: 800,
              whiteSpace: "nowrap",
            }}
          >
            Available
          </Typography>
        </Toolbar>
      </Box>
    </AppBar>
  );
}
