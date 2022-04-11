import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { DeleteResult, Repository } from 'typeorm';
import { BoardDTO } from './board.dto';
import { BoardEntity } from './board.entity';
import { BoardMapper } from './board.mapper';

@Injectable()
export class BoardsRepository {

    constructor(
        @InjectRepository(BoardEntity) 
              private boardsRepository: Repository<BoardEntity>,
        private mapper: BoardMapper){}

    getAllBoards(): Promise<BoardEntity[]> {
        return this.boardsRepository.find();
    }

    getBoardById(id: number): Promise<BoardEntity> {
        return this.boardsRepository.findOne(id);
    }

    newBoard(boardDTO: BoardDTO): Promise<BoardEntity> {
        const newBoard = this.mapper.dtoToEntity(boardDTO);
        return this.boardsRepository.save(newBoard);
    }

    async updateBoard(id: number, boardDTO: BoardDTO): Promise<BoardEntity> {
        boardDTO.id = id;
        const updateBoard = this.mapper.dtoToEntity(boardDTO);
        await this.boardsRepository.update(id, updateBoard);
        return this.boardsRepository.findOne(id);

    }

    deleteBoard(id:number): Promise<DeleteResult> {
       return this.boardsRepository.delete(id);
    }

}