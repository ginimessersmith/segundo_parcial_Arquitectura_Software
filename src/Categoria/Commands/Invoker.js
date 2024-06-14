import Command from "./Command.js";
export default class Invoker{

    // const list = Command[];

    
    constructor(){
        this.command = null;
        this.historyCommands = [];
    }

    setCommand(command){
        this.command =command
    }
    
    executeCommand(){
        this.command.execute();
        this.historyCommands.push(this.command);
    }

    undoCommand(){
        if(this.historyCommands.length === 0){
            return;
        }
        const lastCommand= this.historyCommands.pop();
        lastCommand.undo();
    }
}