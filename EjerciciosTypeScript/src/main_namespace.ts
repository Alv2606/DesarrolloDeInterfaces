//Namespaces

namespace Common {
    export interface User {
        id: number;
        username: string;
    }

    export interface Error {
        id: number;
        message: string;
        critical: boolean;
    }
}

namespace Special {
    export interface User {
        uuid: string;
        username: string;
    }
}

const user1: Common.User = {
    id: 1,
    username: "Alvaro"
}

namespace Common {
    export interface Warning{
        id: number;
        message: string;
    }
}

const user2: Special.User = {
    uuid: "1",
    username: "Alvaro"
}

const warning: Common.Warning = {
    id: 1,
    message: "This is a warning"
}

console.log(warning, user1);