import { Model, hasMany, belongsTo } from "ember-cli-mirage";

export default Model.extend({
  generos: hasMany(),
  empresa: belongsTo()
});
