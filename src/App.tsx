import { useState } from 'react';
import { Language } from './types';
import { Header } from './components/Header';
import { ProjectsGrid } from './components/ProjectsGrid';
import { Footer } from './components/Footer';

function App() {
  const [language, setLanguage] = useState<Language>('pt-BR');

  return (
    <div className="min-h-screen flex flex-col bg-white">
      <Header 
        language={language}
        onLanguageChange={setLanguage}
      />

      <main className="flex-1 w-full py-12">
        <ProjectsGrid language={language} />
      </main>

      <Footer language={language} />
    </div>
  );
}

export default App;