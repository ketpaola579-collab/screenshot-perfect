import { createFileRoute } from "@tanstack/react-router";
import { useEffect, useRef, useState } from "react";
import { Check, ChevronDown, ChevronLeft, ChevronRight, Lock, Play, ShieldCheck, Star, X, Zap } from "lucide-react";

import hero from "@/assets/hero-mom-baby-v2.png.asset.json";
import av1 from "@/assets/avatar-mariana-v2.jpg.asset.json";
import av2 from "@/assets/avatar-camila-v2.webp.asset.json";
import av3 from "@/assets/avatar-juliana-v2.webp.asset.json";
import av4 from "@/assets/avatar-fernanda-v2.webp.asset.json";
import c1 from "@/assets/conteudo-1.png.asset.json";
import c2 from "@/assets/conteudo-2.png.asset.json";
import c3 from "@/assets/conteudo-3.png.asset.json";
import c4 from "@/assets/conteudo-4.png.asset.json";
import c5 from "@/assets/conteudo-5.png.asset.json";
import c6 from "@/assets/conteudo-6.png.asset.json";
import c7 from "@/assets/conteudo-sos-primeiros-socorros.png.asset.json";
import c8 from "@/assets/recipe-sopinha.png.asset.json";
import b1 from "@/assets/bonus-300-receitas.png.asset.json";
import b2 from "@/assets/bonus-cardapios.png.asset.json";
import b3 from "@/assets/bonus-primeiros-socorros.png.asset.json";
import b4 from "@/assets/bonus-imunologica.png.asset.json";
import b5 from "@/assets/bonus-sopinhas.png.asset.json";
import b6 from "@/assets/bonus-congelamento.png.asset.json";
import b7 from "@/assets/bonus-lista-compras.png.asset.json";
import b8 from "@/assets/bonus-cortes-seguros.png.asset.json";
import d1 from "@/assets/depoimento-1.png.asset.json";
import d2 from "@/assets/depoimento-2.png.asset.json";
import d3 from "@/assets/depoimento-3.png.asset.json";
import d4 from "@/assets/depoimento-4.png.asset.json";
import d5 from "@/assets/depoimento-5.png.asset.json";
import d6 from "@/assets/depoimento-6.png.asset.json";
import dani from "@/assets/dani-perfil.png.asset.json";
import video from "@/assets/guia-do-bebe-por-dentro.webm.asset.json";
import poster from "@/assets/guia-video-primeiro-frame.jpg.asset.json";

const CHECKOUT_URL = "https://checkout.guiacompleto.shop/VCCL1O8SD451";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Guia do Bebê Saudável — 300 recetitas por edad + 8 bonos" },
      {
        name: "description",
        content:
          "Recetas organizadas por edad, menús semanales y lista de compras para una alimentación complementaria más organizada y ligera.",
      },
      { property: "og:title", content: "Guia do Bebê Saudável — 300 recetitas por edad + 8 bonos" },
      {
        property: "og:description",
        content: "No tienes que decidir sola qué darle a tu bebé todos los días.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: Index,
});

function goToOffer() {
  document.getElementById("oferta")?.scrollIntoView({ behavior: "smooth", block: "start" });
}

function goToCheckout() {
  window.location.href = CHECKOUT_URL + window.location.search;
}

function CTA({ children, onClick = goToOffer }: { children: React.ReactNode; onClick?: () => void }) {
  return (
    <button
      type="button"
      onClick={onClick}
      className="animate-cta-pulse bg-cta shadow-cta mx-auto flex w-full max-w-md items-center justify-center gap-2 rounded-2xl px-6 py-4 text-center text-base font-extrabold uppercase tracking-wide text-primary-foreground transition hover:brightness-110 active:scale-[0.98] sm:text-lg"
    >
      {children}
      <ChevronRight className="h-5 w-5 shrink-0" />
    </button>
  );
}

