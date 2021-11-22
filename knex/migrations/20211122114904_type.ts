import { Knex } from "knex";

export async function up(knex: Knex): Promise<void> {
    return knex.schema.hasTable('types').then(function(exists) {
        if (!exists) {
          return knex.schema.createTable('types', function(t) {
            t.increments('id').notNullable().primary();
            t.string('type', 50).notNullable();
          });
        }
      });
}


export async function down(knex: Knex): Promise<void> {
    return knex.schema.hasTable('types').then(function(exists) {
        if (exists) {
          return knex.schema.dropTable('types');
        }
      });
}