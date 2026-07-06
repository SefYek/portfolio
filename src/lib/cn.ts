import type { ClassValue } from "@/src/lib/types";

export function cn(...classes: ClassValue[]) {
  return classes.filter(Boolean).join(" ");
}
