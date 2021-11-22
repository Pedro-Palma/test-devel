

import { Id, RelationMappings } from 'objection';
import Base from './base';
import User from './users';

export class Poll extends Base {
    id!: Id;
    name!: string;
    description!: string;
    date!: Date;
    idUser?: Id
    user!: User

    static get tableName() {
        return 'polls';
    }


    static get relationMappings(): RelationMappings {
        return {
            user: {
                relation: Base.BelongsToOneRelation,
                modelClass: User,
                join: {
                    from: "polls.idUser",
                    to: "users.id",
                },
            }
        }
    }
}


export default Poll;