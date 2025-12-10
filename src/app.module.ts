import { Module } from '@nestjs/common';
import { PrismaService } from './prisma.service';
import { BlogsModule } from './blogs/blogs.module';
import { AuthModule } from './auth/auth.module';
import { UsersModule } from './users/users.module';


@Module({
  imports: [BlogsModule, AuthModule, UsersModule],
  controllers: [],
  providers: [ PrismaService, ],
})
export class AppModule {}