import { MapPin, Navigation } from 'lucide-react';
import { motion } from 'motion/react';

export function Location() {
  const address = "105 Rue du Général de Gaulle, 68660 Rombach-le-Franc";
  const googleMapsUrl = `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(address)}`;

  return (
    <section className="py-16 px-4 bg-white">
      <div className="max-w-4xl mx-auto">
        <motion.h2 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-3xl md:text-4xl text-center text-primary mb-12"
        >
          Où nous trouver
        </motion.h2>
        
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="bg-gradient-to-br from-secondary/50 to-secondary/30 p-8 md:p-12 rounded-xl border border-border shadow-lg text-center"
        >
          <div className="flex justify-center mb-6">
            <div className="w-16 h-16 rounded-full bg-accent/30 flex items-center justify-center">
              <MapPin className="w-8 h-8 text-accent" />
            </div>
          </div>
          
          <h3 className="text-2xl text-primary mb-4">Boulangerie Kissy Damien</h3>
          <p className="text-lg text-foreground mb-8">
            105 Rue du Général de Gaulle<br />
            68660 Rombach-le-Franc
          </p>
          
          <a
            href={googleMapsUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 bg-primary hover:bg-primary/90 text-primary-foreground px-8 py-4 rounded-full transition-all shadow-md hover:shadow-lg hover:scale-105"
          >
            <Navigation className="w-5 h-5" />
            <span>Obtenir l'itinéraire</span>
          </a>
        </motion.div>
      </div>
    </section>
  );
}
