import { ConflictException, Injectable } from '@nestjs/common';
import { CreateUserDTO, UpdateUserDTO } from 'src/dto/user.dto';
import { PrismaService } from 'src/prisma.service';
import { hashCode } from 'src/utils/global.utils';

@Injectable()
export class UsersService {
  constructor(private prisma: PrismaService) {}

  getUsers() {
    return this.prisma.user.findMany();
  }

  getUser(id: string) {
    return this.prisma.user.findFirstOrThrow({ where: { id } });
  }

  async createUser(user: CreateUserDTO) {
    const found = await this.prisma.user.findFirst({
      where: { email: user.email },
    });
    const { email } = found ?? {};
    if (email) throw new ConflictException('Email already exists');
    const data = { ...user, password: `${hashCode(user.password)}` };
    return this.prisma.user.create({ data });
  }

  updateUser(id: string, user: UpdateUserDTO) {
    return this.prisma.user.update({ where: { id }, data: user });
  }

  deleteUser(id: string) {
    return this.prisma.user.delete({ where: { id } });
  }
}
