import {watch} from 'node:fs/promises';

(
    async () =>{
        const watcher = watch("./commands.txt");
        for await (const events of watcher){
            if(events.eventType == 'change' && events.filename == 'commands.txt'){
                console.log(events);
            }
        }
    }
)();