
  
import { Id, RelationMappings} from 'objection';
import Base from './base';
import {Poll} from './polls';

export class User extends Base {
id!: Id;
user! : string;
password! : string; 

static get tableName(){
    return'users';}


    static get relationMappings(): RelationMappings {
        return {
          id: {
            relation: Base.HasManyRelation,
            modelClass: Poll,
            join: {
              from: 'users.id',
              to: 'polls.idUser',
            },
          },
        };
    }

}


export default User;