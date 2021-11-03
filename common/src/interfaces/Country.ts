import { Meta, Coord } from ".";

export interface Country {
  name: string;
  code: string;
  flag: string;
  coord: Coord;
}

export interface CountryEntity extends Country {
  meta: Meta;
}