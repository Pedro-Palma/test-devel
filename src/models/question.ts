

import { Id, RelationMappings } from 'objection';
import Base from './base';
import Poll from './polls';

export class Question extends Base {
    id!: Id;
    name!: string;
    title!:string;
    idPoll?: Id
    poll!: Poll

    static get tableName() {
        return 'questions';
    }


    static get relationMappings(): RelationMappings {
        return {
            poll: {
                relation: Base.BelongsToOneRelation,
                modelClass: Poll,
                join: {
                    from: "questions.id",
                    to: "polls.id",
                },
            }
        }
    }
}


export default Question;