function Section({ children, className = "", id }: { children: React.ReactNode; className?: string; id?: string }) {
  return (
    <section id={id} className={`px-5 py-14 sm:py-20 ${className}`}>
      <div className="mx-auto max-w-3xl">{children}</div>
    </section>
  );
}

function Title({ children }: { children: React.ReactNode }) {
  return (
    <h2 className="text-balance text-center text-3xl font-extrabold leading-[1.1] text-primary-deep sm:text-4xl">
      {children}
    </h2>
  );
}

const pains = [
  "Te sientes perdida a la hora de las comidas",
  "Tienes miedo de equivocarte en la alimentación complementaria",
  "Siempre repites las mismas recetas",
  "Vives buscando recetas en internet",
];
const gains = [
  "Nunca más quedarte sin ideas",
  "Saber exactamente qué ofrecer y cuándo ofrecerlo",
  "Más seguridad en cada comida",
  "Una rutina diaria mucho más ligera y segura",
  "La certeza de que estás haciendo lo correcto y lo mejor para tu bebé.",
];
const contents = [
  { img: c1, t: "300 recetitas separadas por edad para no tener más dudas" },
  { img: c2, t: "Menús listos para usar en tu día a día" },
  { img: c3, t: "Lista de compras para orientarte sobre qué comprar y cuándo comprarlo" },
  { img: c4, t: "Aprenderás sobre la ventana inmunológica de tu bebé para introducir los alérgenos en el momento correcto" },
  { img: c5, t: "¿Cómo congelar papillas de la manera correcta? Esto te va a salvar en la organización." },
  { img: c6, t: "Cómo cortar y separar cada comidita en cada etapa. ¡Superimportante!" },
  { img: c7, t: "Cómo actuar en emergencias como atragantamientos y golpes. ¡Es esencial!" },
  { img: c8, t: "Sopitas nutritivas para que, cuando se enferme, se recupere rapidito." },
];
const bonuses = [
  { img: b1, t: "300 Recetitas del Bebé", d: "Recetas organizadas por edad para variar el menú y hacer la alimentación de tu bebé más práctica y nutritiva." },
  { img: b2, t: "Menús Semanales Listos", d: "Planificación completa con menús listos para facilitar la alimentación de tu bebé en cada etapa." },
  { img: b3, t: "SOS Primeros Auxilios", d: "Aprende cómo actuar en casos de atragantamiento, caídas y diversas situaciones de emergencia." },
  { img: b4, t: "Ventana Inmunológica y Alérgenos", d: "Descubre el momento ideal para introducir alimentos alergénicos con más confianza y seguridad." },
  { img: b5, t: "Sopitas Nutritivas", d: "Recetas prácticas y nutritivas de sopitas para variar el menú y hacer las comidas aún más completas." },
  { img: b6, t: "Guía de Congelación", d: "Aprende a guardar, congelar y descongelar las comidas de tu bebé de la manera correcta, conservando el sabor y los nutrientes." },
  { img: b7, t: "Lista de Compras Inteligente", d: "Una lista práctica y organizada con todo lo que necesitas comprar para preparar las comidas de tu bebé sin olvidar nada." },
  { img: b8, t: "Guía de Cortes Seguros", d: "Aprende a cortar los alimentos correctamente para cada edad, reduciendo riesgos y haciendo las comidas más seguras." },
];
const bonusList = [
  "300 Recetitas del Bebé",
  "Menús Semanales Listos",
  "SOS Primeros Auxilios (atragantamientos y emergencias)",
  "Ventana Inmunológica y Alérgenos",
  "Guía de Congelación",
  "Sopitas Nutritivas",
  "Lista de Compras Inteligente",
  "Guía de Cortes Seguros",
];
const testimonials = [d1, d2, d3, d4, d5, d6];
const faqs = [
  { q: "¿Es pago único o suscripción?", a: "Es pago único. Pagas R$ 34,90 una sola vez y tienes acceso de por vida a la aplicación y a todas las actualizaciones futuras, sin mensualidades ni cargos extra." },
  { q: "¿Para qué edad está indicada la aplicación?", a: "La aplicación está indicada para bebés de 6 meses a 3 años, con recetas separadas por edad." },
  { q: "¿Cómo recibo la aplicación?", a: "Después de la compra, recibes un correo con un enlace para acceder a la aplicación con tu correo registrado. Puedes entrar desde el celular, la tablet o la computadora." },
  { q: "¿Las recetas son fáciles de hacer?", a: "Sí. Las recetas fueron pensadas para ser prácticas, con ingredientes sencillos y preparaciones fáciles para el día a día." },
  { q: "¿La aplicación sirve para quien está empezando la alimentación complementaria?", a: "Sí. Además de las recetas, también recibes la guía completa de alimentación complementaria dentro de la app." },
  { q: "¿Necesito imprimir?", a: "No es necesario. La aplicación fue diseñada para consultarse directamente desde el celular, pero también puedes imprimirla si lo prefieres." },
];

