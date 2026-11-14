module.exports = {
    pipeline: {
        clean: {
            cache: false,
            outputs: [],
        },
        build: {
            dependsOn: ["^build"],
            outputs: ["lib/**"],
        },
        typecheck: {
            dependsOn: ["^build"],
            outputs: [],
        },
        test: {
            dependsOn: ["build"],
            outputs: [],
        },
        start: {
            dependsOn: ["build"],
            cache: false,
            outputs: [],
        },
    },
};