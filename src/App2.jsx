import React, { useEffect, useRef } from 'react';

function App() {
  const sectionRefs = useRef([]);

  useEffect(() => {
    const handleScroll = () => {
      const currentScroll = window.pageYOffset;
      const windowHeight = window.innerHeight;

      const currentSectionIndex = sectionRefs.current.findIndex(sectionRef => {
        const sectionTop = sectionRef.offsetTop;
        const sectionHeight = sectionRef.clientHeight;
        return currentScroll >= sectionTop && currentScroll < sectionTop + sectionHeight;
      });

      if (currentSectionIndex !== -1 && currentScroll > sectionRefs.current[currentSectionIndex].offsetTop + 0.8 * windowHeight) {
        const nextSectionIndex = Math.min(currentSectionIndex + 1, sectionRefs.current.length - 1);
        sectionRefs.current[nextSectionIndex].scrollIntoView({ behavior: 'smooth' });
      }
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <div>
      <section ref={el => (sectionRefs.current[0] = el)} className="h-screen bg-gray-200">
        <h1 className="text-4xl text-center">Section 1</h1>
      </section>
      <section ref={el => (sectionRefs.current[1] = el)} className="h-screen bg-gray-300">
        <h1 className="text-4xl text-center">Section 2</h1>
      </section>
      <section ref={el => (sectionRefs.current[2] = el)} className="h-screen bg-gray-400">
        <h1 className="text-4xl text-center">Section 3</h1>
      </section>
    </div>
  );
}

export default App;
