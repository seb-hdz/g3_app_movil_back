import { Injectable, UnauthorizedException } from '@nestjs/common';
import { AuthUserDTO } from 'src/dto/user.dto';
import { PrismaService } from 'src/prisma.service';
import { hashCode } from 'src/utils/global.utils';

@Injectable()
export class AuthService {
  constructor(private prisma: PrismaService) {}

  async authUser(user: AuthUserDTO) {
    const found = await this.prisma.user.findFirst({
      where: { email: user.email },
    });
    const { email, password } = found ?? {};
    if (!email) {
      throw new UnauthorizedException('No user found with this email');
    }

    if (password !== `${hashCode(user.password)}`) {
      throw new UnauthorizedException('Invalid credentials');
    }

    return found;
  }
}
