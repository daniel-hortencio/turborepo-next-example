export const website_routes = (path?: string) => [
  {
    label: "Início",
    href: "#init",
    isActive: () => path === "/",
  },
  {
    label: "Como funciona",
    href: "#how-it-works",
    isActive: () => false,
  },
  {
    label: "Api",
    href: "#api",
    isActive: () => false,
  },
  {
    label: "Planos",
    href: "#plans",
    isActive: () => false,
  },
];
