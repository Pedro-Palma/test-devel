import { Knex } from "knex";
import Poll from "../../src/models/polls"
import Type from "../../src/models/types"

export async function up(knex: Knex): Promise<void> {
    return knex.schema.hasTable('questions').then(function(exists) {
        if (!exists) {
          return knex.schema.createTable('questions', function(t) {
            t.increments('id').notNullable().primary();
            t.string('name', 50).notNullable();
            t.string('title', 100).notNullable();
            t.integer('idPoll').notNullable();
            t.integer('idType').notNullable();
            t.foreign('idType').references('id').inTable(Type.tableName).onDelete("CASCADE");
            t.foreign('idPoll').references('id').inTable(Poll.tableName).onDelete("CASCADE");
          });
        }
      });
}


export async function down(knex: Knex): Promise<void> {
    return knex.schema.hasTable('questions').then(function(exists) {
        if (exists) {
          return knex.schema.dropTable('questions');
        }
      });
}