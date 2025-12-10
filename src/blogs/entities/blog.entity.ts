import { 
    Blog as PrismaBlog
} from '@prisma/client'

export class Blog implements PrismaBlog {
    id: number
    username: string
    content: string | null
    published: boolean | null
    title: string
}
