import { motion } from 'framer-motion';
import { Button } from '@/components/ui/button';

export const metadata = {
  title: 'Assistente IA — O melhor funcionário',
  description: 'Automatiza tarefas, cria conteúdo e trabalha 24h por dia. A tua equipa, potenciada por inteligência artificial.',
};

export default function HomePage() {
  return (
    <div className="min-h-screen bg-white text-gray-900 flex flex-col">
      <section className="flex flex-col items-center justify-center text-center px-6 py-32">
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-6xl font-bold mb-6 tracking-tight"
        >
          Assistente IA — O melhor funcionário.
        </motion.h1>
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2, duration: 0.6 }}
          className="text-xl text-gray-600 max-w-2xl mb-10"
        >
          Automatiza tarefas, cria conteúdo e trabalha 24h por dia. A tua equipa, potenciada por inteligência artificial.
        </motion.p>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4, duration: 0.6 }}
        >
          <Button className="bg-blue-600 hover:bg-blue-700 text-white text-lg px-10 py-6 rounded-2xl shadow-md">
            Experimentar Gratuitamente
          </Button>
        </motion.div>
      </section>

      <div className="border-t border-gray-200 w-full" />

      <section className="px-6 py-24 bg-white">
        <div className="max-w-6xl mx-auto text-center">
          <h2 className="text-4xl font-semibold mb-16 tracking-tight">Soluções simples. Resultados poderosos.</h2>
          <div className="grid md:grid-cols-3 gap-12">
            <Feature title="Geração de Conteúdo" description="Cria posts, emails e descrições de produto com um clique." />
            <Feature title="Automações Inteligentes" description="Deixa o teu bot trabalhar por ti e poupa horas de tarefas repetitivas." />
            <Feature title="Integração Total" description="Liga-te às tuas plataformas favoritas e mantém tudo sincronizado." />
          </div>
        </div>
      </section>

      <section className="px-6 py-32 text-center bg-gray-50">
        <h3 className="text-4xl font-bold mb-6">Pronto para testar o futuro?</h3>
        <p className="text-gray-600 mb-8 text-lg">Começa grátis e vê como a IA pode impulsionar o teu negócio.</p>
        <Button className="bg-blue-600 hover:bg-blue-700 text-white text-lg px-10 py-6 rounded-2xl shadow-md">
          Começar Agora
        </Button>
      </section>

      <footer className="py-10 text-center text-gray-500 border-t border-gray-200 text-sm">
        <p>© {new Date().getFullYear()} Assistente IA — O melhor funcionário. Todos os direitos reservados.</p>
      </footer>
    </div>
  );
}

function Feature({ title, description }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      viewport={{ once: true }}
      className="bg-gray-50 p-10 rounded-2xl shadow-sm border border-gray-100 hover:shadow-lg transition"
    >
      <h4 className="text-xl font-semibold mb-3 text-blue-600">{title}</h4>
      <p className="text-gray-600 text-base">{description}</p>
    </motion.div>
  );
}
