import Route from "@ember/routing/route";
import { hash } from "rsvp";

export default Route.extend({
  afterModel(model) {
    let generos = this.get("store").findAll("genero");
    let empresas = this.get("store").findAll("empresa");

    model.set("listado_de_generos", generos);
    model.set("listado_de_empresas", empresas);

    return new hash({ generos, empresas });
  }
});
