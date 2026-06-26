import { Clock, Phone } from 'lucide-react';
import { motion } from 'motion/react';

export function Contact() {
  return (
    <section className="py-16 px-4 bg-secondary/30">
      <div className="max-w-4xl mx-auto">
        <motion.h2 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-3xl md:text-4xl text-center text-primary mb-12"
        >
          Horaires & Contact
        </motion.h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* Horaires */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="bg-white p-8 rounded-lg border border-border shadow-md"
          >
            <div className="flex items-center gap-3 mb-4">
              <div className="w-12 h-12 rounded-full bg-accent/20 flex items-center justify-center">
                <Clock className="w-6 h-6 text-accent" />
              </div>
              <h3 className="text-2xl text-primary">Horaires</h3>
            </div>
            <div className="space-y-2 text-foreground">
              <p className="text-lg">Ouvert le matin</p>
              <p className="text-lg">Fermeture à <span className="font-medium text-primary">13h</span></p>
            </div>
          </motion.div>

          {/* Contact */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="bg-white p-8 rounded-lg border border-border shadow-md"
          >
            <div className="flex items-center gap-3 mb-4">
              <div className="w-12 h-12 rounded-full bg-accent/20 flex items-center justify-center">
                <Phone className="w-6 h-6 text-accent" />
              </div>
              <h3 className="text-2xl text-primary">Téléphone</h3>
            </div>
            <a 
              href="tel:0389589064" 
              className="text-xl text-foreground hover:text-accent transition-colors inline-block"
            >
              03 89 58 90 64
            </a>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
