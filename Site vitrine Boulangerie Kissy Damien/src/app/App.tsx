import { useRef } from "react";
import { Star, Phone, MapPin, Clock } from "lucide-react";
import { motion } from "motion/react";

const IMG = {
  hero: "https://images.unsplash.com/photo-1705972018470-a89eda1c6ce4?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1920",
  bread: "https://images.unsplash.com/photo-1549413468-cd78edb7e75c?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=800",
  croissants: "https://images.unsplash.com/photo-1623334044303-241021148842?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=800",
  beignets: "https://images.unsplash.com/photo-1543876604-b8ac0e7ded00?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=800",
  patisserie: "https://images.unsplash.com/photo-1583338917451-face2751d8d5?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=800",
  cakes: "https://images.unsplash.com/photo-1726950189914-8fe1016eb9c7?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=800",
  viennoiserie: "https://images.unsplash.com/photo-1691480162735-9b91238080f6?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=800",
  bakerHands: "https://images.unsplash.com/photo-1595801106239-faefa2cdcf75?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=800",
  sourdough: "https://images.unsplash.com/photo-1613396874083-2d5fbe59ae79?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=800",
  breadStore: "https://images.unsplash.com/photo-1536782896453-61d09f3aaf3e?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=800",
};

const GRAIN =
  "url(\"data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.85' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)'/%3E%3C/svg%3E\")";

const PRODUCTS = [
  { image: IMG.sourdough, title: "Pains Artisanaux", desc: "Pétris et façonnés à la main chaque matin", wide: true },
  { image: IMG.viennoiserie, title: "Croissants", desc: "Au beurre, feuilletés avec soin", wide: false },
  { image: IMG.beignets, title: "Beignets", desc: "Les incontournables de la maison", wide: false },
  { image: IMG.patisserie, title: "Tartes & Fruits", desc: "Fraîcheur et gourmandise réunies", wide: false },
  { image: IMG.cakes, title: "Gâteaux de Fête", desc: "Pour tous vos moments de célébration", wide: false },
  { image: IMG.croissants, title: "Viennoiseries", desc: "Le petit matin que vous méritez", wide: false },
];

const TESTIMONIALS = [
  { text: "Tout est toujours au top !", author: "Client fidèle" },
  { text: "Les beignets y sont délicieux", author: "Amateur de pâtisserie" },
  { text: "Succulents gâteaux qui ont régalé tout le monde", author: "Pour un événement" },
];

const TEAM = [
  { name: "Damien", role: "Artisan Boulanger", desc: "Le maître des fours, passionné du pain depuis toujours", image: IMG.bakerHands },
  { name: "Nadine", role: "Accueil & Conseil", desc: "Accueil chaleureux et sourire du matin", image: IMG.breadStore },
  { name: "Christelle", role: "Accueil & Service", desc: "À votre écoute, chaque jour avec bienveillance", image: IMG.bread },
];

function TiltCard({ image, title, desc }: { image: string; title: string; desc: string }) {
  const ref = useRef<HTMLDivElement>(null);

  return (
    <div
      ref={ref}
      onMouseMove={(e) => {
        const el = ref.current;
        if (!el) return;
        const r = el.getBoundingClientRect();
        const x = (e.clientX - r.left) / r.width - 0.5;
        const y = (e.clientY - r.top) / r.height - 0.5;
        el.style.transform = `perspective(900px) rotateY(${x * 15}deg) rotateX(${-y * 15}deg) scale3d(1.04,1.04,1.04)`;
      }}
      onMouseLeave={() => {
        const el = ref.current;
        if (el) el.style.transform = "perspective(900px) rotateY(0deg) rotateX(0deg) scale3d(1,1,1)";
      }}
      className="relative rounded-2xl overflow-hidden cursor-pointer shadow-xl h-full"
      style={{ transition: "transform 0.18s ease", transformStyle: "preserve-3d", willChange: "transform" }}
    >
      <img src={image} alt={title} className="w-full h-full object-cover" />
      <div className="absolute inset-0 bg-gradient-to-t from-[#2A1508]/90 via-[#2A1508]/20 to-transparent" />
      <div
        className="absolute inset-0 transition-opacity duration-500 opacity-0 hover:opacity-100"
        style={{ background: "linear-gradient(135deg, rgba(212,175,55,0.14) 0%, transparent 55%)" }}
      />
      <div className="absolute bottom-0 p-5 text-white" style={{ transform: "translateZ(30px)" }}>
        <h3 className="text-xl font-bold mb-1 drop-shadow">{title}</h3>
        <p className="text-sm text-white/70">{desc}</p>
      </div>
    </div>
  );
}

