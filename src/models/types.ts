
  
import { Id, RelationMappings} from 'objection';
import Base from './base';

export class Type extends Base {
id!: Id;
type! : string;

static get tableName(){
    return'types';}
}


export default Type;