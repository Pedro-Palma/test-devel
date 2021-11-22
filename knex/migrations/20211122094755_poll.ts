import { Knex } from "knex";
import User from "../../src/models/users"

export async function up(knex: Knex): Promise<void> {
    return knex.schema.hasTable('polls').then(function(exists) {
        if (!exists) {
          return knex.schema.createTable('polls', function(t) {
            t.increments('id').notNullable().primary();
            t.string('name', 50).notNullable();
            t.string('description', 100).notNullable();
            t.date('date').notNullable();
            t.integer('idUser').notNullable();
            t.foreign('idUser').references('id').inTable(User.tableName).onDelete("CASCADE");
          });
        }
      });
}


export async function down(knex: Knex): Promise<void> {
    return knex.schema.hasTable('polls').then(function(exists) {
        if (exists) {
          return knex.schema.dropTable('polls');
        }
      });
}