import {
  CostConcept,
  CostPayment,
  Cover,
  Followup,
  ListItem,
  Proposal,
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

/* Properties definitions for components */
export type ProposalBodyProps = {
  proposalData: Proposal | null;
};

export type CostTableProps = {
  costs: CostPayment[] | undefined;
};

export type PriceListProps = {
  list: CostConcept[] | undefined;
};

export type ProposalPinProps = {
  handleProposalCoverStorage: Function;
};

export type ProposalSummaryProps = {
  proposalCover: Cover;
};

export type SimpleListProps = {
  list: ListItem[] | undefined;
  numberedPrefix?: number | undefined;
  simpleList?: boolean | undefined;
};

export type TabPanelProps = {
  children?: React.ReactNode;
  index: number;
  value: number;
};

/* Dictionary definitions */
export type DictionaryItem = {
  text: string;
  icon: any;
};

export type Dictionary = {
  [key: string]: DictionaryItem;
};
