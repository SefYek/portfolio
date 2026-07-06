import type { ReactNode } from "react";
import Box from "@mui/material/Box";
import type { BoxProps } from "@mui/material/Box";

type AnimationDirection = "up" | "down" | "left" | "right";

type AnimatedBoxProps = BoxProps & {
  children?: ReactNode;
  direction?: AnimationDirection;
  distance?: number;
  duration?: number;
  delay?: number;
};

const directionOffsets: Record<AnimationDirection, { x: number; y: number }> = {
  up: { x: 0, y: 1 },
  down: { x: 0, y: -1 },
  left: { x: 1, y: 0 },
  right: { x: -1, y: 0 },
};

export function AnimatedBox({
  children,
  direction = "up",
  distance = 24,
  duration = 0.8,
  delay = 0,
  sx,
  ...props
}: AnimatedBoxProps) {
  const offset = directionOffsets[direction];

  return (
    <Box
      {...props}
      sx={{
        "--animated-box-x": `${offset.x * distance}px`,
        "--animated-box-y": `${offset.y * distance}px`,
        animation: `animatedBoxIn ${duration}s ease-out ${delay}s both`,
        "@keyframes animatedBoxIn": {
          "0%": {
            opacity: 0,
            transform:
              "translate3d(var(--animated-box-x), var(--animated-box-y), 0)",
          },
          "100%": {
            opacity: 1,
            transform: "translate3d(0, 0, 0)",
          },
        },
        ...sx,
      }}
    >
      {children}
    </Box>
  );
}
