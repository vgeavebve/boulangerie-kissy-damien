import { Users } from 'lucide-react';
import { motion } from 'motion/react';

const team = [
  {
    name: "Damien",
    role: "Artisan Boulanger",
    description: "Le maître de l'art de la boulangerie"
  },
  {
    name: "Nadine",
    role: "Service",
    description: "Accueil chaleureux et conseil"
  },
  {
    name: "Christelle",
    role: "Service",
    description: "À votre écoute chaque matin"
  }
];

export function Team() {
  return (
    <section className="py-16 px-4 bg-gradient-to-b from-secondary/40 to-background">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <div className="flex justify-center mb-4">
            <div className="w-14 h-14 rounded-full bg-accent/30 flex items-center justify-center">
              <Users className="w-7 h-7 text-accent" />
            </div>
          </div>
          <h2 className="text-3xl md:text-4xl text-primary mb-3">
            Notre équipe
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Des artisans passionnés à votre service
          </p>
        </motion.div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {team.map((member, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.15 }}
              className="bg-white p-8 rounded-lg border border-border shadow-md hover:shadow-xl transition-all hover:scale-105"
            >
              <div className="text-center">
                <div className="w-20 h-20 rounded-full bg-gradient-to-br from-accent/30 to-accent/10 flex items-center justify-center mx-auto mb-4">
                  <span className="text-3xl text-accent font-medium">
                    {member.name.charAt(0)}
                  </span>
                </div>
                <h3 className="text-2xl text-primary mb-2">
                  {member.name}
                </h3>
                <p className="text-accent mb-3 font-medium">
                  {member.role}
                </p>
                <p className="text-muted-foreground">
                  {member.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
