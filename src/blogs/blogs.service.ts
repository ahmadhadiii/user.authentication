import { Injectable } from '@nestjs/common';
import { CreateBlogDto } from './dto/create-blog.dto';
import { UpdateBlogDto } from './dto/update-blog.dto';
import { PrismaService } from 'src/prisma.service';
import { QueryBlogDto } from './dto/query-blog-dto';




@Injectable()
export class BlogsService {
  constructor (private readonly prisma: PrismaService)  {}

    async create(createBlogDto: CreateBlogDto) {
        const blog = await this.prisma.blog.create ({
          data: createBlogDto

   }) 
        return blog ;
       
}

   async getPostById  (id: string) {

    return this.prisma.blog.findUnique ({where:{ id: Number(id) }})
  

  }
  async findAll (query:QueryBlogDto){
   const blog = await this.prisma.blog.findMany({
      skip: query.skip,
      take: query.take,

      where: { 
        title:{
          contains: query.title
        }

      }
    })
    return blog
    }


  findOne(id: number) {
    return `This action returns a #${id} blog`;
  }

  

 async updated (id: number, UpdateBlogDto: UpdateBlogDto){
  const updatedBlog = await this.prisma.blog.update({
    where: { id },
    data: UpdateBlogDto,
  });
 

  return updatedBlog;           
}

  async deleteuser(id: number)
 { await this.prisma.blog.delete
    ({
      where: { id }, 
    });
     return "this has been removed"
  }
}
