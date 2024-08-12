"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const class_01_1 = require("../__pruebas__/p_01/class_01");
//! No preocuparse por el error de tipado, es pq aún no definiste alguna clase o propiedad.
describe("User", () => {
    let user;
    beforeEach(() => {
        user = new class_01_1.User(1, "john_doe", "password_123", ["reading", "gaming"], 25);
    });
    it("debería tener las propiedades correctas", () => {
        expect(user.id).toBe(1);
        expect(user.getUsername).toBe("john_doe");
        expect(user["hobbies"]).toEqual(["reading", "gaming"]);
        expect(user["age"]).toBe(25);
    });
    it("debería establecer el nombre de usuario correctamente", () => {
        user.setUsername("jane_doe");
        expect(user.getUsername).toBe("jane_doe");
    });
    it("debería obtener el nombre de usuario correctamente", () => {
        expect(user.getUsername).toBe("john_doe");
    });
    it("debería calcular correctamente si es adulto", () => {
        expect(user["_adult"]).toBe(true);
    });
    it("debería calcular correctamente si no es adulto", () => {
        const underageUser = new class_01_1.User(2, "jane_doe", "password_123", ["reading", "gaming"], 15);
        expect(underageUser["_adult"]).toBe(false);
    });
});
describe("main function", () => {
    it("debería instanciar User y llamar getPasswordBySecretPassword", () => {
        const consoleLogSpy = jest.spyOn(console, "log").mockImplementation(() => { });
        const getPasswordBySecretPasswordSpy = jest.spyOn(class_01_1.User.prototype, "getPasswordBySecretPassword");
        (0, class_01_1.main)();
        expect(consoleLogSpy).toHaveBeenCalled();
        expect(getPasswordBySecretPasswordSpy).toHaveBeenCalledWith("secret");
        consoleLogSpy.mockRestore();
        getPasswordBySecretPasswordSpy.mockRestore();
    });
});
describe("main function", () => {
    it("debería estar definida la función 'main'.", () => {
        expect(class_01_1.main).toBeDefined();
    });
    it("debería imprimir la contraseña correcta", () => {
        console.log = jest.fn();
        (0, class_01_1.main)();
        expect(console.log).toHaveBeenCalledWith("123Qwer");
    });
});
//# sourceMappingURL=p_01.test.js.map