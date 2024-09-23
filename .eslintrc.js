module.exports = {
    "env": {
        "browser": true,
        "es2021": true,
        "node": true
    },
    "extends": "eslint:recommended",
    "parserOptions": {
        "ecmaVersion": 15
    },
    "rules": {
        "semi": ["error", "always"],
        "quotes": ["error", "double"],
        "no-trailing-spaces": "error",
        "camelcase": ["error", { "properties": "always" }],
        "max-len": ["error", { "code": 80 }]
    }
};
