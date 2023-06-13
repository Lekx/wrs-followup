import { useEffect, useState } from "react";
import { proposalCoverRef, proposalFullRef } from "../data/Firebase";
import { useParams } from "react-router-dom";

export const useProposalCoverData = () => {
  const [proposalCoverData, setProposalCoverData] = useState(null);
  const { proposalId } = useParams();

  useEffect(() => {
    const fetchData = async () => {
      try {
        const snapshot = await proposalCoverRef(proposalId || "");
        const fetchedData = snapshot.val();
        setProposalCoverData(fetchedData);
      } catch (error) {
        console.log(error);
      }
    };
    fetchData();
  }, []);
  return proposalCoverData;
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
