const EventEmitter=require('events');
const eventEmitter=new EventEmitter();
eventEmitter.on('greet',(name)=>{
    console.log(`Hello,${name}!`);
});
eventEmitter.on('farewell',(name)=>{
    console.log(`Goodbye,${name}!`);
});
const userAction=(action,name)=>{
    eventEmitter.emit(action,name);
};
const simulateUserActions=()=>{
    userAction('greet','Alice');
    userAction('farewell','Bob');
};
module.exports=simulateUserActions