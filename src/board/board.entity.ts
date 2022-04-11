import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity('boards')
export class BoardEntity {

    @PrimaryGeneratedColumn()
    id?: number;

    @Column()
    stage: number;

    @Column('text')
    title: string;

    constructor(id: number, stage: number, title: string) {
        this.id = id;
        this.stage = stage;
        this.title = title;
        console.log('Creo board Entity para ' + this.title);
    }

}