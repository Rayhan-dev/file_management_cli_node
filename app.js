import { log } from 'node:console';
import fs from 'node:fs/promises';

(
    async () =>{
        const fileHandler = await fs.open('./commands.txt','r');

        fileHandler.on("change",async ()=>{
            const size =  (await fileHandler.stat()).size;
                const buff = Buffer.alloc(size); //memory optimization 
                const lenght = size;
                const position = 0;
                const offset = 0;
                await fileHandler.read(buff,offset,lenght,position);
                console.log(buff.toString("utf-8"));
        })
        const watcher = fs.watch("./commands.txt");
        for await (const events of watcher){
            if(events.eventType == 'change' && events.filename == 'commands.txt'){
                fileHandler.emit("change");
            }
        }
    }
)();