function Index() {
  return (
    <main className="overflow-x-hidden bg-background">
      <div className="bg-primary-deep px-4 py-2 text-center text-xs font-bold tracking-wide text-primary-foreground sm:text-sm">
        🔥OFERTA VÁLIDA POR TIEMPO LIMITADO🔥
      </div>

      {/* HERO */}
      <section className="bg-hero px-5 pb-14 pt-8 sm:pt-12">
        <div className="mx-auto max-w-3xl text-center">
          <h1 className="text-balance text-[2rem] font-extrabold leading-[1.05] text-primary-deep sm:text-5xl">
            No tienes que decidir <span className="text-primary">sola</span> qué darle a tu bebé todos los días.
          </h1>
          <p className="mx-auto mt-4 max-w-xl text-pretty text-base leading-relaxed text-muted-foreground sm:text-lg">
            Ten <strong className="text-foreground">recetas organizadas por edad, menús semanales, lista de compras</strong> y un camino sencillo para que la alimentación complementaria sea mucho más organizada y ligera.
          </p>
          <div className="relative mx-auto mt-7 max-w-xl">
            <img src={hero.url} alt="Guía completa para una alimentación complementaria saludable y feliz" className="shadow-soft w-full rounded-3xl border-4 border-card" width={1512} height={1040} />
            <span className="absolute -bottom-4 left-1/2 -translate-x-1/2 whitespace-nowrap rounded-full bg-highlight px-4 py-1.5 text-xs font-extrabold text-primary-deep shadow-md sm:text-sm">
              RECOMENDADO POR NUTRICIONISTAS
            </span>
          </div>
          <div className="mt-10">
            <CTA>Quiero esta guía en mi rutina</CTA>
          </div>
          <div className="mt-5 flex items-center justify-center gap-3">
            <div className="flex -space-x-3">
              {[av1, av2, av3, av4].map((a, i) => (
                <img key={i} src={a.url} alt="" className="h-10 w-10 shrink-0 rounded-full border-2 border-card object-cover" />
              ))}
            </div>
            <div className="text-left">
              <div className="flex items-center gap-1">
                {Array.from({ length: 5 }).map((_, i) => (
                  <Star key={i} className="h-4 w-4 fill-star text-star" />
                ))}
                <span className="ml-1 text-xs font-bold text-foreground">(4.9/5.0)</span>
              </div>
              <p className="text-sm font-semibold text-muted-foreground">+12.493 mamás lo aprobaron</p>
            </div>
          </div>
        </div>
      </section>

      {/* PAIN / GAIN */}
      <Section>
        <Title>¿A ti también te pasa esto en tu día a día de mamá?</Title>
        <ul className="mt-8 grid gap-3 sm:grid-cols-2">
          {pains.map((p) => (
            <li key={p} className="flex items-start gap-3 rounded-2xl border border-destructive/20 bg-card p-4 font-semibold shadow-sm">
              <span className="grid h-7 w-7 shrink-0 place-items-center rounded-full bg-destructive/10 text-destructive"><X className="h-4 w-4" /></span>
              {p}
            </li>
          ))}
        </ul>
        <div className="mt-12">
          <Title>¡No estás sola! Y puedes vivir esta etapa con más seguridad.</Title>
        </div>
        <ul className="mt-8 space-y-3">
          {gains.map((g) => (
            <li key={g} className="flex items-start gap-3 rounded-2xl border border-primary/25 bg-card p-4 font-semibold shadow-sm">
              <span className="grid h-7 w-7 shrink-0 place-items-center rounded-full bg-primary text-primary-foreground"><Check className="h-4 w-4" /></span>
              {g}
            </li>
          ))}
        </ul>
        <div className="mt-10"><CTA>Quiero todos estos beneficios</CTA></div>
      </Section>

      {/* VIDEO */}
      <Section className="bg-secondary">
        <Title>Mira lo fácil que es saber qué preparar para tu bebé todos los días</Title>
        <p className="mx-auto mt-4 max-w-xl text-center text-muted-foreground">
          Dale play y mira cómo puedes consultar recetas, menús y las principales guías de la alimentación complementaria en un solo lugar.
        </p>
        <VideoPlayer />
        <div className="mt-10"><CTA>Quiero esta guía en mi rutina</CTA></div>
      </Section>

      {/* CONTENTS */}
      <Section>
        <Title>Todo lo que necesitas para dejar de improvisar y tener un camino a seguir en la alimentación complementaria</Title>
        <p className="mx-auto mt-4 max-w-xl text-center text-muted-foreground">
          Guía probada y aprobada por miles de mamás que ya pasaron por esta etapa.
        </p>
        <div className="mt-8 grid grid-cols-2 gap-3 sm:gap-5">
          {contents.map((c) => (
            <figure key={c.t} className="overflow-hidden rounded-2xl border border-border bg-card shadow-sm">
              <img src={c.img.url} alt={c.t} loading="lazy" className="aspect-square w-full object-cover" />
              <figcaption className="p-3 text-sm font-semibold leading-snug sm:p-4 sm:text-base">{c.t}</figcaption>
            </figure>
          ))}
        </div>
        <div className="mt-10"><CTA>Quiero las 300 recetitas</CTA></div>
      </Section>

      {/* BONUSES */}
      <Section className="bg-secondary">
        <Title>Todo lo que recibes al comprar hoy</Title>
        <p className="mx-auto mt-4 max-w-xl text-center text-muted-foreground">
          <strong className="text-foreground">8 bonos incluidos</strong> para cubrir todo lo que necesitas en cada momento especial.
        </p>
        <div className="mt-8 space-y-4">
          {bonuses.map((b, i) => (
            <article key={b.t} className="shadow-soft grid grid-cols-[7rem_minmax(0,1fr)] items-center gap-4 rounded-2xl border border-border bg-card p-3 sm:grid-cols-[11rem_minmax(0,1fr)] sm:p-4">
              <img src={b.img.url} alt={b.t} loading="lazy" className="aspect-[5/4] w-full rounded-xl object-cover" />
              <div className="min-w-0">
                <span className="inline-block rounded-full bg-accent px-2.5 py-0.5 text-[11px] font-extrabold tracking-wide text-accent-foreground">
                  BONO {String(i + 1).padStart(2, "0")}
                </span>
                <h3 className="mt-1 text-lg font-extrabold leading-tight text-primary-deep sm:text-xl">{b.t}</h3>
                <p className="mt-1 text-sm leading-snug text-muted-foreground">{b.d}</p>
              </div>
            </article>
          ))}
        </div>
        <div className="mt-10"><CTA>Quiero la app + todos los bonos</CTA></div>
      </Section>

      {/* TESTIMONIALS */}
      <Section>
        <Title>La mejor sensación es abrir el refrigerador y ya saber exactamente qué prepararle a tu bebé 👇</Title>
        <Carousel />
        <div className="mt-10"><CTA>Quiero ser parte de esta comunidad</CTA></div>
      </Section>

      {/* OFFER */}
      <Section id="oferta" className="bg-secondary scroll-mt-4">
        <p className="text-center text-sm font-extrabold tracking-widest text-primary">ELIGE TU ACCESO</p>
        <Title>Asegura tu acceso a la aplicación ahora</Title>
        <div className="bg-offer relative mx-auto mt-10 max-w-md rounded-3xl border-[3px] border-primary p-6 shadow-[var(--shadow-soft)] sm:p-8">
          <span className="absolute -top-4 left-1/2 -translate-x-1/2 rounded-full bg-accent px-5 py-1.5 text-sm font-extrabold tracking-wide text-accent-foreground shadow-md">
            SUPER OFERTA
          </span>
          <h3 className="text-center text-2xl font-extrabold leading-tight text-primary-deep">
            Guía Completa de la Alimentación de tu Bebé + 8 Bonos
          </h3>
          <ul className="mt-5 space-y-2">
            {["Aplicación", "Paso a paso de la alimentación complementaria", "Comunidad de mamás", "Acceso inmediato y de por vida + bonos"].map((x) => (
              <li key={x} className="flex items-start gap-2 font-semibold">
                <Check className="mt-0.5 h-5 w-5 shrink-0 text-primary" /> {x}
              </li>
            ))}
          </ul>
          <div className="mt-6 rounded-2xl bg-muted p-4">
            <p className="text-center text-xs font-extrabold tracking-widest text-primary">BONOS INCLUIDOS</p>
            <ul className="mt-3 space-y-1.5 text-sm">
              {bonusList.map((b) => (
                <li key={b} className="flex items-start gap-2"><span>🎁</span><span className="font-medium">{b}</span></li>
              ))}
            </ul>
          </div>
          <div className="mt-6 text-center">
            <p className="text-muted-foreground">De <span className="line-through">R$ 127,90</span></p>
            <p className="mt-1 text-sm font-bold tracking-wide text-foreground">HOY POR SOLO</p>
            <p className="font-display text-6xl font-extrabold leading-none text-primary">R$ 39,90</p>
            <p className="mt-2 text-sm text-muted-foreground">o 4x de R$ 11,63 con tarjeta</p>
            <p className="mt-3 inline-flex items-center gap-1 rounded-full bg-destructive/10 px-3 py-1 text-sm font-bold text-destructive">
              <Zap className="h-4 w-4" /> 71% OFF — ¡Queda poco tiempo!
            </p>
          </div>
          <div className="mt-6"><CTA onClick={goToCheckout}>Quiero la super oferta ahora</CTA></div>
          <p className="mt-4 flex items-center justify-center gap-1.5 text-center text-xs text-muted-foreground">
            <Lock className="h-3.5 w-3.5" /> Compra segura • Acceso inmediato • Garantía de 7 días
          </p>
        </div>
      </Section>

      {/* ABOUT */}
      <Section>
        <Title>¿QUIÉN ESTÁ DETRÁS DE LA GUÍA?</Title>
        <img src={dani.url} alt="Dani, mamá de Théo y de Mari y creadora de la Guia do Bebê Saudável" loading="lazy" className="shadow-soft mx-auto mt-8 h-44 w-44 rounded-full border-4 border-card object-cover" />
        <div className="mx-auto mt-8 max-w-xl space-y-4 text-pretty leading-relaxed text-muted-foreground">
          <p className="text-center text-lg font-bold text-foreground">Soy Dani, mamá de Théo y de Mari, creadora de la Guia do Bebê Saudável.</p>
          <p>Este proyecto nació con el objetivo de guiarte en esta etapa tan importante, brindándote más seguridad, amor y tranquilidad.</p>
          <p>A lo largo de la creación de la Guía, me di cuenta de que lo que más nos pesa no es solo encontrar una receta. Es tener que pensar en el menú, buscar ideas, organizar las compras, entender qué ofrecer en cada etapa y, además, encajar todo eso en una rutina que ya es agitada.</p>
          <p>Por eso, reuní en un solo lugar <strong className="text-foreground">recetas organizadas por edad, menús semanales, lista de compras y guías prácticas</strong>, para que tengas un camino más sencillo a seguir y no tengas que empezar de cero en cada comida.</p>
          <p className="font-semibold text-primary">Todo pensado para que vivas esta etapa con más confianza, organización y tranquilidad.</p>
        </div>
        <div className="mt-10"><CTA>Quiero recibir todo esto ahora</CTA></div>
      </Section>

      {/* GUARANTEE */}
      <Section className="bg-secondary">
        <div className="mx-auto max-w-md rounded-3xl border-2 border-dashed border-primary bg-card p-8 text-center">
          <div className="mx-auto grid h-24 w-24 place-items-center rounded-full bg-cta text-primary-foreground shadow-cta">
            <div className="leading-none">
              <ShieldCheck className="mx-auto h-6 w-6" />
              <p className="font-display text-3xl font-extrabold">7</p>
              <p className="text-[10px] font-bold tracking-widest">DÍAS</p>
            </div>
          </div>
          <h3 className="mt-5 text-2xl font-extrabold text-primary-deep">Garantía incondicional de 7 días</h3>
          <p className="mt-2 text-muted-foreground">Si no te encanta, te devolvemos el 100% de tu inversión.</p>
        </div>
      </Section>

      {/* FAQ */}
      <Section>
        <Title>¿Todavía tienes alguna duda?</Title>
        <div className="mt-8 space-y-3">
          {faqs.map((f) => (
            <details key={f.q} className="group rounded-2xl border border-border bg-card p-4 shadow-sm open:border-primary/40">
              <summary className="flex cursor-pointer list-none items-center justify-between gap-3 font-bold">
                <span className="min-w-0">{f.q}</span>
                <ChevronDown className="h-5 w-5 shrink-0 text-primary transition group-open:rotate-180" />
              </summary>
              <p className="mt-3 leading-relaxed text-muted-foreground">{f.a}</p>
            </details>
          ))}
        </div>
        <div className="mt-10"><CTA>Quiero conocer la app</CTA></div>
      </Section>

      {/* FOOTER */}
      <footer className="bg-primary-deep px-5 pb-28 pt-12 text-primary-foreground">
        <div className="mx-auto max-w-3xl space-y-6 text-sm">
          <div>
            <p className="font-display text-xl font-extrabold">Guia do Bebê Saudável</p>
            <p className="mt-1 opacity-80">Aplicación digital creada para facilitar la alimentación de tu bebé con practicidad y seguridad.</p>
          </div>
          <div>
            <p className="font-bold">Institucional</p>
            <ul className="mt-1 space-y-1 opacity-80">
              <li><a href="#" className="hover:underline">Política de Privacidad</a></li>
              <li><a href="#" className="hover:underline">Términos de Uso</a></li>
            </ul>
          </div>
          <div>
            <p className="font-bold">Aviso importante</p>
            <p className="mt-1 opacity-80">Este material es informativo y no reemplaza el acompañamiento individual de un pediatra o nutricionista.</p>
          </div>
          <p className="border-t border-primary-foreground/20 pt-4 text-xs opacity-70">© 2026 Guia do Bebê Saudável. Todos los derechos reservados.</p>
        </div>
      </footer>

      <PurchaseToast />
    </main>
  );
}

