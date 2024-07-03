import { Injectable } from '@nestjs/common';
import { CreateScanDTO } from 'src/dto/scans.dto';
import { PrismaService } from 'src/prisma.service';
import { CloudinaryService } from '../cloudinary/cloudinary.service';

@Injectable()
export class ScansService {
  constructor(
    private prisma: PrismaService,
    private readonly cloudinaryService: CloudinaryService,
  ) {}

  async create(scan: CreateScanDTO, userId: string) {
    const { imageData64 } = scan;
    const res = await this.cloudinaryService.uploadScan(imageData64);
    const { url } = res;
    return this.prisma.scan.create({ data: { url, userId } });
  }

  async findAll(userId: string, limit?: number) {
    const take = limit ? { take: +limit } : undefined;
    const found = await this.prisma.scan.findMany({
      where: { userId },
      ...take,
    });
    return found;
  }

  findOne(id: string) {
    return this.prisma.scan.findFirstOrThrow({ where: { id } });
  }

  remove(id: string) {
    return this.prisma.scan.delete({ where: { id } });
  }
}
