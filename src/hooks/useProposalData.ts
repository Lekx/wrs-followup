import { useEffect, useState } from "react";
import { proposalCoverRef, proposalFullRef } from "../data/Firebase";
import { useParams } from "react-router-dom";
import { Cover, CoverProposalResult } from "../shared/types";

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

export const useProposalFullData = () => {
  const [proposalData, setProposalData] = useState(null);
  const { proposalId } = useParams();

  useEffect(() => {
    const fetchData = async () => {
      try {
        const snapshot = await proposalFullRef(proposalId || "");
        const fetchedData = snapshot.val();
        setProposalData(fetchedData);
      } catch (error) {
        console.log(error);
      }
    };
    fetchData();
  }, []);
  console.log(proposalData);
  return proposalData;
};
