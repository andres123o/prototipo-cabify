import { CarTaxiFront, ChevronDown, CircleCheck, PawPrint, ShieldCheck, Stethoscope, Zap } from "lucide-react";

// Mismo menú principal que cabify.com/co.
const menuPrincipal = ["Conductores", "Empresas", "Pasajeros", "Ads", "Nosotros", "Ayuda"];

const ventajas = [
  { icono: Zap, titulo: "Sin reservar", texto: "Lo pides cuando lo necesitas, como cualquier viaje." },
  { icono: CarTaxiFront, titulo: "Taxi o particular", texto: "Eliges la opción que te sirva en ese momento." },
  { icono: Stethoscope, titulo: "Al veterinario", texto: "Para la cita de control o para una urgencia." },
];

const pasos = [
  { n: "1", titulo: "Abre la app", texto: "Escribe a dónde vas." },
  { n: "2", titulo: "Elige Mascotas", texto: "Siempre que viaje contigo, en taxi o particular." },
  { n: "3", titulo: "Viaja con tu mascota", texto: "Va a tu lado durante todo el trayecto." },
];

// Condiciones para Colombia según help.cabify.com ("¿Puedo llevar una mascota?").
const paraPerros = [
  "Correa, arnés o caja transportadora",
  "Bozal si es de raza potencialmente peligrosa",
  "Una manta o toalla para cubrir la silla",
  "Bolsas por si necesita hacer sus cosas",
];

const paraGatos = [
  "Caja transportadora, arnés o correa",
  "Una mascota por viaje",
  "Con todas sus condiciones sanitarias",
];

const preguntas = [
  {
    p: "¿Tengo que reservar para viajar con mi perro?",
    r: "No. Cabify Mascotas se pide al instante desde la app, en taxi o en carro particular.",
  },
  {
    p: "¿Puedo usarlo para una urgencia veterinaria?",
    r: "Sí. Como no necesitas reservar, puedes pedirlo en el momento en que lo necesites.",
  },
  {
    p: "¿Qué mascotas pueden viajar?",
    r: "Perros y gatos, una mascota por viaje.",
  },
  {
    p: "¿Qué debo llevar?",
    r: "Correa, arnés o caja transportadora; una manta o toalla para cubrir la silla, y bolsas para recoger cualquier residuo.",
  },
  {
    p: "¿Mi perro necesita bozal?",
    r: "Solo si es de una raza categorizada como potencialmente peligrosa. En ese caso es obligatorio.",
  },
  {
    p: "¿Tengo que elegir la categoría Mascotas?",
    r: "Sí. Siempre que viajes con tu mascota, pide el viaje en Cabify Mascotas. Solo los perros de asistencia no lo necesitan.",
  },
  {
    p: "¿Mi mascota puede viajar sola?",
    r: "No. Tu mascota debe ir acompañada por ti durante todo el trayecto.",
  },
  {
    p: "¿Puedo llevar más de una mascota?",
    r: "No. Puedes transportar una mascota por viaje.",
  },
  {
    p: "¿Mi mascota tiene que estar vacunada?",
    r: "Tu mascota debe cumplir con todas las condiciones sanitarias.",
  },
  {
    p: "¿Qué pasa si mi mascota ensucia el carro?",
    r: "Cabify puede cobrar un suplemento por limpieza. Por eso te pedimos llevar una manta o toalla.",
  },
  {
    p: "¿Los perros de asistencia necesitan Cabify Mascotas?",
    r: "No. Los perros de asistencia homologados pueden viajar sin transportín en todas las ciudades.",
  },
  {
    p: "¿En qué ciudades está disponible?",
    r: "En Bogotá.",
  },
  {
    p: "¿Cuánto cuesta?",
    r: "Depende del trayecto y de si eliges taxi o particular. Ves el precio en la app antes de pedir.",
  },
  {
    p: "¿El conductor puede rechazar el viaje?",
    r: "Sí, si comprueba que no se cumplen estas condiciones.",
  },
];

// Columnas del footer de cabify.com/co (sin enlaces), con Mascotas en Pasajeros.
const pie = [
  [
    { titulo: "Conductores", items: ["Cabify Stars", "Seguridad", "Accesibilidad"] },
    { titulo: "Pasajeros", items: ["Viaja en Cabify", "Mascotas", "Envíos", "Tarifas"] },
  ],
  [
    { titulo: "Empresas", items: ["Cabify para empresas", "Soluciones", "Plataforma", "Recursos"] },
    { titulo: "Ads", items: ["Cabify Ads", "Online", "Offline"] },
  ],
  [
    { titulo: "Nosotros", items: ["Sobre nosotros", "Sostenibilidad", "Seguridad", "Accesibilidad", "Únete al equipo", "Prensa", "Blog"] },
  ],
  [
    { titulo: "Logística", items: ["Cabify Logistics"] },
    { titulo: "Legal", items: ["Términos y condiciones", "Privacidad", "Políticas de cookies", "Declaración de accesibilidad"] },
  ],
];

