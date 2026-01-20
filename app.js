import { log } from 'node:console';
import fs from 'node:fs/promises';

(
    async () =>{
        const fileHandler = await fs.open('./commands.txt','r');
        const watcher = fs.watch("./commands.txt");
        for await (const events of watcher){
            if(events.eventType == 'change' && events.filename == 'commands.txt'){
                const size =  (await fileHandler.stat()).size;
                const buff = Buffer.alloc(size); //memory optimization 
                const lenght = size;
                const position = 0;
                const offset = 0;
                const content = await fileHandler.read(buff,offset,lenght,position);
                console.log(content);
            }
        }
    }
)();