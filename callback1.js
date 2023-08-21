const placeorder=()=>
{
    return new Promise((resolve, reject) => {
    setTimeout(()=>{
        console.log("order placed");
        resolve();
    },2000);
});
};
const startproduction=()=>
{
    return new Promise((resolve, reject) => {
    setTimeout(()=>{
        console.log("production");
        resolve();
    },1000);
});
};
const printid=()=>
{
    return new Promise((resolve, reject) => {
    setTimeout(()=>{
        console.log("id printed");
        resolve();
    },2000);
});
};
const productname=()=>
{
    return new Promise((resolve, reject) => {
    setTimeout(()=>{
        console.log("name printed");
        resolve();
    },1000);
});
};
const productdesc=()=>
{
    return new Promise((resolve, reject) => {
    setTimeout(()=>{
        console.log("description");
        resolve();
    },2000);
});
};

// placeorder(()=>{
//     console.log("In production");
//     startproduction(()=>
//     {
//         console.log("printing items statrted");
//         printid(()=>
//         {
//             productname(()=>
//             {
//                 productdesc(()=>
//                 {
//                  console.log("day ended");
//                 })
//             })
//         })
//     })
// })
console.log("ordering products...");
placeorder()

    .then(()=>
    {
        console.log("In production");
        return startproduction()
    })
    .then(()=>
    {
        console.log("printing items statrted");
        return printid()
    })
    .then(()=>
    {
        console.log("naming started");
        return productname()
    })
    .then(()=>
    {
        console.log("description");
        return productdesc()
    })
    .catch(()=>
    {
      console.log("error");
    });

