
import { Column, Entity } from 'typeorm';
import BaseModel from './base.entity';

@Entity('map_shops')
export class MapShopEntity extends BaseModel {
  @Column()
  name: string;

  @Column()
  telephone: string;
}
