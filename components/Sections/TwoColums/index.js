import { useEffect, useRef } from 'react';

export default function RightColumnContent() {
  const paragraphsRef = useRef([]);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          const target = entry.target;
          if (entry.isIntersecting) {
            target.classList.remove('text-secondary');
            target.classList.add('text-primary');
          } else {
            target.classList.remove('text-primary');
            target.classList.add('text-secondary');
          }
        });
      },
      {
        threshold: 0.5,
        rootMargin: '-50% 0px 10px 0px',
      }
    );
  
    paragraphsRef.current.forEach((el) => {
      if (el) observer.observe(el);
    });
  
    return () => {
      paragraphsRef.current.forEach((el) => {
        if (el) observer.unobserve(el);
      });
    };
  }, []);
  

  return (
    <section
        className='py-10 px-7.5 wide:px-10 wide:py-40 grid grid-cols-5 wide:grid-cols-12 gap-x-7.5 gap-y-20 wide:gap-10'
    >
        <div
            className='col-span-5 wide:col-span-6'
            >
            <div
                className='text-24 wide:text-30'
            >
                <p
                    className=''
            >
                    About
                </p>
            </div>
        </div>
        <div className="wide:col-start-7 col-span-5">
            <div className="wide:pb-20 space-y-5 wide:space-y-10">
                <p
                  className="text-24 wide:text-30 transition-colors duration-500"
                >
                  At Scale Datacenters, we specialize in high-performance hyperscale data center infrastructure for wholesale, enterprise-level clients. Optimized for the most demanding workloads, including AI, machine learning, and cloud-native applications.
                </p>
                <p
                  className="text-24 wide:text-30 transition-colors duration-500"
                >
                  Our world-class facilities are engineered for maximum density, energy efficiency and modular scalability. Enabling rapid deployment and seamless expansion.
                </p>
                <p
                  className="text-24 wide:text-30 transition-colors duration-500"
                >
                  With robust connectivity, industry-leading PUE metrics, and a focus on renewable energy integration, we provide mission-critical environments that meet and exceed the requirements of today’s top-tier hyperscalers and digital enterprises.
                </p>
            </div>
        </div>
    </section>
  );
}
