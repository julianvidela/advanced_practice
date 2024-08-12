export interface Company {
    includes(companyName: any): unknown;
    id: string;
    name: CompanyName;
    password: string;
    professional_list: ProfessionalName[];
    featured_professional: string; // Profesional destacado, con mayor jerarquía.
}

export interface Professional {
    id: string;
    username: ProfessionalName;
    password: string;
    primary_skill: string;
    

    
}

export interface DB {
    companies: Company[];
    professionals: Professional[];
}


export type CompanyName = "GamingSoft" | "ReadStong" | "TechInnovators" | "HealthSolutions" | "EduTech" | "GreenEnergy" | "FinancePros" | "MarketingGurus" | "TravelAdventures" | "FoodiesHub" | "Fashionista" | "SportsMania";

export type ProfessionalName = "john_doe" | "jane23" | "mike_wilson" | "emily_brown" | "alex_smith" | "sarah_jones" | "david_johnson" | "jack_white" | "lucy_gray" | "mark_green" | "amy_blue" | "tom_brown" | "kate_black" | "lily_white" | "johnny_red" | "bruce_orange" | "olivia_yellow" | "george_gray" | "eva_purple" | "michael_silver" | "emma_gold" | "charlie_black" | "sophia_white" | "liam_blue" | "noah_green" | "mia_black" | "jack_blue" | "oliver_gray" | "ava_silver" | "logan_gold" | "isabella_black" | "william_white" | "james_blue" | "henry_green" | "ella_black" | "lucas_blue" | "charlotte_gray";