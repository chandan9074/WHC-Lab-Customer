module.exports = {
    apps: [
        {
            name: "whc-lab.s2.zaagsys.com",
            script: "npx",
            args: "next start -p 3000",
            exec_mode: "fork",
            instances: 1,
        },
    ],
};
