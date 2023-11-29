import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { proposalCoverRef, proposalFullRef } from "../data/Firebase";
import {
  Cover,
  CoverProposalResult,
  Proposal,
  ProposalResult,
} from "../shared/types";

export const useProposalCoverData = (): CoverProposalResult => {
  const [proposalCoverData, setProposalCoverData] = useState<Cover | null>(
    null
  );
  const [isCoverLoading, setIsCoverLoading] = useState<boolean>(true);
  const { proposalId } = useParams();

  useEffect(() => {
    const fetchData = async () => {
      try {
        const snapshot = await proposalCoverRef(proposalId || "");
        const fetchedData = snapshot.val();
        setProposalCoverData(fetchedData);
        setIsCoverLoading(false);
      } catch (error) {
        console.log(error);
        setIsCoverLoading(false);
      }
    };
    fetchData();
  }, []);
  return { isCoverLoading, proposalCoverData };
};

export const useProposalFullData = (): ProposalResult => {
  const [proposalData, setProposalData] = useState<Proposal | null>(null);
  const [isProposalLoading, setIsProposalLoading] = useState(true);
  const { proposalId } = useParams();

  useEffect(() => {
    const fetchData = async () => {
      try {
        const snapshot = await proposalFullRef(proposalId || "");
        const fetchedData = snapshot.val();

        setProposalData(fetchedData);
        setIsProposalLoading(false);
      } catch (error) {
        console.log(error);
        setIsProposalLoading(false);
      }
    };
    fetchData();
  }, []);
  return { isProposalLoading, proposalData };
};
