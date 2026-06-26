import { Star } from 'lucide-react';
import { motion } from 'motion/react';

export function Hero() {
  return (
    <section className="relative min-h-[60vh] flex items-center justify-center overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <img
          src="https://images.unsplash.com/photo-1623334044303-241021148842?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxhcnRpc2FuJTIwYmFrZXJ5JTIwYnJlYWQlMjBjcm9pc3NhbnR8ZW58MXx8fHwxNzgyNDU5MDc5fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
          alt="Boulangerie artisanale"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/50 to-background/90" />
      </div>

      {/* Content */}
      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="relative z-10 text-center px-4 py-12 max-w-4xl mx-auto"
      >
        <h1 className="text-4xl md:text-6xl text-white mb-3 tracking-wide">
          Boulangerie Kissy Damien
        </h1>
        <p className="text-xl md:text-2xl text-[#F5EFE7] mb-6 font-light italic">
          Artisan Boulanger depuis toujours
        </p>
        
        {/* Google Rating Badge */}
        <motion.div 
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.3, duration: 0.5 }}
          className="inline-flex items-center gap-2 bg-white/95 backdrop-blur-sm px-6 py-3 rounded-full shadow-lg"
        >
          <div className="flex items-center gap-1">
            {[...Array(5)].map((_, i) => (
              <Star key={i} className="w-5 h-5 fill-[#D4AF37] text-[#D4AF37]" />
            ))}
          </div>
          <div className="h-5 w-px bg-border mx-1" />
          <span className="font-medium text-foreground">4,9/5</span>
          <span className="text-muted-foreground">· 75 avis Google</span>
        </motion.div>
      </motion.div>
    </section>
  );
}
