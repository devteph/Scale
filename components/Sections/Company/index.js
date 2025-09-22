import React, { useEffect, useRef, forwardRef } from "react";
import Image from "next/image";

const Company = forwardRef((props, ref) => {
  const wordsRef = useRef([]);
  const paragraphRefs = useRef([]);

  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = document.body.scrollTop || document.documentElement.scrollTop;
      const viewportHeight = window.innerHeight;
      const isMobile = window.innerWidth < 768; // breakpoint mobile

      // Valores para desktop
      const visibleStart = viewportHeight * 0.40; 
      const visibleEnd = viewportHeight * 0.60;  
      const center = viewportHeight * 0.5;

      wordsRef.current.forEach((el) => {
        if (!el) return;

        const elTop = el.offsetTop - scrollTop;
        const elMiddle = elTop + el.offsetHeight / 2;

        if (isMobile) {
          // Mobile: siempre visible
          el.style.opacity = 1;

          // Solo cambiar color al hacer scroll cerca del centro
          if (elMiddle >= center - 50 && elMiddle <= center + 50) {
            el.classList.add("text-primary");
            el.classList.remove("text-secondary");
          } else {
            el.classList.add("text-secondary");
            el.classList.remove("text-primary");
          }
        } else {
          // Desktop: efecto completo con fade
          if (elMiddle >= visibleStart && elMiddle <= visibleEnd) {
            el.classList.add("text-primary", "opacity-100");
            el.classList.remove("text-secondary", "opacity-0");
            el.style.opacity = 1;
          } else {
            el.classList.add("text-secondary", "opacity-0");
            el.classList.remove("text-primary", "opacity-100");
            el.style.opacity = 0;
          }
        }
      });

      // Desktop: primera línea visible al inicio del scroll
      if (!isMobile) {
        const firstParagraphEl = paragraphRefs.current[0];
        if (firstParagraphEl) {
          const componentTop = ref.current.offsetTop;
          if (scrollTop <= componentTop) {
            const firstParagraphWords = firstParagraphEl.querySelectorAll("span");
            firstParagraphWords.forEach((el) => {
              el.style.opacity = 1;
              el.classList.add("text-primary");
              el.classList.remove("text-secondary");
            });
          }
        }

        // Desktop: última línea visible al final del scroll
        const lastParagraphEl = paragraphRefs.current[paragraphRefs.current.length - 1];
        if (lastParagraphEl) {
          const componentBottom = ref.current.offsetTop + ref.current.offsetHeight;
          if (scrollTop + viewportHeight >= componentBottom) {
            const lastParagraphWords = lastParagraphEl.querySelectorAll("span");
            lastParagraphWords.forEach((el) => {
              el.style.opacity = 1;
              el.classList.add("text-primary");
              el.classList.remove("text-secondary");
            });
          }
        }
      }
    };

    document.body.addEventListener("scroll", handleScroll, { passive: true });
    handleScroll();

    return () => document.body.removeEventListener("scroll", handleScroll);
  }, [ref]);

  const paragraphs = [
    "Superior datacenters of wholesale megawatt power.",
    "Engineered for elite performance, security, reliability and massive scale.",
    "Keenly constructed and managed by talented experts.",
    "Future-built for rapid deployment, growth and cost limitations.",
    "Purpose build for hyperscaled needs.",
    "Positioned at the forefront of liquid cooling.",
  ];

  let wordCounter = 0;

  return (
    <section
      ref={ref}
      className="pt-14 wide:pt-0 wide:min-h-screen px-7.5 grid grid-cols-5 wide:grid-cols-12 gap-x-7.5 wide:gap-10"
    >
      <div className="wide:py-[20%] wide:sticky top-0 h-[22rem] wide:h-screen col-span-5 flex justify-center items-center">
        <Image
          src={"/assets/image1.svg"}
          alt="Logo"
          width={165}
          height={30}
          className="object-cover w-full h-full relative"
        />
      </div>
      <div className="py-24 wide:py-[65%] wide:col-start-7 col-span-5 flex flex-col min-h-screen gap-y-28 wide:gap-y-20">
        {paragraphs.map((p, i) => (
          <p
            key={i}
            ref={(el) => (paragraphRefs.current[i] = el)}
            className={`${i === 0 ? "wide:text-50" : "wide:text-30"} text-24 leading-snug`}
          >
            {p.split(" ").map((word) => {
              const index = wordCounter++;
              return (
                <span
                  key={index}
                  ref={(el) => (wordsRef.current[index] = el)}
                  className="text-secondary transition-opacity duration-500 mr-3 inline-block opacity-0"
                >
                  {word}
                </span>
              );
            })}
          </p>
        ))}
      </div>
    </section>
  );
});

Company.displayName = "Company";

export default Company;
