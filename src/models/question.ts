

import { Id, RelationMappings } from 'objection';
import Base from './base';
import Poll from './polls';
import Type from './types';

export class Question extends Base {
    id!: Id;
    name!: string;
    title!:string;
    idType?:Id
    type!:Type
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
                    from: "questions.idPoll",
                    to: "polls.id",
                },
            },
            type:{
                relation: Base.BelongsToOneRelation,
                modelClass: Poll,
                join: {
                    from: "questions.idType",
                    to: "types.id",
                },
            }
        }
    }
}


export default Question;