import Controller from "@ember/controller";

export default Controller.extend({
  actions: {
    guardar(model) {
      model.save().then(() => {
        this.transitionToRoute("index");
      });
    }
  }
});
