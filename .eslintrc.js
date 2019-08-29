module.exports = {
    "extends": "tui",
    "env": {
        "browser": true,
        "amd": true,
        "node": true,
        "jasmine": true,
        "jquery": true
    },
    "globals": {
        "tui": true,
        "loadFixtures": true
    },
    "rules": {
        "dot-notation": ["error", { "allowKeywords": true }]
    }
};
