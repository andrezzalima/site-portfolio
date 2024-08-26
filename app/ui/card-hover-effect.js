import { cn } from "@/lib/utils";
import { AnimatePresence, motion } from "framer-motion";
import Link from "next/link";
import { useState } from "react"; 

export const HoverEffect = ({ items, className }) => {
  let [hoveredIndex, setHoveredIndex] = useState(null);

  return (
    <div
      className={cn(
        "grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-x-8 gap-y-12 py-10", 
        className
      )}
    >
      {items.map((item, idx) => (
        <Link
          href={item?.link}
          key={item?.link}
          className="relative group block p-4 h-full w-full" 
          onMouseEnter={() => setHoveredIndex(idx)}
          onMouseLeave={() => setHoveredIndex(null)}
        >
          <AnimatePresence>
            {hoveredIndex === idx && (
              <motion.span
                className="absolute inset-0 bg-neutral-200 dark:bg-slate-800/[0.8] block rounded-3xl"
                layoutId="hoverBackground"
                initial={{ opacity: 0 }}
                animate={{
                  opacity: 1,
                  transition: { duration: 0.15 },
                }}
                exit={{
                  opacity: 0,
                  transition: { duration: 0.15, delay: 0.2 },
                }}
              />
            )}
          </AnimatePresence>
          <Card>
            <CardImage src={item.image} alt={item.title} />
            <CardTitle>{item.title}</CardTitle>
          </Card>
        </Link>
      ))}
    </div>
  );
};

export const Card = ({ className, children }) => {
  return (
    <div
      className={cn(
        "rounded-2xl h-full w-full md:min-h-[350px] p-6 overflow-hidden border border-transparent dark:border-white/[0.2] group-hover:border-slate-700 relative z-20", // Aumenta o padding e define uma altura mínima maior
        className
      )}
    >
      <div className="relative z-50">
        <div className="p-4">{children}</div>
      </div>
    </div>
  );
};

export const CardImage = ({ src, alt, className }) => {
  return (
    <img
      src={src}
      alt={alt}
      className={cn("w-full h-auto object-cover rounded-lg", className)}
    />
  );
};

export const CardTitle = ({ className, children }) => {
  return (
    <a className={cn("text-zinc-100 font-bold tracking-wide text-lg", className)}> 
      {children}
    </a>
  );
};


