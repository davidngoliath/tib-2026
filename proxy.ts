import createMiddleware from "next-intl/middleware";
import { routing } from "./i18n/routing";

// Redirects `/` → `/en`, handles locale prefixes, and detects preferred locale.
export default createMiddleware(routing);

export const config = {
  matcher: ["/((?!api|_next|_vercel|.*\\..*).*)"],
};
