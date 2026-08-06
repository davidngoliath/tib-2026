// Brave Camp registration mechanics. Update once a year. All translatable
// page copy (headlines, chips, CTAs) lives in copy.ts under braveCamp*.
import type { Locale } from "@/i18n/routing";

export const registration = {
  isOpen: false,
  registerHref: "#", // TODO registration URL
  closedCopy: {
    en: {
      title: "Registration Closed",
      message: "registration closed for 2026 session, check back for 2027 registration.",
      closeLabel: "Close registration message",
      closeButton: "Close",
    },
    es: {
      title: "Inscripción cerrada",
      message: "la inscripción para la sesión 2026 está cerrada, vuelve pronto para la inscripción de 2027.",
      closeLabel: "Cerrar mensaje de inscripción",
      closeButton: "Cerrar",
    },
  } satisfies Record<Locale, {
    title: string;
    message: string;
    closeLabel: string;
    closeButton: string;
  }>,
};
