import { createNavigation } from "next-intl/navigation";
import { routing } from "./routing";

// Locale-aware Link/navigation — auto-prefixes the current locale onto internal
// hrefs (e.g. "/our-mission" → "/es/our-mission").
export const { Link, redirect, usePathname, useRouter, getPathname } =
  createNavigation(routing);