export default function App() {
  return (
    <div className="min-h-screen bg-background overflow-x-hidden">

      {/* ── HERO ── */}
      <section className="relative min-h-screen flex flex-col items-center justify-center overflow-hidden">
        {/* Animated zoom background */}
        <div className="absolute inset-0 overflow-hidden">
          <motion.img
            src={IMG.hero}
            alt="Boulangerie"
            className="w-full h-full object-cover"
            initial={{ scale: 1.08 }}
            animate={{ scale: 1.18 }}
            transition={{ duration: 28, repeat: Infinity, repeatType: "reverse", ease: "easeInOut" }}
          />
          {/* Film-grain texture */}
          <div
            className="absolute inset-0 opacity-[0.07] mix-blend-overlay pointer-events-none"
            style={{ backgroundImage: GRAIN, backgroundSize: "128px 128px" }}
          />
          {/* Rich gradient overlay */}
          <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-black/40 to-[#3D2817]/85" />
        </div>

        {/* Content */}
        <motion.div
          initial={{ opacity: 0, y: 36 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, ease: "easeOut" }}
          className="relative z-10 text-center px-6 max-w-4xl mx-auto"
        >
          {/* Ornamental line */}
          <motion.div
            initial={{ scaleX: 0, opacity: 0 }}
            animate={{ scaleX: 1, opacity: 1 }}
            transition={{ duration: 0.9, delay: 0.3 }}
            className="flex items-center justify-center gap-3 mb-8"
          >
            <div className="h-px w-16 bg-[#D4AF37]/60" />
            <span className="text-[#D4AF37] text-[0.65rem] tracking-[0.35em] uppercase font-medium">
              Rombach-le-Franc · 68660
            </span>
            <div className="h-px w-16 bg-[#D4AF37]/60" />
          </motion.div>

          <h1 className="text-5xl md:text-7xl lg:text-8xl text-white font-bold leading-[1.05] mb-5">
            Boulangerie
            <br />
            <span className="text-[#D4AF37]">Kissy Damien</span>
          </h1>

          <p className="text-xl md:text-2xl text-white/80 mb-10 italic font-light tracking-wide">
            Artisan Boulanger depuis toujours
          </p>

          {/* Google badge */}
          <motion.div
            initial={{ opacity: 0, scale: 0.85 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.55, duration: 0.5 }}
            className="inline-flex items-center gap-3 bg-white/95 backdrop-blur-md px-6 py-3.5 rounded-full shadow-2xl"
          >
            <svg className="w-5 h-5 shrink-0" viewBox="0 0 24 24">
              <path fill="#4285F4" d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z" />
              <path fill="#34A853" d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" />
              <path fill="#FBBC05" d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z" />
              <path fill="#EA4335" d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z" />
            </svg>
            <div className="flex gap-0.5">
              {[...Array(5)].map((_, i) => (
                <Star key={i} className="w-4 h-4 fill-[#D4AF37] text-[#D4AF37]" />
              ))}
            </div>
            <span className="font-bold text-foreground text-lg">4,9</span>
            <span className="text-muted-foreground text-sm">· 75 avis Google</span>
          </motion.div>
        </motion.div>

        {/* Scroll cue */}
        <motion.div
          className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-1.5 text-white/50"
          animate={{ y: [0, 8, 0] }}
          transition={{ duration: 2.2, repeat: Infinity, ease: "easeInOut" }}
        >
          <span className="text-[0.6rem] tracking-[0.25em] uppercase">Découvrir</span>
          <div className="w-px h-8 bg-white/30" />
        </motion.div>
      </section>

      {/* ── NOS CRÉATIONS ── */}
      <section className="py-24 px-4 md:px-8 bg-background">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-14"
          >
            <span className="text-[#D4AF37] text-[0.65rem] tracking-[0.35em] uppercase font-medium">
              Fait avec passion · Chaque matin
            </span>
            <h2 className="text-4xl md:text-5xl text-primary mt-2 mb-5">Nos Créations</h2>
            <div className="flex items-center justify-center gap-3">
              <div className="h-px w-10 bg-[#D4AF37]/50" />
              <div className="w-1.5 h-1.5 rounded-full bg-[#D4AF37]" />
              <div className="h-px w-10 bg-[#D4AF37]/50" />
            </div>
          </motion.div>

          {/* Mixed grid: first card wide, rest 2-col then 3-col */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
            {/* Row 1: wide card + 1 card */}
            <motion.div
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0 }}
              className="md:col-span-2 h-72 md:h-96"
            >
              <TiltCard image={PRODUCTS[0].image} title={PRODUCTS[0].title} desc={PRODUCTS[0].desc} />
            </motion.div>
            <motion.div
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.08 }}
              className="h-72 md:h-96"
            >
              <TiltCard image={PRODUCTS[1].image} title={PRODUCTS[1].title} desc={PRODUCTS[1].desc} />
            </motion.div>
            {/* Row 2: 3 equal cards */}
            {PRODUCTS.slice(2).map((p, i) => (
              <motion.div
                key={p.title}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.09 + 0.12 }}
                className="h-64"
              >
                <TiltCard image={p.image} title={p.title} desc={p.desc} />
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ── ARTISAN SAVOIR-FAIRE ── */}
      <section className="relative py-28 px-4 bg-[#3D2817] overflow-hidden">
        {/* Grain */}
        <div
          className="absolute inset-0 opacity-[0.035] pointer-events-none"
          style={{ backgroundImage: GRAIN, backgroundSize: "128px 128px" }}
        />
        {/* Gold accent line top */}
        <div className="absolute top-0 inset-x-0 h-1 bg-gradient-to-r from-transparent via-[#D4AF37]/60 to-transparent" />

        <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-16 items-center relative z-10">
          {/* Image composition */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.9 }}
            className="relative"
          >
            {/* Corner accent */}
            <div className="absolute -top-5 -left-5 w-20 h-20 border-l-2 border-t-2 border-[#D4AF37]/50 rounded-tl-xl z-20" />
            <div className="absolute -bottom-5 -right-5 w-20 h-20 border-r-2 border-b-2 border-[#D4AF37]/50 rounded-br-xl z-20" />

            <img
              src={IMG.bakerHands}
              alt="Artisan boulanger"
              className="w-full h-[420px] md:h-[520px] object-cover rounded-2xl shadow-2xl"
            />

            {/* Floating viennoiserie card */}
            <motion.div
              initial={{ opacity: 0, scale: 0.8, rotate: -4 }}
              whileInView={{ opacity: 1, scale: 1, rotate: -4 }}
              viewport={{ once: true }}
              transition={{ delay: 0.4, duration: 0.6 }}
              className="absolute -bottom-8 -right-6 w-48 h-48 rounded-xl overflow-hidden shadow-2xl border-4 border-[#D4AF37]/40 z-10"
            >
              <img src={IMG.viennoiserie} alt="Croissant" className="w-full h-full object-cover" />
              <div className="absolute inset-0 bg-[#3D2817]/20" />
            </motion.div>
          </motion.div>

          {/* Text */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.9 }}
            className="text-white"
          >
            <span className="text-[#D4AF37] text-[0.65rem] tracking-[0.35em] uppercase font-medium">
              Notre savoir-faire
            </span>
            <h2 className="text-4xl md:text-5xl mt-3 mb-6 leading-tight font-bold">
              L'art du pain,
              <br />
              <span className="text-[#D4AF37]">transmis avec soin</span>
            </h2>
            <p className="text-white/70 text-lg leading-relaxed mb-5">
              Chaque matin, Damien et son équipe se lèvent avant l'aube pour façonner à la main des
              pains, viennoiseries et pâtisseries d'exception. Un savoir-faire artisanal transmis avec
              passion, du levain au four.
            </p>
            <p className="text-white/55 leading-relaxed mb-10">
              Situés au cœur de Rombach-le-Franc, nous mettons un point d'honneur à utiliser des
              ingrédients de qualité pour vous offrir des produits authentiques, faits chaque jour avec amour.
            </p>
            {/* Stats */}
            <div className="flex gap-10">
              {[["75+", "avis 5★"], ["4,9/5", "note Google"], ["∞", "depuis toujours"]].map(([n, l]) => (
                <div key={l} className="text-center">
                  <div className="text-3xl text-[#D4AF37] font-bold">{n}</div>
                  <div className="text-white/45 text-xs mt-1 tracking-wide uppercase">{l}</div>
                </div>
              ))}
            </div>
          </motion.div>
        </div>
        <div className="absolute bottom-0 inset-x-0 h-1 bg-gradient-to-r from-transparent via-[#D4AF37]/40 to-transparent" />
      </section>

      {/* ── TÉMOIGNAGES ── */}
      <section className="py-24 px-4 bg-[#FAF6F1]">
        <div className="max-w-6xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-14"
          >
            <span className="text-[#D4AF37] text-[0.65rem] tracking-[0.35em] uppercase font-medium">
              Ils nous font confiance
            </span>
            <h2 className="text-4xl md:text-5xl text-primary mt-2">Ce que disent nos clients</h2>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {TESTIMONIALS.map((t, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.12 }}
                className="bg-white rounded-2xl p-8 shadow-md hover:shadow-xl transition-all duration-400 border border-[#D4AF37]/10 relative overflow-hidden group"
              >
                {/* Giant decorative quote */}
                <div className="absolute -top-6 -left-2 text-[9rem] leading-none text-[#D4AF37]/8 font-bold select-none pointer-events-none group-hover:text-[#D4AF37]/15 transition-colors duration-500">
                  "
                </div>
                <div className="flex gap-0.5 mb-5">
                  {[...Array(5)].map((_, j) => (
                    <Star key={j} className="w-4 h-4 fill-[#D4AF37] text-[#D4AF37]" />
                  ))}
                </div>
                <p className="text-xl text-foreground italic mb-6 leading-relaxed relative z-10">
                  "{t.text}"
                </p>
                <div className="flex items-center gap-2 text-muted-foreground text-sm">
                  <div className="w-8 h-px bg-[#D4AF37]" />
                  {t.author}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ── NOTRE ÉQUIPE ── */}
      <section className="py-24 px-4 bg-background">
        <div className="max-w-6xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-14"
          >
            <span className="text-[#D4AF37] text-[0.65rem] tracking-[0.35em] uppercase font-medium">
              Derrière chaque produit
            </span>
            <h2 className="text-4xl md:text-5xl text-primary mt-2">Notre équipe</h2>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {TEAM.map((m, i) => (
              <motion.div
                key={m.name}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.12 }}
                className="group relative rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-shadow duration-500 cursor-pointer"
                style={{ transformStyle: "preserve-3d" }}
              >
                <div className="h-80 overflow-hidden">
                  <img
                    src={m.image}
                    alt={m.name}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                  />
                </div>
                <div className="absolute inset-0 bg-gradient-to-t from-[#3D2817]/95 via-[#3D2817]/40 to-transparent" />
                {/* Golden shimmer on hover */}
                <div
                  className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500"
                  style={{ background: "linear-gradient(160deg, rgba(212,175,55,0.1) 0%, transparent 50%)" }}
                />
                <div className="absolute bottom-0 p-6 text-white w-full">
                  <h3 className="text-2xl font-bold mb-0.5">{m.name}</h3>
                  <p className="text-[#D4AF37] text-sm font-medium mb-2">{m.role}</p>
                  <p className="text-white/65 text-sm leading-snug max-h-0 overflow-hidden group-hover:max-h-12 transition-all duration-500 ease-out">
                    {m.desc}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ── HORAIRES & CONTACT ── */}
      <section className="py-24 px-4 bg-[#6B4423] relative overflow-hidden">
        <div
          className="absolute inset-0 opacity-[0.04] pointer-events-none"
          style={{ backgroundImage: GRAIN, backgroundSize: "128px 128px" }}
        />
        <div className="max-w-5xl mx-auto relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-14"
          >
            <span className="text-[#D4AF37] text-[0.65rem] tracking-[0.35em] uppercase font-medium">
              Venez nous rendre visite
            </span>
            <h2 className="text-4xl text-white mt-2">Horaires & Contact</h2>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {/* Hours */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 border border-white/15"
            >
              <div className="flex items-center gap-3 mb-7">
                <div className="w-10 h-10 rounded-full bg-[#D4AF37]/20 flex items-center justify-center">
                  <Clock className="w-5 h-5 text-[#D4AF37]" />
                </div>
                <h3 className="text-2xl text-white font-semibold">Horaires d'ouverture</h3>
              </div>
              <div className="space-y-2.5">
                {[
                  ["Lundi", "6h00 – 13h00"],
                  ["Mardi", "6h00 – 13h00"],
                  ["Mercredi", "6h00 – 13h00"],
                  ["Jeudi", "6h00 – 13h00"],
                  ["Vendredi", "6h00 – 13h00"],
                  ["Samedi", "6h00 – 13h00"],
                  ["Dimanche", "6h00 – 13h00"],
                ].map(([day, hours]) => (
                  <div key={day} className="flex justify-between items-center py-2 border-b border-white/10 last:border-0">
                    <span className="text-white/75">{day}</span>
                    <span className="text-[#D4AF37] font-semibold tracking-wide">{hours}</span>
                  </div>
                ))}
              </div>
              <p className="text-white/40 text-xs mt-5 italic">Ouvert tous les matins jusqu'à 13h</p>
            </motion.div>

            {/* Contact */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 border border-white/15 flex flex-col gap-7"
            >
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-[#D4AF37]/20 flex items-center justify-center">
                  <MapPin className="w-5 h-5 text-[#D4AF37]" />
                </div>
                <h3 className="text-2xl text-white font-semibold">Nous trouver</h3>
              </div>

              <div className="text-white/75 leading-relaxed">
                <p className="font-semibold text-white text-lg">105 Rue du Général de Gaulle</p>
                <p>68660 Rombach-le-Franc</p>
                <p className="text-white/45 text-sm mt-1">Alsace · Haut-Rhin</p>
              </div>

              <a
                href="tel:+33389589064"
                className="flex items-center gap-4 group"
              >
                <div className="w-12 h-12 rounded-full bg-[#D4AF37]/15 flex items-center justify-center group-hover:bg-[#D4AF37]/30 transition-colors duration-300">
                  <Phone className="w-5 h-5 text-[#D4AF37]" />
                </div>
                <div>
                  <p className="text-white/50 text-xs uppercase tracking-wider mb-0.5">Téléphone</p>
                  <p className="text-white text-xl font-semibold group-hover:text-[#D4AF37] transition-colors duration-300">
                    03 89 58 90 64
                  </p>
                </div>
              </a>

              <a
                href="https://maps.google.com/?q=105+Rue+du+Général+de+Gaulle,+68660+Rombach-le-Franc"
                target="_blank"
                rel="noopener noreferrer"
                className="mt-auto inline-flex items-center justify-center gap-2.5 bg-[#D4AF37] hover:bg-[#C8A430] text-[#3D2817] font-bold py-4 px-6 rounded-xl transition-all duration-300 hover:shadow-lg hover:shadow-[#D4AF37]/30 hover:-translate-y-0.5 active:translate-y-0"
              >
                <MapPin className="w-4 h-4" />
                Obtenir l'itinéraire
              </a>
            </motion.div>
          </div>
        </div>
      </section>

      {/* ── FOOTER ── */}
      <footer className="bg-[#2A1508] py-12 px-4">
        <div className="max-w-5xl mx-auto">
          <div className="flex flex-col md:flex-row items-center justify-between gap-6">
            <div className="text-center md:text-left">
              <h3 className="text-2xl text-white font-bold">
                Boulangerie <span className="text-[#D4AF37]">Kissy Damien</span>
              </h3>
              <p className="text-white/40 text-sm mt-1">
                105 Rue du Général de Gaulle · 68660 Rombach-le-Franc
              </p>
            </div>
            <div className="flex items-center gap-6 text-white/60 text-sm">
              <a href="tel:+33389589064" className="flex items-center gap-2 hover:text-white transition-colors">
                <Phone className="w-4 h-4 text-[#D4AF37]" />
                03 89 58 90 64
              </a>
              <div className="flex gap-0.5">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-3.5 h-3.5 fill-[#D4AF37] text-[#D4AF37]" />
                ))}
              </div>
              <span>4,9/5</span>
            </div>
          </div>
          <div className="mt-8 pt-6 border-t border-white/8 text-center text-white/25 text-xs">
            © {new Date().getFullYear()} Boulangerie Kissy Damien · Artisan Boulanger · Rombach-le-Franc
          </div>
        </div>
      </footer>
    </div>
  );
}
