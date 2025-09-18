import React, { useState } from "react";

function ScrollButton({ blocksRef }) {
  const [currentIndex, setCurrentIndex] = useState(0);

  const scrollToNext = () => {
    
    if (!blocksRef?.current || blocksRef.current.length === 0) return;

    let nextIndex = currentIndex + 1;

    
    if (nextIndex >= blocksRef.current.length) {
      nextIndex = 0;
    }

    const nextBlock = blocksRef.current[nextIndex];

    if (nextBlock) {
      nextBlock.scrollIntoView({ behavior: "smooth" });
      setCurrentIndex(nextIndex);
    }
  };

  return (
    <section className="fixed bottom-10 right-10 z-40">
      <button
        onClick={scrollToNext}
        className="px-5 h-13 bg-white text-primary hover:opacity-80 transition-all duration-300"
      >
        Discover
      </button>
    </section>
  );
}

export default ScrollButton;
