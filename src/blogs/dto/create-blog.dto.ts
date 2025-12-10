import {z} from 'zod'
import {createZodDto} from '@anatine/zod-nestjs'

export class CreateBlogDto extends createZodDto(z.object({
    title:z.string().max(10),
    content:z.string().min(5),
})){}