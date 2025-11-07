import './globals.css';

export const metadata = {
  title: 'Assistente IA — O melhor funcionário',
  description: 'Automatiza tarefas, cria conteúdo e trabalha 24h por dia. A tua equipa, potenciada por inteligência artificial.',
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="pt">
      <body>{children}</body>
    </html>
  );
}
