"use server"

import prisma from "@/lib/db"
import { auth } from "@clerk/nextjs/server"




export const getWorkflows = async () => {
    const {userId} = await auth()
    if(!userId){
        throw new Error('User not authenticated')
    }
    return prisma.workflow.findMany({
        where:{
            userId
        },
        orderBy: {
            createdAt: 'asc'
        }
    })

}

