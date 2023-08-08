//In simpler terms, async/await helps you 
// handle time-consuming tasks smoothly, and
//  req/res are terms used when a web browser(client) 
// talks to a server to get or send information.

import { connectToDB } from "@utils/database";
import Prompt from "@models/prompt";

export const POST = async(req)=>{
    const { userId, prompt, tag}= await req.json();
    try{
        await connectToDB();
        const newPrompt = new Prompt({
            creator:userId,
            prompt,
            tag})

        await newPrompt.save();
        return new Response(JSON.stringify(newPrompt),{ status: 201})

      
    }catch(error){
        return new Response(" failed to create a new prompt",{status: 501})
    }
}