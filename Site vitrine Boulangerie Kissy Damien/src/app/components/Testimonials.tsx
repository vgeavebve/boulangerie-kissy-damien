import { Quote } from 'lucide-react';
import { motion } from 'motion/react';

const testimonials = [
  {
    text: "Tout est toujours au top !",
    author: "Client fidèle"
  },
  {
    text: "Les beignets y sont délicieux",
    author: "Amateur de pâtisserie"
  },
  {
    text: "Succulents gâteaux qui ont régalé tout le monde",
    author: "Pour un événement"
  }
];

export function Testimonials() {
  return (
    <section className="py-16 px-4 bg-white">
      <div className="max-w-6xl mx-auto">
        <motion.h2 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-3xl md:text-4xl text-center text-primary mb-12"
        >
          Ce que disent nos clients
        </motion.h2>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.15 }}
              className="bg-secondary/50 p-6 rounded-lg border border-border shadow-sm hover:shadow-md transition-shadow"
            >
              <Quote className="w-8 h-8 text-accent mb-4" />
              <p className="text-lg mb-4 italic text-foreground">
                "{testimonial.text}"
              </p>
              <p className="text-sm text-muted-foreground">
                — {testimonial.author}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
