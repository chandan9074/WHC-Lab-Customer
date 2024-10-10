module.exports = {
    apps: [
        {
            name: "whclab-customer",
            script: "npx",
            args: "next start -p 3002",
            exec_mode: "fork",
            instances: 1,
        },
    ],
};
