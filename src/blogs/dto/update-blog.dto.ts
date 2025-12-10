import {z} from 'zod'
import {createZodDto} from '@anatine/zod-nestjs'

export class UpdateBlogDto extends createZodDto(z.object({
    title:z.string().max(10),
    content:z.string().min(5),
    published:z.boolean().default(false),
})){}