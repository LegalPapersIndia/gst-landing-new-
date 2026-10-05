

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Plus } from "lucide-react";
import { faqs } from "../data";
import faqImage from "../assets/faq1.png";

export default function FAQ() {
  const [open, setOpen] = useState(0);

  return (
    <section className="relative overflow-hidden bg-white py-14 sm:py-16 lg:py-20">
      {/* Dotted Background */}
      <div
        className="pointer-events-none absolute inset-0 opacity-40"
        style={{
          backgroundImage:
            "radial-gradient(circle, rgba(10,20,40,0.14) 1px, transparent 1px)",
          backgroundSize: "22px 22px",
        }}
      />

     <div className="relative mx-auto max-w-[1400px] px-5 lg:px-8">
        <div className="grid grid-cols-1 items-center gap-10 lg:grid-cols-[1.1fr_0.9fr] lg:gap-14 xl:gap-16">
          
          {/* ================= LEFT - FAQ ================= */}
          <div className="order-1 w-full">
            {/* Heading */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
             <p className="text-center font-mono text-xl font-extrabold uppercase tracking-[0.2em] text-gold-500 lg:text-left">
  FAQ
</p>

              <h2 className="mt-3 text-center font-display text-3xl font-bold leading-tight text-black sm:text-4xl lg:text-left">
                Frequently Asked Questions
              </h2>
            </motion.div>

            {/* FAQ Box */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.15 }}
              className="mt-8 space-y-3"
            >
              {faqs.map((item, i) => {
                const isOpen = open === i;

                return (
                  <div key={item.q} className="overflow-hidden rounded-xl">
                    {/* Question */}
                    <button
                      onClick={() => setOpen(isOpen ? -1 : i)}
                      className={`flex w-full items-center justify-between gap-4 px-4 py-4 text-left transition-all duration-300 sm:px-5 sm:py-5 ${
                        isOpen
                          ? "bg-blue-600 shadow-md"
                          : "bg-blue-600 hover:bg-blue-800"
                      }`}
                    >
                      <span className="font-display text-base font-bold leading-snug text-white sm:text-lg">
                        {item.q}
                      </span>

                      <Plus
                        className={`h-5 w-5 shrink-0 text-white transition-transform duration-300 sm:h-6 sm:w-6 ${
                          isOpen ? "rotate-45" : ""
                        }`}
                      />
                    </button>

                    {/* Answer */}
                    <AnimatePresence initial={false}>
                      {isOpen && (
                        <motion.div
                          initial={{ height: 0, opacity: 0 }}
                          animate={{ height: "auto", opacity: 1 }}
                          exit={{ height: 0, opacity: 0 }}
                          transition={{
                            duration: 0.3,
                            ease: "easeInOut",
                          }}
                          className="overflow-hidden bg-white"
                        >
                          <p className="px-4 py-4 text-sm leading-relaxed text-black sm:px-5 sm:py-5 sm:text-base">
                            {item.a}
                          </p>
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </div>
                );
              })}
            </motion.div>
          </div>

          {/* ================= RIGHT - IMAGE ================= */}
          <motion.div
            initial={{ opacity: 0, x: 30, scale: 0.96 }}
            whileInView={{ opacity: 1, x: 0, scale: 1 }}
            viewport={{ once: true }}
            transition={{
              duration: 0.7,
              ease: "easeOut",
            }}
            className="
              order-2
              flex
              w-full
              items-end
              justify-center
              lg:justify-end
            "
          >
            <motion.img
              src={faqImage}
              alt="Frequently asked questions"
              loading="lazy"
              animate={{ y: [0, -6, 0] }}
              transition={{
                duration: 4,
                repeat: Infinity,
                ease: "easeInOut",
              }}
              className="
                h-auto
                w-full
                max-w-[260px]
                object-contain
                drop-shadow-[0_20px_30px_rgba(10,20,40,0.14)]
                sm:max-w-[300px]
                md:max-w-[330px]
                lg:max-w-[350px]
                xl:max-w-[370px]
              "
            />
          </motion.div>
        </div>
      </div>
    </section>
  );
}