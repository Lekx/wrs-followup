export type Proposal = {
  cover: Cover;
  companay: Companay;
  acceptation: Acceptation;
  config: Config;
  summary: Summary;
  cost: Cost;
  deliverables: Deliverable;
  guarantee: Guarantee;
  modules: Module[];
  sections: Section;
  techs: Tech;
  terms: Term;
};

export type Cover = {
  acceptedAt: string;
  analyst: string;
  companyLogo: string;
  companyName: string;
  displayDate: string;
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
  list?: ListItem[];
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

export type Summary = {
  issue: string;
  solution: string;
};

export type Tech = ListItem & {
  list: ListItem[];
};

export type Term = ListItem & {
  list: ListItem[];
};

export type Followup = {
  type: string;
  content: string;
  creationDate: string;
  createdBy: string;
  display: boolean;
  status?: string;
};

export type ResourceGroup = ListItem & {
  list: Resouce[];
  icon?: any;
  display: boolean;
};

export type Resouce = ListItem & {
  linkUrl: string;
};
