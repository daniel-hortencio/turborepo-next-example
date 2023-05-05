export const dashboard_routes = (path?: string) => [
  {
    label: 'Início',
    href: '/dashboard',
    isActive: () => path === '/dashboard'
  },
  {
    label: 'Processos Judiciais',
    href: '/dashboard/processos',
    isActive: () => path.startsWith('/dashboard/processos')
  },
  {
    label: 'Planos & faturas',
    href: '/dashboard/planos-e-faturas',
    isActive: () => path.startsWith('/dashboard/planos-e-faturas')
  }
]
