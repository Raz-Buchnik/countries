import { CreatedBy, CreatedAt } from './index'

export default interface Metadata {
  created_by?: CreatedBy,
  created_at: CreatedAt
}