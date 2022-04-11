import { ApiProperty } from "@nestjs/swagger";
import { Column, Entity, ManyToOne, OneToMany, PrimaryGeneratedColumn } from "typeorm";

export class BoardDTO {
    
    @ApiProperty()
    id?: number;

    @ApiProperty()
    stage: number;

    @ApiProperty()
    title: string;

    constructor(id: number, stage: number, title: string) {
        this.id = id;
        this.stage = stage;
        this.title = title;
    }
}