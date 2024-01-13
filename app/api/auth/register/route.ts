// // Next.js API route support: https://nextjs.org/docs/api-routes/introduction
// import { signUp } from '@/lib/firebase/service'
// import type { NextApiRequest, NextApiResponse } from 'next'

// type Data = {
//   status: boolean
//   message: string
// }

// const handler = async function register(
//   req: NextApiRequest,
//   res: NextApiResponse<Data>
// ) {
//   if(req.method === "POST"){
//     await signUp(req.body, 
//       ({status,message}:{status:boolean, message:string}) => {
//       if (status){
//         res.status(200).json({status, message})
//       } else {
//         res.status(400).json({status, message})
//       }
//     })
//   } else {
//     res.status(405).json({status:false, message:"Method not allowed"})
//   }
// }

// export { handler as GET, handler as POST };

import { signUp } from "@/lib/firebase/service"
import { NextRequest, NextResponse } from "next/server"

export async function POST(request: NextRequest) {
  const req = await request.json()
  const res = await signUp(req);
  return NextResponse.json( 
    {status: res?.status, message : res?.message}, 
    {status: res?.statusCode})
}