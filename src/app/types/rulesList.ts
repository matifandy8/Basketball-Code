export interface RulesList {
    rulesList: RulesListElement[];
}

export interface RulesListElement {
    id:    number;
    image: Image;
    text:  Text;
}

export interface Image {
    src: string;
    alt: string;
}

export interface Text {
    title:       string;
    description: string;
}