import { Cover, Proposal } from ".";

export interface CoverProposalResult {
  proposalCoverData: Cover | null;
  isCoverLoading: boolean;
}

export interface ProposalResult {
  proposalData: Proposal | null;
  isProposalLoading: boolean;
}
