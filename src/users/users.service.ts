import { Injectable } from '@nestjs/common';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
import { PrismaService } from 'src/prisma.service';
import * as bcrypt from 'bcrypt';








@Injectable()
export class UsersService {
  constructor(private readonly prisma: PrismaService) {}

  async create(createUserDto: CreateUserDto) {
    const hashedPassword = await bcrypt.hash(createUserDto.password, 10);

    const user = await this.prisma.user.create({
      data: {
        username: createUserDto.username,
        password: hashedPassword,
      },
    });

    return user;
  }
  async register (createUserDto: CreateUserDto){
  return this.create(createUserDto)

}
async login (createUserDto:CreateUserDto){
  return this.create(createUserDto)
}
   

  async findAll() {
    return this.prisma.user.findMany()
  }

 async findOne( username : string,) {
    const user = await this.prisma.user.findFirst({
      where:{ username },
    });

    return user;
  }

  update(id: number, updateUserDto: UpdateUserDto) {
    return `This action updates a #${id} user`;
  }

  remove(id: number) {
    return `This action removes a #${id} user`;
  }
}
