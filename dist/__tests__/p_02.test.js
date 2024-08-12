"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const all_services_service_1 = __importDefault(require("../__pruebas__/p_02/services/all_services.service"));
const company_service_1 = require("../__pruebas__/p_02/services/company.service");
const professional_service_1 = require("../__pruebas__/p_02/services/professional.service");
//! No preocuparse por el error de tipado, es pq aún no definiste alguna clase o propiedad.
describe("AllServices", () => {
    let S;
    beforeEach(() => {
        S = new all_services_service_1.default();
    });
    test("debería tener las propiedades company y professional", () => {
        expect(S).toHaveProperty("company");
        expect(S).toHaveProperty("professional");
    });
    test("company debería ser una instancia de CompanyService", () => {
        expect(S.company).toBeInstanceOf(company_service_1.CompanyService);
    });
    test("professional debería ser una instancia de ProfessionalService", () => {
        expect(S.professional).toBeInstanceOf(professional_service_1.ProfessionalService);
    });
    test("company debería incluir en sus parametros a this.profesional", () => {
        expect(S.company).toHaveProperty("_professional");
    });
});
describe("CompanyService", () => {
    let S;
    beforeEach(() => {
        S = new all_services_service_1.default();
    });
    test("company debería tener la función getProfessionalByCompanyName", () => {
        expect(S.company).toHaveProperty("getProfessionalByCompanyName");
    });
    test("company debería tener la propiedad _professional", () => {
        expect(S.company).toHaveProperty("_professional");
    });
    test("_professional (de CompanyService) debería ser una instancia de ProfessionalService", () => {
        expect(S.company["_professional"]).toBeInstanceOf(professional_service_1.ProfessionalService);
        expect(typeof S.company["_professional"].getProfessionalList).toBe("function");
    });
});
describe("ProfessionalService", () => {
    let S;
    beforeEach(() => {
        S = new all_services_service_1.default();
    });
    test("la propiedad 'S.professional' debería tener la función getProfessionalList", () => {
        expect(S.professional).toHaveProperty("getProfessionalList");
    });
    test("la propiedad 'S.professional' debería tener la función getProfessionalByUsername", () => {
        expect(S.professional).toHaveProperty("getProfessionalByUsername");
    });
});
describe("Function => getProfessionalList", () => {
    const result_getProfessionalList = [
        {
            id: 12,
            username: "john_doe",
            password: "123Qwer",
            primary_skill: "Software Developer",
            company_list: ["ReadStong", "GamingSoft"],
        },
        {
            id: 13,
            username: "jane23",
            password: "123Qwer",
            primary_skill: "UI/UX Designer",
            company_list: ["GamingSoft"],
        },
        {
            id: 16,
            username: "mike_wilson",
            password: "password123",
            primary_skill: "QA Engineer",
            company_list: ["GamingSoft"],
        },
    ];
    let S;
    beforeEach(() => {
        S = new all_services_service_1.default();
    });
    test("debería ser una función y existir en 'S.professional.getProfessionalList'.", () => {
        expect(typeof S.professional.getProfessionalList).toBe("function");
    });
    test("debería retornar un lista de profesionales adecuado.", () => {
        expect(S.professional.getProfessionalList(["john_doe", "jane23", "mike_wilson"])).toEqual(result_getProfessionalList);
    });
});
describe("Function => getProfessionalByCompanyName", () => {
    const result_getProfessionalByCompanyName = [
        {
            id: 12,
            username: "john_doe",
            password: "123Qwer",
            primary_skill: "Software Developer",
            company_list: ["ReadStong", "GamingSoft"],
        },
        {
            id: 13,
            username: "jane23",
            password: "123Qwer",
            primary_skill: "UI/UX Designer",
            company_list: ["GamingSoft"],
        },
        {
            id: 16,
            username: "mike_wilson",
            password: "password123",
            primary_skill: "QA Engineer",
            company_list: ["GamingSoft"],
        },
        {
            id: 17,
            username: "emily_brown",
            password: "password123",
            primary_skill: "QA Engineer",
            company_list: ["GamingSoft"],
        },
    ];
    let S;
    beforeEach(() => {
        S = new all_services_service_1.default();
    });
    test("debería ser una función y existir en 'S.company.getProfessionalByCompanyName'.", () => {
        expect(typeof S.company.getProfessionalByCompanyName).toBe("function");
    });
    test("debería retornar un lista de profesionales adecuado.", () => {
        expect(S.company.getProfessionalByCompanyName("GamingSoft")).toEqual(result_getProfessionalByCompanyName);
    });
});
//# sourceMappingURL=p_02.test.js.map