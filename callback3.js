// const user = (callback) => {
//     setTimeout(() => {
//         console.log("order started");
//         callback();
//     },
//         2000);
// };
// const order = ( user,callback) => {
//     setTimeout(() => {
//         console.log("What to order");
//         callback();
//     },
//         1000);
// };
// const McDonals = (user,order,callback) => {
//     setTimeout(() => {
//         console.log("Dine In or Take Away!?");
//         callback();
//     },
//         1000);
// };
// const Potatoes = (callback) => {
//     setTimeout(() => {
//         console.log("Mesh the potatoes");
//         callback();
//     },
//         2000);
// };
// const Tikki= (Potatoes,callback) => {
//     setTimeout(() => {
//         console.log("Make the Tikki out of it");
//         callback();
//     },
//         1000);
// };
// const Veggies = (Potatoes,Tikkicallback) => {
//     setTimeout(() => {
//         console.log("Add some veggies");
//         callback();
//     },
//         2000);
// };
// const Sauces = (callback) => {
//     setTimeout(() => {
//         console.log("Some tangy sauces");
//         callback();
//     },
//         1000);
// };
// const Dough= (callback) => {
//     setTimeout(() => {
//         console.log("Knead the dough");
//         callback();
//     },
//         2000);
// };
// const Bun = (callback) => {
//     setTimeout(() => {
//         console.log("make the bun of it");
//         callback();
//     },
//         5000);
// };
// const BurgerReady = (callback) => {
//     setTimeout(() => {
//         console.log("Your burger is ready");
//         callback();
//     },
//         2000);
// };

// console.log("Ready to order");

// user(() => {
//     console.log("ordering..");
//     order(() => {
//         console.log("Burger");
//         McDonals(() => {
//             console.log("Take away");
//             Potatoes(() => {
//                 Tikki(() => {
//                     Veggies(() => {
//                         Sauces(() => {
//                             Dough(() => {
//                                 Bun(() => {
//                                     BurgerReady(() => {
//                                        console.log("I'm Loving It<3");
//                                     })
//                                 })
//                             })
//                         })
//                     })
//                 })
//             })
//         })
//     })
// })
const addVeggies = (callback) => {
    setTimeout(() => {
        const Veggies = "🥬"
        console.log("veggies preparing.." + Veggies);
        callback(Veggies)
    }, 3000);

}
const addTikki = (Veggies, callback) => {
    setTimeout(() => {
        const tikki = "🥔"
        console.log("tikki preparing.." + tikki);
        callback(tikki)
    }, 5000);

}
const MakeBurger = (Veggies, tikki, callback) => {
    setTimeout(() => {
        const Burger = "🍔"
        console.log("burger preparing.." + Burger);
        callback(Burger)
    }, 4000);
}




addVeggies((Veggies) => {
    console.log("veggies prepared");
    addTikki(Veggies, (tikki) => {
        console.log("Tikki prepared");
        MakeBurger(Veggies, tikki,(Burger) => {
            console.log("Burger is ready");
        })
    })
})