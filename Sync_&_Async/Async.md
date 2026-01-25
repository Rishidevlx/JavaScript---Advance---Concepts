Asynchronous na Neriya blocks of code iruku , ellamey Queue ah iruku , oru block of code ku resource theve paduthu but ila 
so adhukaga adhuku pinala ula queue la ulla codes wait panama , Resource needed code ah wait pana vachutu other codes lam execute agum .


Normal ah oru func epdi work agum na 

1. Func line vandha odaney adhu Call Stack la irukum (Box) 
 Call Stack la Execute agitu current func Terminate agidum , and next func load agum like namma rations kada mari dhan.

2. Suppose edhachum asyncho irundha adha WEBAPIs ku anupum apdina adhu browser dhan adhula Callback Queue ku send pannum 

3. Callback queue la Event loop nu onnu run agum idhu Call back Queue la edhachum Func irundha adha Andha secs vara hold panitu run pannum. 

ipdi dhan Func execute agudhu 

Call Stack 
    ||
WEBAPIs
    ||
Callback Queue ==> Event loop 

// Event Loop 

idhula 2 vidham iruku 

1. Micro Task Queue - First Priority

// Promise - idhu mari oru sila small tasks lam irukum 

2. Macro Task Queue - Second Priority

// SetTimeout() - indha mari konjam large task lam irukum 
