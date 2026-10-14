// Conteúdo do site separado da interface: editar texto não exige mexer em componentes.
export const profile = {
  name: "Lorenzo Zagallo",
  role: "Engenheiro de software full-stack",
  summary:
    "Construo APIs em .NET e interfaces em React, e ligo os dois com IA: busca semântica, RAG e agentes.",
  status:
    "Este site está em construção. Em breve: vitrine de projetos e um chat com IA que responde perguntas sobre meu currículo.",
  links: [
    { label: "GitHub", href: "https://github.com/Lorenzo-Zagallo" },
    { label: "LinkedIn", href: "https://www.linkedin.com/in/lorenzo-zagallo-07654a2b9/" },
  ],
} as const;
