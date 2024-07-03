import { Injectable } from '@nestjs/common';
import { CreateResultDTO, UpdateResultDTO } from 'src/dto/results.dto';
import { PrismaService } from 'src/prisma.service';
import { Result } from 'src/types/result.types';
import { User } from 'src/types/user.types';

@Injectable()
export class ResultsService {
  constructor(private prisma: PrismaService) {}

  async create(result: CreateResultDTO, userId: User['id']) {
    const { scanId, scanUrl, hasCancer } = result;
    return this.prisma.result.create({
      data: { scanId, scanUrl, hasCancer, userId },
    });
  }

  async findAll(userId: User['id'], limit?: number) {
    const take = limit ? { take: +limit } : undefined;
    const found = await this.prisma.result.findMany({
      where: { userId },
      ...take,
    });
    return found;
  }

  findOne(id: Result['id']) {
    return this.prisma.result.findFirstOrThrow({ where: { id } });
  }

  update(id: Result['id'], data: UpdateResultDTO) {
    return this.prisma.result.update({ where: { id }, data });
  }

  remove(id: Result['id']) {
    return `This action removes a #${id} result`;
  }
}
