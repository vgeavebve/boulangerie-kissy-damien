import { Heart } from 'lucide-react';

export function Footer() {
  return (
    <footer className="bg-primary text-primary-foreground py-8 px-4">
      <div className="max-w-6xl mx-auto text-center">
        <p className="flex items-center justify-center gap-2 text-sm md:text-base opacity-90">
          Boulangerie Kissy Damien · Fait avec <Heart className="w-4 h-4 fill-accent text-accent" /> à Rombach-le-Franc
        </p>
        <p className="text-xs md:text-sm opacity-75 mt-2">
          © 2026 Tous droits réservés
        </p>
      </div>
    </footer>
  );
}
