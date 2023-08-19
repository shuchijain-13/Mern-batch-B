const user = (callback) => {
    setTimeout(() => {
        console.log("order tickets");
        callback();
    },
        2000);
};
const order = (callback) => {
    setTimeout(() => {
        console.log("Airport calling..");
        callback();
    },
        1000);
};
const Airport = (callback) => {
    setTimeout(() => {
        console.log("checking started");
        callback();
    },
        1000);
};
const boardingpass = (callback) => {
    setTimeout(() => {
        console.log("boarding");
        callback();
    },
        2000);
};
const securitycheck = (callback) => {
    setTimeout(() => {
        console.log("security");
        callback();
    },
        3000);
};
console.log("Journey...");

user(() => {
    console.log("tickets in prod");
    order(() => {
        console.log("tickets ordered");
        Airport(() => {
            console.log("");
            boardingpass(() => {
                Securitycheck(() => {
                    selfcheck(() => {
                        Navigationpanel(() => {
                            Bus(() => {
                                Airplane(() => {
                                    Fly(() => {
                                        Destination(() => {
                                            console.log("ended");
                                        })
                                    })
                                })
                            })
                        })
                    })
                })
            })
        })
    })
})