function VideoPlayer() {
  const ref = useRef<HTMLVideoElement>(null);
  const [playing, setPlaying] = useState(false);
  return (
    <div className="relative mx-auto mt-8 w-full max-w-[300px] rounded-[2.5rem] border-[10px] border-foreground bg-foreground shadow-[var(--shadow-soft)]">
      <video
        ref={ref}
        src={video.url}
        poster={poster.url}
        playsInline
        controls={playing}
        preload="metadata"
        className="aspect-[9/16] w-full rounded-[1.8rem] object-cover"
        onPause={() => setPlaying(false)}
        onPlay={() => setPlaying(true)}
      />
      {!playing && (
        <button
          type="button"
          aria-label="Reproducir video"
          onClick={() => ref.current?.play()}
          className="absolute inset-0 grid place-items-center"
        >
          <span className="bg-cta shadow-cta grid h-20 w-20 animate-cta-pulse place-items-center rounded-full text-primary-foreground">
            <Play className="ml-1 h-9 w-9 fill-current" />
          </span>
        </button>
      )}
    </div>
  );
}

function Carousel() {
  const ref = useRef<HTMLDivElement>(null);
  const [idx, setIdx] = useState(0);
  const scrollTo = (i: number) => {
    const el = ref.current;
    if (!el) return;
    const n = (i + testimonials.length) % testimonials.length;
    const child = el.children[n] as HTMLElement;
    el.scrollTo({ left: child.offsetLeft - el.offsetLeft, behavior: "smooth" });
  };
  return (
    <div className="relative mt-8">
      <div
        ref={ref}
        onScroll={(e) => {
          const el = e.currentTarget;
          const w = (el.children[0] as HTMLElement)?.offsetWidth || 1;
          setIdx(Math.round(el.scrollLeft / (w + 16)));
        }}
        className="flex snap-x snap-mandatory gap-4 overflow-x-auto pb-2 [scrollbar-width:none]"
      >
        {testimonials.map((t, i) => (
          <img
            key={i}
            src={t.url}
            alt={`Testimonio de mamá en WhatsApp ${i + 1}`}
            loading="lazy"
            className="shadow-soft w-[72%] shrink-0 snap-center rounded-3xl border-4 border-card sm:w-[40%]"
          />
        ))}
      </div>
      <button type="button" aria-label="Anterior" onClick={() => scrollTo(idx - 1)} className="absolute left-0 top-1/2 grid h-10 w-10 -translate-y-1/2 place-items-center rounded-full bg-card shadow-md">
        <ChevronLeft className="h-5 w-5 text-primary" />
      </button>
      <button type="button" aria-label="Siguiente" onClick={() => scrollTo(idx + 1)} className="absolute right-0 top-1/2 grid h-10 w-10 -translate-y-1/2 place-items-center rounded-full bg-card shadow-md">
        <ChevronRight className="h-5 w-5 text-primary" />
      </button>
      <div className="mt-4 flex justify-center gap-2">
        {testimonials.map((_, i) => (
          <span key={i} className={`h-2 rounded-full transition-all ${i === idx ? "w-6 bg-primary" : "w-2 bg-border"}`} />
        ))}
      </div>
    </div>
  );
}

function PurchaseToast() {
  const [show, setShow] = useState(false);
  useEffect(() => {
    const a = setTimeout(() => setShow(true), 6000);
    const b = setTimeout(() => setShow(false), 12000);
    return () => { clearTimeout(a); clearTimeout(b); };
  }, []);
  if (!show) return null;
  return (
    <div className="animate-toast-in fixed bottom-4 left-4 z-50 flex max-w-[calc(100%-2rem)] items-center gap-3 rounded-2xl border border-border bg-card p-3 pr-5 shadow-[var(--shadow-soft)]">
      <span className="grid h-10 w-10 shrink-0 place-items-center rounded-full bg-primary text-primary-foreground"><Check className="h-5 w-5" /></span>
      <div className="min-w-0 text-sm">
        <p className="text-[11px] font-bold uppercase tracking-wide text-primary">Compra 100% segura</p>
        <p className="font-bold">¡Rafaela P. acaba de comprar!</p>
        <p className="text-xs text-muted-foreground">Porto Alegre, RS</p>
      </div>
    </div>
  );
}
