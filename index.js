export default function CocktailOnCanvasPremium() {
  const socialLinks = {
    whatsapp: 'https://wa.me/593984692408',
    instagram: 'https://instagram.com/cocktailoncanvas',
  };

  const menu = {
    clasicos: {
      precio: 'TODOS a $6.50',
      items: [
        {
          nombre: 'Mojito',
          desc: 'Clásico · Limón · Maracuyá · Frutos Rojos',
        },
        {
          nombre: 'Pisco Sour',
          desc: 'Limón · Maracuyá · Hierba Luisa',
        },
        {
          nombre: 'Paloma',
          desc: 'Tequila · Toronja · Almíbar Simple',
        },
        {
          nombre: 'Margarita',
          desc: 'Tequila · Triple Sec · Almíbar Simple · Limón',
        },
        {
          nombre: 'Old Fashion',
          desc: 'Whisky · Angostura · Almíbar Simple',
        },
        {
          nombre: 'Gin & Tonic',
          desc: 'Cítricos · Frutos Rojos · Especias Aromáticas',
        },
        {
          nombre: 'Tom Collins',
          desc: 'Gin · Limón · Almíbar Simple · Gasificado',
        },
        {
          nombre: 'Clover Club',
          desc: 'Gin · Limón · Frutos Rojos · Clara de Huevo',
        },
        {
          nombre: 'Bloody Mary',
          desc: 'Vodka · Clamato · Limón · Sal · Pimienta · Ají',
        },
        {
          nombre: 'Blanco & Tinto de Verano',
          desc: 'Vino · Triple Sec · Naranja · Gaseosa',
        },
      ],
    },

    autor: {
      precio: 'TODOS a $7.00',
      items: [
        {
          nombre: 'Higos con Queso',
          desc: 'Ron · Bar Spoon Limón · Almíbar de Higo + Queso',
        },
        {
          nombre: 'Yoshi (Super Mario)',
          desc: 'Gin · Maceración de Pepinillo · Almíbar Simple · Tónica · Sauco',
        },
        {
          nombre: 'Turbo Biela',
          desc: 'Norteño · Cordial de Cerveza · Limón · Vino Blanco',
        },
        {
          nombre: 'Spritz de Sandía',
          desc: 'Cordial de Sandía · Vino Blanco · Toping Sprite',
        },
      ],
    },

    mocktails: {
      precio: 'TODOS a $3.50',
      items: [
        {
          nombre: 'Super Saiyan',
          desc: 'Almíbar de Mango · Té Verde · Limón · Gasificado',
        },
        {
          nombre: 'Super Mario',
          desc: 'Almíbar de Hierba Buena · Limón · Flouting Especial · Gasificado',
        },
        {
          nombre: 'Spider Man',
          desc: 'Cordial de Mora · Hierba Luisa · Limón',
        },
        {
          nombre: 'Rayo McQueen',
          desc: 'Cordial de Maracuyá · Jamaica · Limón · Flouting Especial',
        },
      ],
    },
    
    bebidas: [
      {
        nombre: 'Limonada Arándanos',
        precio: '$2.50',
        desc: 'Almibar de Arándanos · Limón · Gasificado',
      },
      {
        nombre: 'Limonada Té Negro',
        precio: '$1.50',
        desc: 'Limón · Almibar Simple · Té Negro',
      },
      {
        nombre: 'Limonada Hierba Buena',
        precio: '$1.50',
        desc: 'Hierba Buena · Limón',
      },
      {
        nombre: 'Limonada Coco',
        precio: '$1.50',
        desc: 'Coco · Limón',
      },
    ],

    gaseosas: {
      precio: 'Gaseosas 330ml $1.00 · 1 Litro $1.80',
      items:  ['Coca-Cola', 'Sprite', 'Fanta', 'Fiora'],
    },

    extras: {
      precio: 'Extras & Bebidas',
      items: ['Agua sin Gas $1.00 · Agua con Gas $1.25',
                  'Powerade $1.60', 'Té Helado $1.00',
      ],
    },

    cervezas: [
      {
        nombre: 'Pilsener 330ml',
        precio: '$2.50',
      },
      {
        nombre: 'Club 330ml',
        precio: '$3.00',
      },
      {
        nombre: 'Corona 330ml',
        precio: '$3.50',
      },
      {
        nombre: 'Pilsener 600ml',
        precio: '$3.75',
      },
      {
        nombre: 'Club 550ml',
        precio: '$4.00',
      },
    ],

    jugos: {
      precio: 'SIMPLES $2.50 · MIXTOS $3.00',
      items: ['Mora', 'Guanábana', 'Fresa', 'Mango'],
    },

    batidos: {
      precio: 'SIMPLES $3.00 · MIXTOS $3.50',
      items: ['Mora', 'Guanábana', 'Fresa', 'Mango'],
    },

    promos: [
      {
        titulo: 'Miércoles',
        texto: '3x2 ($12.50) en Margaritas · 4:30PM a 8:30PM',
      },
      {
        titulo: 'Jueves',
        texto: '3x2 ($12.50) Gin & Tonic · 4:30PM a 8:30PM',
      },
      {
        titulo: 'Viernes Cervecero',
        texto: '3x2 Pilsener 600ML ($8.00) y Club 550ML ($9.50)',
      },
    ],
  };

const SectionCard = ({ title, subtitle, dark = false, children }) => (
  <div
    className={`rounded-[32px] border p-8 shadow-2xl hover:shadow-[0_20px_60px_rgba(0,0,0,0.35)] transition-all duration-300 ${
      dark
        ? 'bg-[#111111] border-white/10 text-white'
        : 'bg-white border-gray-200 text-black'
    }`}
  >
    <div className="mb-8">
      <h3 className="text-3xl font-black mb-2">{title}</h3>

      {subtitle && (
        <p
          className={`${
            dark ? 'text-gray-300' : 'text-gray-500'
          } uppercase text-sm tracking-wide`}
        >
          {subtitle}
        </p>
      )}
    </div>

    {children}
  </div>
);

  return (
    <div
  className="min-h-screen text-white font-sans overflow-x-hidden"
  style={{
    background:
      'linear-gradient(180deg,#080808 0%,#111111 35%,#171717 65%,#0b0b0b 100%)',
  }}
>
      <section className="relative min-h-screen flex items-center justify-center px-6 overflow-hidden">
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{
            backgroundImage:
              "url('https://images.unsplash.com/photo-1514362545857-3bc16c4c7d1b?q=80&w=2070&auto=format&fit=crop')",
          }}
        />

        <div className="absolute inset-0 bg-black/70" />

        <div className="relative z-10 text-center max-w-5xl mx-auto">
          <p className="uppercase tracking-[0.4em] text-yellow-400 mb-6 text-sm">
            Signature Cocktail Experience
          </p>

          <h1 className="text-6xl md:text-8xl font-black leading-none mb-6">
            Cocktail
            <span className="block text-yellow-400">On Canvas</span>
          </h1>

          <p className="text-gray-300 text-lg md:text-2xl mb-10 max-w-3xl mx-auto">
            Experiencias líquidas, sabores memorables y una atmósfera elegante.
          </p>

          <div className="flex flex-wrap justify-center gap-4">
            <a
              href="#menu"
              className="bg-yellow-400 text-black px-8 py-4 rounded-full font-bold transition duration-300"
            >
              Ver Menú
            </a>

            <a
              href={socialLinks.whatsapp}
              target="_blank"
              rel="noreferrer"
              className="border border-white/30 px-8 py-4 rounded-full font-semibold transition duration-300"
            >
              WhatsApp
            </a>
          </div>
        </div>
      </section>
<section className="fixed top-0 left-0 right-0 z-50 border-y border-white/10 bg-black/95 backdrop-blur-xl">
  <div className="max-w-7xl mx-auto px-4 py-4 flex flex-wrap justify-center gap-3">
    {[
      ['#clasicos', 'Clásicos'],
      ['#autor', 'Autor'],
      ['#mocktails', 'Mocktails'],
      ['#soft', 'Soft'],
      ['#gaseosas', 'Gaseosas'],
      ['#extras', 'Extras'],
      ['#jugos', 'Jugos'],
      ['#cervezas', 'Cervezas'],
      ['#promos', 'Promos'],
    ].map(([href, label]) => (
      <a
        key={label}
        href={href}
        className="px-5 py-2 rounded-full border border-white/10 bg-white/5 hover:bg-yellow-400 hover:text-black transition-all duration-300"
      >
        {label}
      </a>
    ))}
  </div>
</section>


      <main id="menu" className="max-w-7xl mx-auto px-4 md:px-6 pt-40 pb-24 space-y-12">
        <div className="text-center mb-16 bg-[#0b0b0b] py-6 rounded-3xl border border-white/5">
          <p className="text-yellow-400 uppercase tracking-[0.3em] text-sm mb-4">
            Menú Premium
          </p>

          <h2 className="text-5xl md:text-6xl font-black">
            Nuestra Carta
          </h2>
        </div>

        <div className="grid gap-10">
          <section id="clasicos">
            <SectionCard title="Cocktails Clásicos" subtitle={menu.clasicos.precio}>
              <div className="space-y-4">
                {menu.clasicos.items.map((item, index) => (
                  <div key={index} className="border-b border-gray-200 pb-4">
                    <h4 className="font-bold text-xl mb-1">{item.nombre}</h4>
                    <p className="text-gray-600">{item.desc}</p>
                  </div>
                ))}
              </div>
            </SectionCard>
          </section>

          <section id="autor">
            <SectionCard title="Cocktails de Autor" subtitle={menu.autor.precio}>
              <div className="space-y-4">
                {menu.autor.items.map((item, index) => (
                  <div key={index} className="border-b border-gray-200 pb-4">
                    <h4 className="font-bold text-xl mb-1">{item.nombre}</h4>
                    <p className="text-gray-600">{item.desc}</p>
                  </div>
                ))}
              </div>
            </SectionCard>
          </section>

          <section id="mocktails">
            <SectionCard dark title="Mocktails" subtitle={menu.mocktails.precio}>
              <div className="space-y-4">
                {menu.mocktails.items.map((item, index) => (
                  <div key={index} className="border-b border-white/10 pb-4">
                    <h4 className="font-bold text-xl mb-1">{item.nombre}</h4>
                    <p className="text-gray-300">{item.desc}</p>
                  </div>
                ))}
              </div>
            </SectionCard>
          </section>

          <section id="soft">
            <SectionCard title="Bebidas Soft">
              <div className="grid md:grid-cols-2 gap-4">
                {menu.bebidas.map((item, index) => (
                  <div
                    key={index}
                    className="border border-gray-200 rounded-2xl p-5 transition duration-300"
                  >
                    <div className="flex justify-between items-center mb-2 gap-4">
                      <h4 className="font-bold text-lg">{item.nombre}</h4>
                      <span className="font-bold whitespace-nowrap">{item.precio}</span>
                    </div>
                    <p className="text-gray-600 text-sm">{item.desc}</p>
                  </div>
                ))}
              </div>
            </SectionCard>
          </section>
         <section id="gaseosas">
  <SectionCard
    title="Gaseosas"
    subtitle={menu.gaseosas.precio}
  >
    <div className="grid md:grid-cols-4 gap-4">
      {menu.gaseosas.items.map((item, index) => (
        <div
          key={index}
          className="border rounded-2xl p-4 text-center font-semibold"
        >
          {item}
        </div>
      ))}
    </div>
  </SectionCard>
</section>

<section id="extras">
  <SectionCard
    dark
    title="Extras & Bebidas"
    subtitle={menu.extras.precio}
    >
    <div className="space-y-4">
         {menu.extras.items.map((item, index) => (
             <div
                key={index}
                  className="border-b border-white/10 pb-3"
                         >
                  {item}
                 </div>
               ))}
             </div>
            </SectionCard>
          </section>
          <section id="jugos" className="grid md:grid-cols-2 gap-8">
            <SectionCard title="Jugos" subtitle={menu.jugos.precio}>
              <div className="grid grid-cols-2 gap-4">
                {menu.jugos.items.map((item, index) => (
                  <div key={index} className="border rounded-2xl p-4 text-center font-semibold">
                    {item}
                  </div>
                ))}
              </div>
            </SectionCard>

            <SectionCard title="Batidos" subtitle={menu.batidos.precio}>
              <div className="grid grid-cols-2 gap-4">
                {menu.batidos.items.map((item, index) => (
                  <div key={index} className="border rounded-2xl p-4 text-center font-semibold">
                    {item}
                  </div>
                ))}
              </div>
            </SectionCard>
          </section>

          <section id="cervezas">
            <SectionCard title="Cervezas">
              <div className="space-y-4">
                {menu.cervezas.map((item, index) => (
                  <div key={index} className="flex justify-between items-center border-b border-gray-200 pb-4">
                    <h4 className="font-bold text-lg">{item.nombre}</h4>
                    <span className="font-bold">{item.precio}</span>
                  </div>
                ))}
              </div>
            </SectionCard>
          </section>

          <section id="promos">
            <SectionCard dark title="Promociones Especiales">
              <div className="grid md:grid-cols-3 gap-6">
                {menu.promos.map((promo, index) => (
                  <div
                    key={index}
                    className="bg-white/5 border border-white/10 rounded-3xl p-6 transition duration-300"
                  >
                    <h4 className="text-2xl font-black mb-3 text-yellow-400">
                      {promo.titulo}
                    </h4>
                    <p className="text-gray-300">{promo.texto}</p>
                  </div>
                ))}
              </div>
            </SectionCard>
          </section>
        </div>
      </main>

      <footer className="border-t border-white/10 py-12 px-6 text-center text-gray-400">
        <h3 className="text-3xl font-black text-white mb-4">
          Cocktail On Canvas
        </h3>

        <p className="mb-6">Mixología · Experiencia · Elegancia</p>

        <div className="flex flex-wrap justify-center gap-4">
          <a
            href={socialLinks.whatsapp}
            target="_blank"
            rel="noreferrer"
            className="bg-green-500 text-white px-6 py-3 rounded-full font-bold hover:scale-105 transition duration-300"
          >
            WhatsApp
          </a>

          <a
            href={socialLinks.instagram}
            target="_blank"
            rel="noreferrer"
            className="bg-gradient-to-r from-pink-500 to-purple-500 text-white px-6 py-3 rounded-full font-bold hover:scale-105 transition duration-300"
          >
            Instagram
          </a>
        </div>
      </footer>
    </div>
  );
}