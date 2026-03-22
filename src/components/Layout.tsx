import { ReactNode } from 'react';
import Navbar from './Navbar';
import Footer from './Footer';

interface LayoutProps {
  children: ReactNode;
}

export default function Layout({ children }: LayoutProps) {
  return (
    <div className="min-h-screen flex flex-col relative bg-cave-950 text-stone-200 selection:bg-fire-glow/30 selection:text-fire-light">
      
      {/* Ambient Cave Background Lighting */}
      <div className="fixed inset-0 overflow-hidden pointer-events-none z-0">
        <div className="absolute top-[-20%] left-[-10%] w-[800px] h-[800px] bg-fire-base/5 rounded-full blur-[120px] mix-blend-screen"></div>
        <div className="absolute bottom-[-20%] right-[-10%] w-[600px] h-[600px] bg-fire-glow/5 rounded-full blur-[100px] mix-blend-screen"></div>
      </div>
      
      <div className="vignette-overlay"></div>
      <div className="grain-overlay"></div>
      <Navbar />
      <main className="flex-grow relative z-10">
        {children}
      </main>
      <Footer />
    </div>
  );
}

