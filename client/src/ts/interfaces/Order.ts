import { KeyStation, Station, Metadata } from '../interfaces'

export default interface Order {
  metadata: Metadata,
  stations: Station[],
  key_station: KeyStation
}