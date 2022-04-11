import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { BoardEntity } from './board.entity';
import { BoardMapper } from './board.mapper';
import { BoardssController } from './board.controller';
import { BoardsRepository } from './board.repository';
import { BoardsService } from './board.service';

@Module({
  imports: [TypeOrmModule.forFeature([BoardEntity])],
  controllers: [BoardssController],
  providers: [BoardsService, BoardMapper, BoardsRepository]
})
export class BoardModule {}
