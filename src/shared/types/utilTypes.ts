import {
  CostConcept,
  CostPayment,
  Cover,
  Followup,
  ListItem,
  Proposal,
  ResourceGroup,
  Resouce,
} from ".";

/* Type definitions for custom hooks */
export type CoverProposalResult = {
  proposalCoverData: Cover | null;
  isCoverLoading: boolean;
};

export type ProposalResult = {
  proposalData: Proposal | null;
  isProposalLoading: boolean;
};

export type FollowupResult = {
  followupData: Followup[] | null;
  isFollowupLoading: boolean;
};
export type ResourcesResult = {
  resourceData: ResourceGroup[] | null;
  isResourceLoading: boolean;
};

/* Properties definitions for components */
export type ProposalBodyProps = {
  proposalData: Proposal | null;
};

export type CostTableProps = {
  costs?: CostPayment[];
};

export type PriceListProps = {
  list?: CostConcept[];
};

export type ProposalPinProps = {
  handleProposalCoverStorage: Function;
  coverSpecialNote?: String;
};

export type ProposalSummaryProps = {
  proposalCover: Cover;
};

export type SimpleListProps = {
  list?: ListItem[];
  numberedPrefix?: number;
  simpleList?: boolean;
};

export type TabPanelProps = {
  children?: React.ReactNode;
  index: number;
  value: number;
};

export type LinkListProps = {
  list?: Resouce[];
};

/* Dictionary definitions */
export type DictionaryItem = {
  text: string;
  icon: any;
};

export type Dictionary = {
  [key: string]: DictionaryItem;
};
