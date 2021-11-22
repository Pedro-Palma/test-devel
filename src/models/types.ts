
  
import { Id, RelationMappings} from 'objection';
import Base from './base';
import Question from './question';

export class Type extends Base {
id!: Id;
type! : string;

static get tableName(){
    return'types';}


static get relationMappings(): RelationMappings {
    return {
      id: {
        relation: Base.HasManyRelation,
        modelClass: Question,
        join: {
          from: 'types.id',
          to: 'questions.idType',
        },
      },
    };
}

}

export default Type;