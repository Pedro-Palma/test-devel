
  
import { Id, RelationMappings} from 'objection';
import Base from './base';

export class User extends Base {
id!: Id;
user! : string;
password! : string; 

static get tableName(){
    return'users';}




}


export default User;