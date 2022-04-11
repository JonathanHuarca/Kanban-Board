import { Injectable } from "@nestjs/common";
import { BoardDTO } from "./board.dto";
import { BoardEntity } from "./board.entity";

@Injectable()
export class BoardMapper {

    dtoToEntity(boardDTO: BoardDTO): BoardEntity {
        return new BoardEntity(boardDTO.id, boardDTO.stage ,boardDTO.title);
    }

    entityToDto(boardEntity: BoardEntity): BoardDTO {
        return new BoardDTO(boardEntity.id, boardEntity.stage, boardEntity.title);
    }

}