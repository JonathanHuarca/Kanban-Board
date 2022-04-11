import { Injectable } from '@nestjs/common';
import { BoardDTO } from './board.dto';
import { BoardEntity } from './board.entity';
import { BoardMapper } from './board.mapper';
import { BoardsRepository } from './board.repository';

@Injectable()
export class BoardsService {

    constructor(
        private boardsRepository: BoardsRepository,
        private mapper: BoardMapper
        ){}

    async getAllBoards(): Promise<BoardDTO[]> {
        const boards: BoardEntity[] = await this.boardsRepository.getAllBoards()
        return boards.map(board => this.mapper.entityToDto(board));
    }

    async getBoardById(id: number): Promise<BoardDTO> {
        const board: BoardEntity = await this.boardsRepository.getBoardById(id);
        return this.mapper.entityToDto(board);
    }

    async newBoard(boardDTO: BoardDTO): Promise<BoardDTO> {
        const newBoard: BoardEntity = await this.boardsRepository.newBoard(boardDTO);
        return this.mapper.entityToDto(newBoard);
    }

    async updateBoard(id: number, boardDTO: BoardDTO): Promise<BoardDTO> {
        const updateBoard = await this.boardsRepository.updateBoard(id, boardDTO);
        return this.mapper.entityToDto(updateBoard);
    }

    async deleteBoard(id: number): Promise<void> {
        await this.boardsRepository.deleteBoard(id);
    }

}