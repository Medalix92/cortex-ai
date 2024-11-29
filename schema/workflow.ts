import { z } from 'zod'

export const workflowSchema = z.object({
    name: z.string().max(100),
    description: z.string().max(500).optional(),
})