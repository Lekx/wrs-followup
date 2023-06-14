export type Proposal = {
  cover: Cover;
  companay: Companay;
  acceptation: Acceptation;
  config: Config;
  summary: Summary;
  costs: Cost;
  deliverables: Deliverable;
  guarantees: Guarantee;
  modules: Module;
  sections: Section;
  techs: Tech;
  terms: Term;
};

export type Cover = {
  acceptedAt: Date;
  analyst: string;
  companyLogo: string;
  companyName: string;
  displayDate: Date;
  folio: string;
  title: string;
  version: string;
};

export type Companay = {
  logoUrl: string;
  name: string;
  slogan: string;
  contactList: Contact[];
};

export type Acceptation = {
  acceptedAt: string;
  acceptedBy: string;
};

export type Config = {
  [key: string]: string;
  folio: string;
  pin: string;
};

export type Contact = {
  name: string;
  email: string;
  cellphone: string;
  details: string;
};

export type Cost = ListItem & {
  payments: CostPayment[];
};

export type CostPayment = {
  title: string;
  list: CostConcept[];
};

export type CostConcept = ListItem & {
  amount: number;
};

export type Deliverable = {
  title: string;
  description: string;
  subsections: DeliverableItem[];
};

export type DeliverableItem = ListItem & {
  list: ListItem[];
};

export type ListItem = {
  title: string;
  description?: string;
  imgUrl?: string;
};

export type Guarantee = ListItem & {
  highlight: string;
  list: ListItem[];
};

export type Module = ListItem & {
  subModules: SubModule;
};

export type SubModule = ListItem[] & {
  fields: string[];
  refs: string[];
};

export type Section = ListItem & {
  list: ListItem[];
};

export type Summary = ListItem;

export type Tech = ListItem & {
  list: ListItem[];
};

export type Term = ListItem & {
  list: ListItem[];
};
