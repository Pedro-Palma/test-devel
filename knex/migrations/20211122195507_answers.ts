import { Knex } from "knex";
import Question from "../../src/models/question";
import Poll from "../../src/models/polls";

export async function up(knex: Knex): Promise<void> {
    return knex.schema.hasTable('answers').then(function(exists) {
        if (!exists) {
          return knex.schema.createTable('answers', function(t) {
            t.increments('id').notNullable().primary();
            t.string('value', 100).notNullable();
            t.integer('idPoll').notNullable();
            t.integer('idQuestion').notNullable();
            t.foreign('idQuestion').references('id').inTable(Question.tableName).onDelete("CASCADE");
            t.foreign('idPoll').references('id').inTable(Poll.tableName)
          });
        }
      });
}


export async function down(knex: Knex): Promise<void> {
    return knex.schema.hasTable('answers').then(function(exists) {
        if (exists) {
          return knex.schema.dropTable('answers');
        }
      });
}

