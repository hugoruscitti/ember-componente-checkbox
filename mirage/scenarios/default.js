export default function(server) {
  let clasico = server.create("genero", { nombre: "clasico" });
  let arcade = server.create("genero", { nombre: "arcade" });
  let plataformas = server.create("genero", { nombre: "plataformas" });

  server.create("empresa", { nombre: "atari" });
  let nintendo = server.create("empresa", { nombre: "nintendo" });
  let namco = server.create("empresa", { nombre: "namco" });

  server.create("juego", { nombre: "pac-man", empresa: namco, generos: [arcade, clasico] });
  server.create("juego", { nombre: "mario", empresa: nintendo, generos: [plataformas] });
}
