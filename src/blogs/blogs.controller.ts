import { Controller, Get, Post, Body, Patch, Param, Delete, Injectable, Query } from '@nestjs/common';
import { BlogsService } from './blogs.service';
import { CreateBlogDto } from './dto/create-blog.dto';
import { UpdateBlogDto } from './dto/update-blog.dto';
import { PrismaService, } from 'src/prisma.service';
import {QueryBlogDto } from './dto/query-blog-dto';




@Controller('blogs')
export class BlogsController {
  constructor(private readonly blogsService: BlogsService, private prisma: PrismaService) {}

  @Get()
  async list (@Query()query: QueryBlogDto){

    const blog = await this.blogsService.findAll(query)
    return blog
  }

  @Post()
  create(@Body() createBlogDto: CreateBlogDto) {
  
    return this.blogsService.create(createBlogDto);
  }

   


  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.blogsService.findOne(Number(id));
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateBlogDto: UpdateBlogDto) {
    return this.blogsService.updated(+id, updateBlogDto);
  }

  @Delete(':id')
  delete(@Param('id') id: string) {
    return this.blogsService.deleteuser(+id);
  }
}
