import { Cover } from ".";

export interface CoverProposalResult {
  proposalCoverData: Cover | null;
  isCoverLoading: boolean;
}
