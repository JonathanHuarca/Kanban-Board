import { Body, Controller, Delete, Get, Param, Post, Put } from '@nestjs/common';
import { BoardDTO } from './board.dto';
import { BoardsService } from './board.service';

@Controller('boards')
export class BoardssController {

    constructor(private boardsService: BoardsService){}

    @Get()
    async getAllBoards(): Promise<BoardDTO[]> {
        return await this.boardsService.getAllBoards();
    }

    @Get(':id')
    async getBoardById(@Param('id') id: number): Promise<BoardDTO> {
        return await this.boardsService.getBoardById(id);
    }

    @Post()
    async newBoard(@Body() board: BoardDTO): Promise<BoardDTO> {
        return await this.boardsService.newBoard(board);
    }

    @Put(':id')
    async updateBoard(@Param('id') id: number, @Body() board: BoardDTO): Promise<BoardDTO> {
        return await this.boardsService.updateBoard(id, board);
    }

    @Delete(':id')
    async deleteBoard(@Param('id') id: number): Promise<void> {
        return await this.boardsService.deleteBoard(id);
    }

}