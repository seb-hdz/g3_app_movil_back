import { Controller, Get, Headers, Post, Query } from '@nestjs/common';
import { Body, Param, Delete } from '@nestjs/common';
import { ScansService } from './scans.service';
import { CreateScanDTO } from 'src/dto/scans.dto';

@Controller('scans')
export class ScansController {
  constructor(private readonly scansService: ScansService) {}

  @Post()
  create(@Headers() headers, @Body() createScanDto: CreateScanDTO) {
    const { authorization: userId } = headers;
    return this.scansService.create(createScanDto, userId);
  }

  @Get()
  findAll(@Headers() headers, @Query() query) {
    const { authorization: userId } = headers;
    const { limit } = query ?? {};
    return this.scansService.findAll(userId, limit);
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.scansService.findOne(id);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.scansService.remove(id);
  }
}
