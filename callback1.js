const placeorder=(callback)=>
{
    setTimeout(()=>{
        console.log("order placed");
        callback();
    },
    2000);
};
const startproduction=(callback)=>
{
    setTimeout(()=>{
        console.log("production started");
        callback();
    },
    5000);
};
const printid=(callback)=>
{
    setTimeout(()=>{
        console.log("id printed");
        callback();
    },
    2000);
};
const productname=(callback)=>
{
    setTimeout(()=>{
        console.log("product name");
        callback();
    },
    2000);
};
const productdesc=(callback)=>
{
    setTimeout(()=>{
        console.log("description");
        callback();
    },
    2000);
};
console.log("ordering products...");
placeorder(()=>{
    console.log("In production");
    startproduction(()=>
    {
        console.log("printing items statrted");
        printid(()=>
        {
            productname(()=>
            {
                productdesc(()=>
                {
                 console.log("day ended");
                })
            })
        })
    })
})
