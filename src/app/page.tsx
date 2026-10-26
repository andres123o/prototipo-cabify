import Link from "next/link";
import {
  CalendarClock,
  Car,
  Heart,
  CircleAlert,
  CircleCheck,
  Search,
  CarTaxiFront,
  Mail,
  PawPrint,
  Sparkles,
  Stethoscope,
  Ticket,
  Zap,
} from "lucide-react";

// El recorrido de quien necesita llevar a su mascota y dónde se pierde.
const recorrido = [
  { icono: Heart, titulo: "Tiene que ir al veterinario", dato: "80 % de los viajes de Mascotas", tono: "normal" },
  { icono: Search, titulo: "Busca en Google", dato: "“taxi para perros Bogotá”", tono: "normal" },
  { icono: CircleAlert, titulo: "Cabify no aparece", dato: "0 de 118 páginas en cabify.com/co", tono: "corte" },
  { icono: Car, titulo: "Encuentra Uber Pet", dato: "Uber sí tiene su página en Colombia", tono: "fuga" },
];

const busquedas = [
  "taxi para perros Bogotá",
  "cómo llevar a mi perro al veterinario",
  "Uber Pet o Cabify",
  "taxi que acepte mascotas",
];

// La iniciativa completa: no es solo la página, es el canal de adquisición.
const acciones = [
  { icono: Search, titulo: "Aparecer en Google", texto: "Una página para quien busca transporte para su perro." },
  { icono: Sparkles, titulo: "Aparecer en las IA", texto: "Que ChatGPT y Gemini recomienden Cabify Mascotas." },
  { icono: Mail, titulo: "Capturar contactos", texto: "Quien no tiene la app deja su correo y recibe un descuento." },
  { icono: Ticket, titulo: "Alianzas con veterinarias", texto: "Códigos donde empieza el 80 % de los viajes." },
];

const medicion = [
  { etiqueta: "Hipótesis", valor: "Si la encuentran, la usan" },
  { etiqueta: "Métrica principal", valor: "Primeros viajes desde la página" },
  { etiqueta: "Comparación", valor: "Chapinero, Usaquén y Suba frente a zonas similares" },
  { etiqueta: "Alerta", valor: "Solicitudes no completadas (hoy 2 de 10)" },
];

const comparacion = [
  { tema: "Cuándo", cabify: "Al instante", uber: "Reserva con 30 min" },
  { tema: "Vehículo", cabify: "Taxi o particular", uber: "Particular" },
  { tema: "Urgencia veterinaria", cabify: "Sí", uber: "No" },
];


