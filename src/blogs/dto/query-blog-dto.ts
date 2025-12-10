import {z} from 'zod'
import {createZodDto} from '@anatine/zod-nestjs'

export class QueryBlogDto extends createZodDto(z.object({
    skip: z.coerce.number(),
    take: z.coerce.number(),
    title: z.string()
})){}