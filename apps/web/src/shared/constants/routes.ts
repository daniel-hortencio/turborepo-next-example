export const website_routes = (path?: string) => [
  {
    label: "Início",
    href: "/#inicio",
    isActive: () => path === "/",
  },
  {
    label: "Como funciona",
    href: "/#como-funciona",
    isActive: () => false,
  },
  {
    label: "Api",
    href: "/#api",
    isActive: () => false,
  },
  {
    label: "Planos",
    href: "/#planos",
    isActive: () => false,
  },
  {
    label: "Cobertura",
    href: '/cobertura-dos-tribunais',
    isActive: () => path === "/cobertura-dos-tribunais",
  }
];