const paises = ["Argentina", "Chile", "Colombia", "España", "Perú", "Uruguay", "English"];

// Rastro de huellas animado (posición en % y giro)
const huellas = [
  { x: 6, y: 78, g: -20 },
  { x: 14, y: 66, g: -10 },
  { x: 22, y: 74, g: -20 },
  { x: 30, y: 62, g: -10 },
  { x: 38, y: 70, g: -20 },
];

export default function Mascotas() {
  return (
    <>
      {/*
        Header de cabify.com (m-header): cápsula blanca centrada y angosta.
        Ancho máx. 1200 px (896 px bajo 1540 px), alto 72 px (62 px bajo 1540 px), logo 32 px (24 px).
      */}
      <header className="py-[var(--s-m)]">
        <div className="mx-auto w-[calc(100%-64px)] max-w-[896px] min-[1541px]:max-w-[1200px]">
          <div className="flex h-[62px] min-[1541px]:h-[72px] items-center rounded-full bg-white px-[var(--s-l)] shadow-[0_16px_40px_#2c264314]">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img src="https://cabify.com/static/lo_cabify_primary.svg" alt="Cabify" className="h-6 min-[1541px]:h-8 w-auto" />
            <nav className="mx-[var(--s-xl)] hidden flex-1 items-center gap-[var(--s-m)] text-[16px] leading-[24px] text-[var(--n60)] min-[1025px]:flex">
              {menuPrincipal.map((m) => (
                <span key={m} className={m === "Pasajeros" ? "text-[var(--m60)]" : "hover:text-[var(--m60)] transition-colors"}>
                  {m}
                </span>
              ))}
            </nav>
            <div className="ml-auto flex items-center gap-[var(--s-m)] text-[16px] leading-[24px]">
              <span className="hidden text-[var(--n60)] sm:inline">Inicia sesión</span>
              <span className="inline-flex min-h-10 items-center rounded-[var(--r-xs)] bg-[var(--m60)] px-[var(--s-xs)] font-bold text-white">
                Regístrate
              </span>
            </div>
          </div>
        </div>
      </header>

      <main className="flex-1">
        {/* Hero: imagen a la izquierda (5 col), contenido morado a la derecha (7 col) */}
        <section className="contenedor grid grid-cols-1 lg:grid-cols-12 gap-[var(--s-m)]">
          <div className="lg:col-span-5 relative overflow-hidden rounded-[var(--r-xl)] min-h-[360px]">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src="/img/perro-carro.jpg"
              alt="Perro feliz sacando la cabeza por la ventana de un carro"
              className="absolute inset-0 h-full w-full object-cover object-[30%_center]"
            />
          </div>

          <div className="lg:col-span-7 rounded-[var(--r-xl)] bg-[var(--m60)] text-white px-[var(--s-2xl)] py-[var(--s-3xl)] flex flex-col justify-center gap-[var(--s-m)]">
            <h1 className="titulo-xl max-w-[16ch]">Viaja con tu perro o gato, sin reservar</h1>
            <p className="text-[var(--m20)] text-[20px] leading-[28px] max-w-[40ch]">
              Al veterinario o a la casa de la familia. En taxi o en carro particular.
            </p>
            <div>
              <span className="cta cta-primario">Pide tu viaje</span>
            </div>
          </div>
        </section>

        {/* Boxes trio */}
        <section className="contenedor py-[var(--s-2xl)] grid grid-cols-1 md:grid-cols-3 gap-[var(--s-m)]">
          {ventajas.map(({ icono: Icono, titulo, texto }) => (
            <div key={titulo} className="rounded-[var(--r-xl)] bg-[var(--m10)] p-[var(--s-l)] flex flex-col gap-[var(--s-l)]">
              <span className="grid place-items-center w-14 h-14 rounded-full bg-white text-[var(--m60)]">
                <Icono size={26} />
              </span>
              <div>
                <h2 className="titulo-m">{titulo}</h2>
                <p className="mt-[var(--s-2xs)] text-[var(--n60)] text-[18px] leading-[26px]">{texto}</p>
              </div>
            </div>
          ))}
        </section>

        {/* Cómo pedirlo */}
        <section className="contenedor">
          <div className="rounded-[var(--r-xl)] border border-[var(--n20)] p-[var(--s-xl)] grid grid-cols-1 lg:grid-cols-12 gap-[var(--s-l)] items-center">
            <h2 className="titulo-l lg:col-span-4">Cómo pedirlo</h2>
            <ol className="lg:col-span-8 grid sm:grid-cols-3 gap-[var(--s-m)]">
              {pasos.map((p) => (
                <li key={p.n} className="flex flex-col gap-[var(--s-xs)]">
                  <span className="grid place-items-center w-10 h-10 rounded-full bg-[var(--m60)] text-white font-bold">{p.n}</span>
                  <p className="font-bold text-[20px] leading-[28px]">{p.titulo}</p>
                  <p className="text-[var(--n60)] text-[16px] leading-[24px]">{p.texto}</p>
                </li>
              ))}
            </ol>
          </div>
        </section>

        {/* Perros: collage animado a la izquierda, lo que debe llevar a la derecha */}
        <section className="contenedor pt-[var(--s-2xl)]">
          <div className="relative overflow-hidden rounded-[var(--r-2xl)] bg-[var(--o0)] grid grid-cols-1 lg:grid-cols-12 gap-[var(--s-xl)] p-[var(--s-xl)] lg:p-[var(--s-2xl)] items-center">
            <div className="lg:col-span-6 relative h-[420px] lg:h-[520px]">
              {huellas.map((h, i) => (
                <PawPrint
                  key={i}
                  aria-hidden
                  size={28}
                  className="huella absolute text-[var(--o60)]"
                  style={{ left: `${h.x}%`, top: `${h.y}%`, ["--giro" as string]: `${h.g}deg`, animationDelay: `${i * 0.5}s` }}
                />
              ))}
              {/* eslint-disable @next/next/no-img-element */}
              <img
                src="/img/perritos-corriendo.jpg"
                alt="Dos perritos corriendo felices"
                className="flotar absolute left-[8%] top-0 w-[64%] aspect-[4/5] object-cover rounded-[var(--r-xl)] shadow-[0_24px_48px_#a6470722]"
                style={{ ["--giro" as string]: "-3deg" }}
              />
              <img
                src="/img/frenchie.jpg"
                alt="Bulldog francés con buzo amarillo"
                className="flotar-lento absolute right-0 top-[12%] w-[40%] aspect-square object-cover rounded-[var(--r-l)] shadow-[0_24px_48px_#a6470722]"
                style={{ ["--giro" as string]: "4deg" }}
              />
              <img
                src="/img/pug.jpg"
                alt="Pug con bufanda"
                className="flotar absolute right-[12%] bottom-0 w-[36%] aspect-square object-cover rounded-[var(--r-l)] shadow-[0_24px_48px_#a6470722]"
                style={{ ["--giro" as string]: "-2deg", animationDelay: "-3s" }}
              />
              {/* eslint-enable @next/next/no-img-element */}
            </div>
            <div className="lg:col-span-6 flex flex-col gap-[var(--s-l)]">
              <h2 className="titulo-l max-w-[14ch]">Tu perro va contigo</h2>
              <ul className="grid gap-[var(--s-s)]">
                {paraPerros.map((r) => (
                  <li key={r} className="flex items-start gap-3 rounded-[var(--r-m)] bg-white px-[var(--s-m)] py-[var(--s-s)] text-[18px] leading-[26px]">
                    <CircleCheck size={22} className="text-[var(--o60)] shrink-0 mt-[2px]" />
                    {r}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </section>

        {/* Gatos: al revés, texto a la izquierda y collage a la derecha */}
        <section className="contenedor pt-[var(--s-m)]">
          <div className="relative overflow-hidden rounded-[var(--r-2xl)] bg-[var(--b10)] grid grid-cols-1 lg:grid-cols-12 gap-[var(--s-xl)] p-[var(--s-xl)] lg:p-[var(--s-2xl)] items-center">
            <div className="lg:col-span-6 flex flex-col gap-[var(--s-l)] order-2 lg:order-1">
              <h2 className="titulo-l max-w-[14ch]">Y tu gato también</h2>
              <ul className="grid gap-[var(--s-s)]">
                {paraGatos.map((r) => (
                  <li key={r} className="flex items-start gap-3 rounded-[var(--r-m)] bg-white px-[var(--s-m)] py-[var(--s-s)] text-[18px] leading-[26px]">
                    <CircleCheck size={22} className="text-[var(--b60)] shrink-0 mt-[2px]" />
                    {r}
                  </li>
                ))}
              </ul>
              <p className="flex items-start gap-3 rounded-[var(--r-m)] border border-[var(--b60)]/30 px-[var(--s-m)] py-[var(--s-s)] text-[16px] leading-[24px] text-[var(--n60)]">
                <ShieldCheck size={22} className="text-[var(--b60)] shrink-0" />
                Los perros de asistencia homologados pueden viajar sin transportín en todas las ciudades.
              </p>
            </div>
            <div className="lg:col-span-6 relative h-[420px] lg:h-[520px] order-1 lg:order-2">
              {/* eslint-disable @next/next/no-img-element */}
              <img
                src="/img/gatito-patita.jpg"
                alt="Gatito levantando la patita"
                className="flotar absolute right-[6%] top-0 w-[56%] aspect-[3/4] object-cover rounded-[var(--r-xl)] shadow-[0_24px_48px_#2760c222]"
                style={{ ["--giro" as string]: "3deg" }}
              />
              <img
                src="/img/gato-naranja.jpg"
                alt="Gato naranja mirando hacia arriba"
                className="flotar-lento absolute left-0 top-[18%] w-[40%] aspect-[3/4] object-cover rounded-[var(--r-l)] shadow-[0_24px_48px_#2760c222]"
                style={{ ["--giro" as string]: "-4deg" }}
              />
              <img
                src="/img/gato-menta.jpg"
                alt="Gato blanco y negro asomado"
                className="flotar absolute left-[22%] bottom-0 w-[38%] aspect-[4/3] object-cover rounded-[var(--r-l)] shadow-[0_24px_48px_#2760c222]"
                style={{ ["--giro" as string]: "2deg", animationDelay: "-2.5s" }}
              />
              {/* eslint-enable @next/next/no-img-element */}
            </div>
          </div>
        </section>

        {/* Preguntas frecuentes */}
        <section className="contenedor py-[var(--s-2xl)] grid grid-cols-1 lg:grid-cols-12 gap-[var(--s-m)]">
          <h2 className="titulo-l lg:col-span-4">Preguntas frecuentes</h2>
          <div className="lg:col-span-8 border-t border-[var(--n20)]">
            {preguntas.map((q) => (
              <details key={q.p} className="group border-b border-[var(--n20)]">
                <summary className="flex cursor-pointer list-none items-center justify-between gap-4 py-[var(--s-m)] text-[20px] leading-[28px] font-semibold">
                  {q.p}
                  <ChevronDown size={22} className="shrink-0 text-[var(--m60)] transition-transform group-open:rotate-180" />
                </summary>
                <p className="pb-[var(--s-m)] text-[var(--n60)] text-[18px] leading-[26px] max-w-[60ch]">{q.r}</p>
              </details>
            ))}
          </div>
        </section>

        {/* Jumbo final + footer de cabify.com: ancho completo, bordes superiores redondeados, sin gradiente */}
        <section className="mt-[var(--s-xl)] rounded-t-[var(--r-2xl)] bg-[var(--m60)] text-white">
          <div className="contenedor pt-[calc(var(--s-3xl)+var(--s-xl))] pb-[var(--s-3xl)] flex flex-col items-center text-center gap-[var(--s-m)]">
            <h2 className="titulo-l lg:whitespace-nowrap">Tu próximo viaje, con tu mascota</h2>
            <span className="cta cta-claro mt-[var(--s-m)]">Descarga Cabify</span>
          </div>

          {/* Footer: misma estructura que m-footer, sin enlaces */}
          <footer className="contenedor border-t border-[var(--m50)] pt-[var(--s-xl)] pb-[var(--s-l)]">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-[var(--s-xl)]">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img src="https://cabify.com/static/lo_cabify_primary.svg" alt="Cabify" className="lg:col-span-3 h-8 w-auto self-start brightness-0 invert" />
              <div className="lg:col-span-9 grid grid-cols-2 md:grid-cols-4 gap-[var(--s-l)]">
                {pie.map((columna, i) => (
                  <div key={i} className="flex flex-col gap-[var(--s-l)]">
                    {columna.map((grupo) => (
                      <div key={grupo.titulo}>
                        <p className="font-bold text-[16px] leading-[24px]">{grupo.titulo}</p>
                        <ul className="mt-[var(--s-2xs)] grid gap-1.5 text-[14px] leading-[22px] text-[var(--m20)]">
                          {grupo.items.map((item) => (
                            <li key={item} className={item === "Mascotas" ? "text-white font-semibold" : ""}>
                              {item}
                            </li>
                          ))}
                        </ul>
                      </div>
                    ))}
                  </div>
                ))}
              </div>
            </div>
            <ul className="mt-[var(--s-xl)] flex flex-wrap gap-x-[var(--s-m)] gap-y-2 border-t border-[var(--m50)] pt-[var(--s-m)] text-[14px] text-[var(--m20)]">
              {paises.map((p) => (
                <li key={p} className={p === "Colombia" ? "text-white font-semibold" : ""}>
                  {p}
                </li>
              ))}
            </ul>
          </footer>
        </section>
      </main>
    </>
  );
}
