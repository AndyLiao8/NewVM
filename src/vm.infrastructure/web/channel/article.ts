import { number } from "prop-types";

// mock a web request

function getDatas(count: number = 10) {
    const result = [];
    for (var i = 0; i < count; i++) {
        result.push({
            id: i + 1,
            subject: `subject ${i}`,
            lastMessage: `Hello world ${i}`,
        });
    }
    return result;
}

export const getConversations = () => new Promise((resolve, reject) => {
    try {
        setTimeout(() => {
            resolve(getDatas());
        }, 500);
    } catch {
        reject('net error');
    }
});