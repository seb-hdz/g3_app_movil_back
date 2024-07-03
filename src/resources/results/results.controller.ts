import { Controller, Get, Post, Body, Put, Param } from '@nestjs/common';
import { Delete, Headers, Query } from '@nestjs/common';
import { ResultsService } from './results.service';
import { CreateResultDTO, UpdateResultDTO } from 'src/dto/results.dto';

@Controller('results')
export class ResultsController {
  constructor(private readonly resultsService: ResultsService) {}

  @Post()
  create(@Headers() headers, @Body() createResultDto: CreateResultDTO) {
    const { authorization: userId } = headers;
    return this.resultsService.create(createResultDto, userId);
  }

  @Get()
  findAll(@Headers() headers, @Query() query) {
    const { authorization: userId } = headers;
    const { limit } = query ?? {};
    return this.resultsService.findAll(userId, limit);
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.resultsService.findOne(id);
  }

  @Put(':id')
  update(@Param('id') id: string, @Body() updateResultDto: UpdateResultDTO) {
    return this.resultsService.update(id, updateResultDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.resultsService.remove(id);
  }
}
