const messages = [
    "David",
    "Ivan",
    "Stef",
    "Pedro",
    "Juan",
    "Carlos",
    "Lucas"
];

const randomMsg = () => {
    const message = messages[Math.floor(Math.random() * messages.length)];

    console.log(message);
}

module.exports = { randomMsg };