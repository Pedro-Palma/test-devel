

import { Id, RelationMappings } from 'objection';
import Base from './base';
import Poll from './polls';
import Question from './question';

export class Answer extends Base {
    id!: Id;
    value!:string

    idQuestion?: Id
    question!: Question

    idPoll?:Id
    poll!:Poll

    static get tableName() {
        return 'answers';
    }


    static get relationMappings(): RelationMappings {
        return {
            poll: {
                relation: Base.BelongsToOneRelation,
                modelClass: Poll,
                join: {
                    from: "answer.idPoll",
                    to: "polls.id",
                },
            },
            question: {
                relation: Base.BelongsToOneRelation,
                modelClass: Question,
                join: {
                    from: "answer.idQuestion",
                    to: "questions.id",
                },
            }
            
        }
    }
}


export default Answer;