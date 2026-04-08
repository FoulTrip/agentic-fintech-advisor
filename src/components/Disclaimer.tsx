import React from 'react';

const Disclaimer = () => {
  return (
    <footer className="fixed bottom-0 w-full bg-red-950/20 border-t border-red-900/50 p-2 z-50 backdrop-blur-sm">
      <p className="text-[10px] text-red-400 text-center uppercase tracking-widest font-bold">
        ADVERTENCIA: Esta es una herramienta de simulación. Los datos presentados son ficticios y no constituyen asesoramiento financiero. No se utiliza dinero real.
      </p>
    </footer>
  );
};

export default Disclaimer;