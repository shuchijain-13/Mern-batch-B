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
        1000);
};
const Securitycheck = (callback) => {
    setTimeout(() => {
        console.log("security");
        callback();
    },
        2000);
};
const selfcheck = (callback) => {
    setTimeout(() => {
        console.log("self-checking done");
        callback();
    },
        3000);
};
const Navigationpanel = (callback) => {
    setTimeout(() => {
        console.log("navigation");
        callback();
    },
        1000);
};
const Bus = (callback) => {
    setTimeout(() => {
        console.log("Bus");
        callback();
    },
        2000);
};
const Airplane = (callback) => {
    setTimeout(() => {
        console.log("airplane");
        callback();
    },
        3000);
};
const Fly = (callback) => {
    setTimeout(() => {
        console.log("Off to fly");
        callback();
    },
        1000);
};
const Destination = (callback) => {
    setTimeout(() => {
        console.log("finally reached");
        callback();
    },
        2000);
};

console.log("Journey...");

user(() => {
    console.log("tickets in prod");
    order(() => {
        console.log("tickets ordered");
        Airport(() => {
            console.log("airport reached");
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