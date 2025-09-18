// import React, { useEffect, useRef } from "react";
// import Image from "next/image";

// export default function Locations() {
//   const wordsRef = useRef([]);

//   useEffect(() => {
//     const handleScroll = () => {
//       const scrollTop = document.body.scrollTop || document.documentElement.scrollTop;
//       const middle = window.innerHeight / 2;
//       const range = 100; 

//       wordsRef.current.forEach((el) => {
//         if (!el) return;
//         const elTop = el.offsetTop;
//         const elMiddle = elTop - scrollTop + el.offsetHeight / 2;

//         if (elMiddle >= middle - range && elMiddle <= middle + range) {
//           el.classList.add("text-primary");
//           el.classList.remove("text-secondary");
//         } else {
//           el.classList.add("text-secondary");
//           el.classList.remove("text-primary");
//         }
//       });
//     };

//     document.body.addEventListener("scroll", handleScroll, { passive: true });
//     handleScroll(); 

//     return () => document.body.removeEventListener("scroll", handleScroll);
//   }, []);

//   const paragraphs = [
//     "Superior datacenters of wholesale megawatt power.",
//     "Engineered for elite performance, security, reliability and massive scale.",
//     "Keenly constructed and managed by talented experts.",
//     "Future-built for rapid deployment, growth and cost limitations.",
//     "Outfitted with the latest processing technology.",
//     "Positioned at the forefront of liquid cooling.",
//     "Serving the Fortune 500, 100, and even 10.",
//   ];

//   let wordCounter = 0; 

//   return (
//     <section 
//         className="pt-14 wide:pt-0 wide:min-h-screen px-7.5 grid grid-cols-5 wide:grid-cols-12 gap-7.5 wide:gap-10"
//     >
//         <div 
//             className="wide:py-[20%] wide:sticky top-0 h-[22rem] wide:h-screen col-span-5"
//         >
//             <Image
//                 src={"/assets/image1.svg"}
//                 alt="Logo"
//                 width={165}
//                 height={30}
//                 className="object-cover w-full h-full relative"
//             />
//         </div>
//         <div 
//             className="wide:col-start-7 col-span-5"
//         >
//         <div 
//             className="py-24 wide:pt-[25rem] wide:pb-[15rem] min-h-screen flex flex-col gap-y-24 wide:gap-y-60"
//         >
//           {paragraphs.map((p, i) => (
//             <p key={i} 
//               className={`${i === 0 ? "text-30 wide:text-60" : "text-30 wide:text-30"} leading-snug`}
//             >
//               {p.split(" ").map((word) => {
//                 const index = wordCounter++;
//                 return (
//                   <span
//                     key={index}
//                     ref={(el) => (wordsRef.current[index] = el)}
//                     className="text-secondary transition-colors duration-200 mr-4 inline-block"
//                   >
//                     {word}
//                   </span>
//                 );
//               })}
//             </p>
//           ))}
//         </div>
//       </div>
//     </section>
//   );
// }


import React, { useEffect, useRef } from "react";
import Image from "next/image";

export default function Locations() {
  const wordsRef = useRef([]);

  useEffect(() => {
    const handleScroll = () => {
      const middle = window.innerHeight / 2;
      const range = 100;

      wordsRef.current.forEach((el) => {
        if (!el) return;
        const rect = el.getBoundingClientRect();
        const elMiddle = rect.top + rect.height / 2;

        if (elMiddle >= middle - range && elMiddle <= middle + range) {
          el.classList.add("text-primary");
          el.classList.remove("text-secondary");
        } else {
          el.classList.add("text-secondary");
          el.classList.remove("text-primary");
        }
      });
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    handleScroll(); 
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const paragraphs = [
    "Superior datacenters of wholesale megawatt power.",
    "Engineered for elite performance, security, reliability and massive scale.",
    "Keenly constructed and managed by talented experts.",
    "Future-built for rapid deployment, growth and cost limitations.",
    "Outfitted with the latest processing technology.",
    "Positioned at the forefront of liquid cooling.",
    "Serving the Fortune 500, 100, and even 10.",
  ];

  let wordCounter = 0;

  return (
    <section className="pt-14 wide:pt-0 wide:min-h-screen px-7.5 grid grid-cols-5 wide:grid-cols-12 gap-7.5 wide:gap-10">
      <div className="wide:py-[20%] wide:sticky top-0 h-[22rem] wide:h-screen col-span-5">
        <Image
          src={"/assets/image1.svg"}
          alt="Logo"
          width={165}
          height={30}
          className="object-cover w-full h-full relative"
        />
      </div>

      <div className="wide:col-start-7 col-span-5">
        <div className="py-24 wide:pt-[25rem] wide:pb-[15rem] min-h-screen flex flex-col gap-y-24 wide:gap-y-60">
          {paragraphs.map((p, i) => (
            <p key={i} className="leading-snug">
              {p.split(" ").map((word) => {
                const index = wordCounter++;
                return (
                  <span
                    key={index}
                    ref={(el) => (wordsRef.current[index] = el)}
                    className={`inline-block mr-4 transition-colors duration-200 ${
                      i === 0 ? "text-24 wide:text-50" : "text-24 wide:text-30"
                    } text-secondary`}
                  >
                    {word}
                  </span>
                );
              })}
            </p>
          ))}
        </div>
      </div>
    </section>
  );
}
