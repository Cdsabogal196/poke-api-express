import {Entity, PrimaryGeneratedColumn, Column} from 'typeorm';

@Entity()
export class Pokemon {
    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    name: string;

    @Column()
    base_experience: number;

    @Column()
    weight: number;

    @Column()
    height: number;

    @Column()
    order: number;


}