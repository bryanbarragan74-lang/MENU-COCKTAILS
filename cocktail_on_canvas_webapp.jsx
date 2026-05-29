export default function CocktailOnCanvas() {
  const menu = {
    clasicos: {
      precio: 'TODOS a $6.50',
      items: [
        {
          nombre: 'Mojito',
          desc: 'Limón · Maracuyá · Frutos rojos',
        },
        {
          nombre: 'Pisco Sour',
          desc: 'Limón · Maracuyá · Hierba Luisa',
        },
        {
          nombre: 'Paloma',
          desc: 'Tequila · Toronja · Almíbar simple',
        },
        {
          nombre: 'Margarita',
          desc: 'Tequila · Triple sec · Limón',
        },
        {
          nombre: 'Old Fashion',
          desc: 'Whisky · Angostura · Almíbar simple',
        },
        {
          nombre: 'Gin & Tonic',
          desc: 'Cítricos · Frutos rojos · Especias aromáticas',
        },
        {
          nombre: 'Tom Collins',
          desc: 'Gin · Limón · Almíbar simple · Gasificado',
        },
        {
          nombre: 'Clover Club',
          desc: 'Gin · Limón · Frutos rojos · Clara de huevo',
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
          desc: 'Ron · Limón · Almíbar de higo',
        },
        {
          nombre: 'Yoshi (Super Mario)',
          desc: 'Gin · Pepinillo · Tónica · Sauco',
        },
        {
          nombre: 'Turbo Biela',
          desc: 'Norteño · Cerveza · Limón · Vino Blanco',
        },
        {
          nombre: 'Spritz de Sandía',
          desc: 'Sandía · Vino Blanco · Sprite',
        },
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

    mocktails: {
      precio: 'TODOS a $3.50',
      items: [
        {
          nombre: 'Super Saiyan',
          desc: 'Mango · Té Verde · Limón',
        },
        {
          nombre: 'Super Mario',
          desc: 'Hierba Buena · Limón',
        },
        {
          nombre: 'Spider Man',
          desc: 'Mora · Hierba Luisa · Limón',
        },
        {
          nombre: 'Rayo McQueen',
          desc: 'Maracuyá · Jamaica · Limón',
        },
      ],
    },

    bebidas: [
      {
        nombre: 'Limonada Arándanos',
        precio: '$2.50',
        desc: 'Arándanos · Limón · Gasificado',
      },
      {
        nombre: 'Limonada Té Negro',
        precio: '$1.50',
        desc: 'Limón · Té Negro',
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
        texto: '3x2 Pilsener 600ML y Club 550ML',
      },
    ],
  };

  return (
    <div className="min-h-screen bg-[#f5f1ea] text-black font-sans scroll-smooth">
      <section className="relative overflow-hidden border-b border-gray-300 min-h-screen flex items-center">
        <div
          className="absolute inset-0 bg-cover bg-center brightness-50"
          style={{
            backgroundImage: "url('/cocktails-portada.jpg')",
          }}
        />

        <div className="absolute inset-0 bg-black/50" />

        <div className="relative z-10 max-w-7xl mx-auto px-6 py-32 text-center text-white">
          <h1 className="text-5xl md:text-7xl font-black tracking-wide mb-4">
            COCKTAIL ON CANVAS
          </h1>

          <p className="text-xl md:text-2xl text-gray-200">
            La hueca del capi
          </p>
        </div>
      </section>

      <section className="sticky top-0 z-50 bg-white/90 backdrop-blur border-b border-gray-200 px-4 py-4 shadow-sm">
        <div className="max-w-7xl mx-auto flex flex-wrap gap-3 justify-center">
          <a href="#menu" className="bg-black text-white px-5 py-2 rounded-full font-semibold hover:scale-105 transition">
            Menú
          </a>

          <a href="#clasicos" className="border px-5 py-2 rounded-full hover:bg-black hover:text-white transition">
            Clásicos
          </a>

          <a href="#autor" className="border px-5 py-2 rounded-full hover:bg-black hover:text-white transition">
            Autor
          </a>

          <a href="#mocktails" className="border px-5 py-2 rounded-full hover:bg-black hover:text-white transition">
            Mocktails
          </a>

          <a href="#soft" className="border px-5 py-2 rounded-full hover:bg-black hover:text-white transition">
            Soft
          </a>

          <a href="#jugos" className="border px-5 py-2 rounded-full hover:bg-black hover:text-white transition">
            Jugos
          </a>

          <a href="#cervezas" className="border px-5 py-2 rounded-full hover:bg-black hover:text-white transition">
            Cervezas
          </a>

          <a href="#promos" className="bg-yellow-400 px-5 py-2 rounded-full font-bold hover:scale-105 transition">
            Promos
          </a>

          <a
            href="https://wa.me/593984692408"
            target="_blank"
            rel="noreferrer"
            className="bg-green-500 text-white px-5 py-2 rounded-full font-bold"
          >
            WhatsApp
          </a>

          <a
            href="https://instagram.com/cocktailoncanva"
            target="_blank"
            rel="noreferrer"
            className="bg-pink-500 text-white px-5 py-2 rounded-full font-bold"
          >
            Instagram
          </a>
        </div>
      </section>

      <section id="menu" className="max-w-7xl mx-auto px-6 py-16">
        <h2 className="text-4xl font-bold mb-10 text-center">
          Nuestro Menú
        </h2>

        <div className="grid md:grid-cols-2 gap-8 mb-10">
          <div id="clasicos" className="bg-white p-8 rounded-3xl shadow-lg">
            <h3 className="text-3xl font-bold mb-2">Cocktails Clásicos</h3>
            <p className="text-gray-500 mb-6">{menu.clasicos.precio}</p>

            <div className="space-y-4">
              {menu.clasicos.items.map((item, index) => (
                <div key={index} className="border-b pb-3">
                  <h4 className="font-bold text-xl">{item.nombre}</h4>
                  <p className="text-gray-600">{item.desc}</p>
                </div>
              ))}
            </div>
          </div>

          <div id="autor" className="bg-white p-8 rounded-3xl shadow-lg">
            <h3 className="text-3xl font-bold mb-2">Cocktails de Autor</h3>
            <p className="text-gray-500 mb-6">{menu.autor.precio}</p>

            <div className="space-y-4">
              {menu.autor.items.map((item, index) => (
                <div key={index} className="border-b pb-3">
                  <h4 className="font-bold text-xl">{item.nombre}</h4>
                  <p className="text-gray-600">{item.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </div>

        <div className="grid md:grid-cols-2 gap-8 mb-10">
          <div id="mocktails" className="bg-black text-white p-8 rounded-3xl shadow-lg">
            <h3 className="text-3xl font-bold mb-2">Mocktails</h3>
            <p className="text-gray-300 mb-6">{menu.mocktails.precio}</p>

            <div className="space-y-4">
              {menu.mocktails.items.map((item, index) => (
                <div key={index} className="border-b border-gray-700 pb-3">
                  <h4 className="font-bold text-xl">{item.nombre}</h4>
                  <p className="text-gray-300">{item.desc}</p>
                </div>
              ))}
            </div>
          </div>

          <div id="cervezas" className="bg-white p-8 rounded-3xl shadow-lg">
            <h3 className="text-3xl font-bold mb-6">Cervezas</h3>

            <div className="space-y-4">
              {menu.cervezas.map((item, index) => (
                <div key={index} className="flex justify-between border-b pb-3">
                  <h4 className="font-bold text-xl">{item.nombre}</h4>
                  <span className="font-bold">{item.precio}</span>
                </div>
              ))}
            </div>
          </div>
        </div>

        <div id="soft" className="bg-white p-8 rounded-3xl shadow-lg mb-10">
          <h3 className="text-3xl font-bold mb-6">Bebidas Soft</h3>

          <div className="grid md:grid-cols-2 gap-4">
            {menu.bebidas.map((item, index) => (
              <div key={index} className="border rounded-2xl p-4">
                <div className="flex justify-between items-center mb-2">
                  <h4 className="font-bold text-xl">{item.nombre}</h4>
                  <span className="font-bold">{item.precio}</span>
                </div>
                <p className="text-gray-600">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>

        <div className="grid md:grid-cols-2 gap-8 mb-10">
          <div id="jugos" className="bg-white p-8 rounded-3xl shadow-lg">
            <h3 className="text-3xl font-bold mb-2">Jugos</h3>
            <p className="text-gray-500 mb-6">{menu.jugos.precio}</p>

            <div className="grid grid-cols-2 gap-4">
              {menu.jugos.items.map((item, index) => (
                <div key={index} className="border rounded-2xl p-4 text-center">
                  <h4 className="font-bold text-lg">{item}</h4>
                </div>
              ))}
            </div>
          </div>

          <div className="bg-white p-8 rounded-3xl shadow-lg">
            <h3 className="text-3xl font-bold mb-2">Batidos</h3>
            <p className="text-gray-500 mb-6">{menu.batidos.precio}</p>

            <div className="grid grid-cols-2 gap-4">
              {menu.batidos.items.map((item, index) => (
                <div key={index} className="border rounded-2xl p-4 text-center">
                  <h4 className="font-bold text-lg">{item}</h4>
                </div>
              ))}
            </div>
          </div>
        </div>

        <div id="promos" className="bg-[#101010] text-white rounded-3xl p-10">
          <h3 className="text-4xl font-black mb-8 text-center">
            Promociones
          </h3>

          <div className="grid md:grid-cols-3 gap-6">
            {menu.promos.map((promo, index) => (
              <div
                key={index}
                className="bg-white/10 rounded-3xl p-6 border border-white/10"
              >
                <h4 className="text-2xl font-bold mb-3">{promo.titulo}</h4>
                <p className="text-gray-300">{promo.texto}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