export default function Home() {
  return (
    <>
      <header className="contenedor pt-[var(--s-l)] pb-[var(--s-m)]">
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img src="https://cabify.com/static/lo_cabify_primary.svg" alt="Cabify" className="h-8 w-auto" />
      </header>

      <main className="flex-1">
        {/* Hero al estilo m-hero de cabify.com: imagen (5 col) + contenido morado (7 col) */}
        <section className="contenedor grid grid-cols-1 lg:grid-cols-12 gap-[var(--s-m)]">
          {/* Vista previa de la solución: la página que falta */}
          <div className="lg:col-span-5 relative overflow-hidden rounded-[var(--r-xl)] bg-[var(--m20)] min-h-[420px] grid place-items-center p-[var(--s-l)]">
            <div className="relative w-full max-w-[460px] rounded-[var(--r-m)] bg-white shadow-[0_16px_40px_#2c264314] overflow-hidden">
              <div className="flex items-center gap-2 px-4 py-3 border-b border-[var(--n20)]">
                <span className="w-2.5 h-2.5 rounded-full bg-[var(--n20)]" />
                <span className="w-2.5 h-2.5 rounded-full bg-[var(--n20)]" />
                <span className="w-2.5 h-2.5 rounded-full bg-[var(--n20)]" />
                <span className="ml-2 flex-1 truncate rounded-full bg-[var(--n10)] px-3 py-1 text-[12px] text-[var(--n60)]">
                  cabify.com/co/pasajeros/mascotas
                </span>
              </div>
              <div className="p-4 grid gap-3">
                <div className="grid grid-cols-[2fr_3fr] gap-3">
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img
                    src="https://images.unsplash.com/photo-1543466835-00a7907e9de1?w=400&q=70&auto=format"
                    alt="Perro feliz"
                    className="w-full h-full min-h-[132px] object-cover rounded-[var(--r-s)]"
                  />
                  <div className="rounded-[var(--r-s)] bg-[var(--m60)] text-white p-4 flex flex-col justify-between">
                    <p className="font-bold text-[18px] leading-[24px]">Viaja con tu perro o gato, sin reservar</p>
                    <span className="mt-3 self-start rounded-[6px] bg-[var(--m100)] px-3 py-1.5 text-[12px] font-bold">Pide tu viaje</span>
                  </div>
                </div>
                <div className="grid grid-cols-3 gap-2">
                  {[Zap, CarTaxiFront, Stethoscope].map((Icono, i) => (
                    <div key={i} className="rounded-[10px] bg-[var(--m10)] p-3 grid place-items-center text-[var(--m60)]">
                      <Icono size={20} />
                    </div>
                  ))}
                </div>
              </div>
            </div>
            <span className="absolute bottom-[var(--s-m)] left-[var(--s-m)] rounded-full bg-white px-3 py-1.5 text-[14px] font-semibold text-[var(--m60)]">
              La página que falta
            </span>
          </div>

          <div className="lg:col-span-7 rounded-[var(--r-xl)] bg-[var(--m60)] text-white px-[var(--s-2xl)] py-[var(--s-3xl)] flex flex-col justify-center gap-[var(--s-m)]">
            <h1 className="titulo-xl max-w-[18ch]">Cabify Mascotas crece, pero en Google nadie la encuentra</h1>
            <p className="text-[var(--m20)] text-[20px] leading-[28px] max-w-[46ch]">
              Entiendo el problema y tengo una propuesta: una iniciativa de Growth para convertir esas búsquedas en nuevos usuarios de Mascotas.
            </p>
            <div>
              <Link href="/mascotas" className="cta cta-primario">
                Ver prototipo
              </Link>
            </div>
          </div>
        </section>

        {/* 1. El hueco */}
        <section id="hueco" className="contenedor pt-[var(--s-3xl)] pb-[var(--s-2xl)] scroll-mt-6">
          <h2 className="titulo-l max-w-[34ch]">Buscan transporte para su perro y no encuentran Cabify Mascotas</h2>

          <ol className="mt-[var(--s-xl)] grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-[var(--s-m)]">
            {recorrido.map(({ icono: Icono, titulo, dato, tono }) => (
              <li
                key={titulo}
                className={`rounded-[var(--r-xl)] p-[var(--s-l)] flex flex-col justify-between gap-[var(--s-xl)] min-h-[240px] lg:min-h-[280px] ${
                  tono === "corte" ? "bg-[var(--o0)]" : tono === "fuga" ? "bg-[var(--n10)]" : "bg-[var(--m10)]"
                }`}
              >
                {/* Ícono con el estilo e-bounded --l de cabify.com */}
                <figure
                  className="self-start rounded-[var(--r-s)] bg-[var(--m60)] text-white p-[var(--s-xs)] leading-none"
                >
                  <Icono className="size-6 min-[1541px]:size-8" strokeWidth={1.75} aria-hidden />
                </figure>
                <div>
                  <p className="font-bold text-[24px] leading-[32px]">{titulo}</p>
                  <p className={`mt-[var(--s-2xs)] text-[16px] leading-[24px] ${tono === "corte" ? "text-[var(--o60)] font-semibold" : "text-[var(--n60)]"}`}>
                    {dato}
                  </p>
                </div>
              </li>
            ))}
          </ol>

          <p className="mt-[var(--s-m)] rounded-[var(--r-l)] border border-[var(--m20)] px-[var(--s-l)] py-[var(--s-m)] text-[20px] leading-[28px]">
            <strong className="font-bold text-[var(--m60)]">El producto funciona:</strong> creció 2,5 veces con quienes ya lo conocen. Lo que falta es que lo encuentren.
          </p>
        </section>

        {/* La iniciativa: quién la propone y qué incluye, con el mismo formato de la sección del problema */}
        <section className="contenedor pt-[calc(var(--s-2xl)+var(--s-l))]">
          <h2 className="titulo-l max-w-[30ch]">Quiero resolverlo desde Growth</h2>
          <p className="mt-[var(--s-s)] max-w-[62ch] text-[var(--n60)] text-[20px] leading-[28px]">
            Ya recorrí este camino: portales que captaban leads y campañas que los llevaban del registro al primer depósito.
            Con Cabify Mascotas es el mismo recorrido, <strong className="font-semibold text-[var(--n100)]">de la búsqueda al primer viaje</strong>.
          </p>
          {/* Bento: Google es el frente principal (grande), IA arriba a la derecha, contactos y veterinarias abajo */}
          <ul className="mt-[var(--s-xl)] grid grid-cols-1 md:grid-cols-12 md:grid-rows-[auto_auto] gap-[var(--s-m)]">
            {acciones.map(({ icono: Icono, titulo, texto }, i) => {
              const estilo = [
                // 0 · Google: grande, morado de marca, con una búsqueda dibujada
                "md:col-span-6 md:row-span-2 bg-[var(--m60)] text-white min-h-[420px]",
                // 1 · IA: azul suave (theme-blue de cabify.com)
                "md:col-span-6 bg-[var(--b10)] min-h-[200px]",
                // 2 · Contactos: verde suave (theme-green)
                "md:col-span-3 bg-[var(--g10)] min-h-[220px]",
                // 3 · Veterinarias: naranja suave
                "md:col-span-3 bg-[var(--o0)] min-h-[220px]",
              ][i];
              const grande = i === 0;
              return (
                <li key={titulo} className={`relative overflow-hidden rounded-[var(--r-xl)] p-[var(--s-l)] flex flex-col justify-between gap-[var(--s-l)] ${estilo}`}>
                  <figure
                    className={`self-start rounded-[var(--r-s)] p-[var(--s-xs)] leading-none ${
                      grande ? "bg-white text-[var(--m60)]" : "bg-[var(--m60)] text-white"
                    }`}
                  >
                    <Icono className="size-6 min-[1541px]:size-8" strokeWidth={1.75} aria-hidden />
                  </figure>

                  {/* Búsqueda dibujada, sin texto: barra y resultados donde el primero es Cabify Mascotas */}
                  {grande && (
                    <div aria-hidden className="w-full max-w-[460px] self-center rounded-[var(--r-m)] bg-white p-[var(--s-s)] shadow-[0_16px_40px_#1f123f33]">
                      <div className="flex items-center gap-2 rounded-full border border-[var(--n20)] px-4 py-2.5">
                        <Search size={16} className="text-[var(--n60)]" />
                        <span className="h-2.5 w-2/3 rounded-full bg-[var(--n20)]" />
                      </div>
                      <div className="mt-[var(--s-s)] flex items-center gap-3 rounded-[var(--r-s)] bg-[var(--m10)] p-3">
                        <span className="grid size-9 place-items-center rounded-full bg-[var(--m60)] text-white">
                          <PawPrint size={18} />
                        </span>
                        <span className="flex-1 grid gap-1.5">
                          <span className="h-2.5 w-3/4 rounded-full bg-[var(--m40)]" />
                          <span className="h-2 w-1/2 rounded-full bg-[var(--m20)]" />
                        </span>
                      </div>
                      {[0, 1].map((r) => (
                        <div key={r} className="mt-2 flex items-center gap-3 p-3">
                          <span className="size-9 rounded-full bg-[var(--n10)]" />
                          <span className="flex-1 grid gap-1.5">
                            <span className="h-2.5 w-2/3 rounded-full bg-[var(--n10)]" />
                            <span className="h-2 w-2/5 rounded-full bg-[var(--n10)]" />
                          </span>
                        </div>
                      ))}
                    </div>
                  )}

                  <div>
                    <p className={`font-bold ${grande ? "text-[32px] leading-[40px]" : "text-[24px] leading-[32px]"}`}>{titulo}</p>
                    <p className={`mt-[var(--s-2xs)] text-[16px] leading-[24px] ${grande ? "text-[var(--m20)]" : "text-[var(--n60)]"}`}>{texto}</p>
                  </div>
                </li>
              );
            })}
          </ul>
        </section>

        {/* Cómo se mide: continúa la iniciativa, con tarjetas del mismo tamaño */}
        <section className="contenedor pt-[var(--s-xl)] pb-[var(--s-2xl)]">
          <p className="font-bold text-[24px] leading-[32px]">Así sabría si funciona</p>
          {/* Una sola pieza dividida en 4, como una ficha técnica */}
          <dl className="mt-[var(--s-m)] grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 rounded-[var(--r-xl)] bg-[var(--n0)] border border-[var(--n20)] overflow-hidden divide-y sm:divide-y-0 lg:divide-x divide-[var(--n20)]">
            {medicion.map((m) => {
              const alerta = m.etiqueta === "Alerta";
              return (
                <div key={m.etiqueta} className="p-[var(--s-l)] flex flex-col gap-[var(--s-xs)]">
                  <dt className="flex items-center gap-2 text-[14px] leading-[22px] font-semibold text-[var(--n60)]">
                    <span className={`size-2 rounded-full ${alerta ? "bg-[var(--o60)]" : "bg-[var(--m60)]"}`} />
                    {m.etiqueta}
                  </dt>
                  <dd className={`font-bold text-[20px] leading-[28px] ${alerta ? "text-[var(--o60)]" : ""}`}>{m.valor}</dd>
                </div>
              );
            })}
          </dl>
        </section>

        {/* 2. Lo que dejan ir */}
        <section className="contenedor pt-[calc(var(--s-2xl)+var(--s-l))] pb-[var(--s-2xl)]">
          <h2 className="titulo-l max-w-[22ch]">Le ganan a Uber Pet, pero nadie lo sabe.</h2>

          <div className="mt-[var(--s-xl)] grid grid-cols-1 lg:grid-cols-12 gap-[var(--s-m)]">
            {/* Comparación */}
            <div className="lg:col-span-7 rounded-[var(--r-xl)] border border-[var(--n20)] overflow-hidden">
              <div className="grid grid-cols-3 bg-[var(--n0)] text-[16px] font-semibold text-[var(--n60)]">
                <span className="p-[var(--s-m)]" />
                <span className="p-[var(--s-m)] text-[var(--m60)]">Cabify Mascotas</span>
                <span className="p-[var(--s-m)]">Uber Pet</span>
              </div>
              {comparacion.map((f) => (
                <div key={f.tema} className="grid grid-cols-3 border-t border-[var(--n20)] text-[18px] leading-[26px]">
                  <span className="p-[var(--s-m)] text-[var(--n60)]">{f.tema}</span>
                  <span className="p-[var(--s-m)] font-semibold flex items-center gap-2">
                    <CircleCheck size={18} className="text-[var(--g60)] shrink-0" />
                    {f.cabify}
                  </span>
                  <span className="p-[var(--s-m)] text-[var(--n60)]">{f.uber}</span>
                </div>
              ))}
            </div>

            {/* Búsquedas y diciembre */}
            <div className="lg:col-span-5 grid gap-[var(--s-m)]">
              <div className="rounded-[var(--r-xl)] bg-[var(--m10)] p-[var(--s-l)]">
                <p className="flex items-center gap-2 font-semibold text-[18px]">
                  <Search size={18} className="text-[var(--m60)]" /> Búsquedas sin Cabify
                </p>
                <div className="mt-[var(--s-s)] flex flex-wrap gap-2">
                  {busquedas.map((b) => (
                    <span key={b} className="rounded-full bg-white px-4 py-2 text-[16px] text-[var(--n100)]">
                      {b}
                    </span>
                  ))}
                </div>
              </div>
              <div className="rounded-[var(--r-xl)] bg-[var(--o0)] p-[var(--s-l)] flex gap-[var(--s-s)]">
                <CalendarClock size={24} className="text-[var(--o60)] shrink-0 mt-1" />
                <div>
                  <p className="font-semibold text-[18px]">Diciembre es el pico del año</p>
                  <p className="text-[var(--n60)] text-[16px] leading-[24px] mt-1">Sin una página que Google y la IA puedan mostrar, cada búsqueda es un usuario que se va a Uber.</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* La solución: ancho completo, bordes superiores redondeados como el m-jumbo de cabify.com */}
        <section className="mt-[var(--s-2xl)] rounded-t-[var(--r-2xl)] bg-[var(--m60)] text-white">
          <div className="contenedor pt-[var(--s-3xl)] pb-[var(--s-3xl)] flex flex-col items-center text-center gap-[var(--s-l)]">
            <h2 className="titulo-l max-w-[24ch]">Una iniciativa para que quien no conoce Cabify Mascotas la encuentre</h2>
            <Link href="/mascotas" className="cta cta-claro">
              Ver prototipo
            </Link>
            <div className="mt-[var(--s-xl)] w-full max-w-[720px] border-t border-[var(--m50)] pt-[var(--s-l)] flex flex-col items-center gap-[var(--s-s)]">
              <p className="text-[24px] leading-[32px] font-semibold">
                Quiero entrar al equipo de Growth de Cabify a liderar iniciativas como esta.
              </p>
              <a
                href="https://www.andresolaya.net"
                target="_blank"
                rel="noopener noreferrer"
                className="font-bold text-[18px] text-white underline underline-offset-4 decoration-[var(--m30)] hover:text-[var(--m20)]"
              >
                Mi portafolio
              </a>
            </div>
          </div>
        </section>
      </main>
    </>
  );
}
