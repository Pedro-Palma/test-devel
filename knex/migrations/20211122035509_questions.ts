import { Knex } from "knex";


export async function up(knex: Knex): Promise<void> {
    return knex.schema.hasTable('users').then(function(exists) {
        if (!exists) {
          return knex.schema.createTable('users', function(t) {
            t.increments('id').notNullable().primary();
            t.string('user', 50).notNullable();
            t.string('password', 100).notNullable();

          });
        }
      });
}


export async function down(knex: Knex): Promise<void> {
    return knex.schema.hasTable('users').then(function(exists) {
        if (exists) {
          return knex.schema.dropTable('users');
        }
      });
}