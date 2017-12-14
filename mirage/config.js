export default function() {
  this.timing = 400;

  this.get("/juegos");
  this.post("/juegos");
  this.get("/juegos/:id");
  this.patch("/juegos/:id");
  this.put("/juegos/:id");
  this.del("/juegos/:id");

  this.get("/generos");
  this.post("/generos");
  this.patch("/generos");
  this.get("/generos/:id");
  this.put("/generos/:id");
  this.del("/generos/:id");

  this.get("/empresas");
  this.post("/empresas");
  this.patch("/empresas");
  this.get("/empresas/:id");
  this.put("/empresas/:id");
  this.del("/empresas/:id");
}
