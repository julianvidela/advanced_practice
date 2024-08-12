"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.main = void 0;
const all_services_service_1 = __importDefault(require("./services/all_services.service"));
const main = () => {
    const S = new all_services_service_1.default();
    // const fetchPro = S.professional.getProfessionalList(["john_doe", "jane23", "mike_wilson"]);
    // const fetchCompany = S.company.getProfessionalByCompanyName("GamingSoft");
    // console.log(fetchPro);
    // console.log(fetchCompany);
};
exports.main = main;
//# sourceMappingURL=main.js.map