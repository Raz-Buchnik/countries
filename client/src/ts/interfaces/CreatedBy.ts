import { Entity } from './index'

export default interface CreatedBy {
  first_name?: string,
  last_name?: string,
  phone?: string,
  entity?: Entity
}