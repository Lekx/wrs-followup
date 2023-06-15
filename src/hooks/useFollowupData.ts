import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { followupRef } from "../data/Firebase";
import { Followup, FollowupResult } from "../shared/types";

export const useFollowupData = (): FollowupResult => {
  const [followupData, setFollowupData] = useState<Followup[] | null>(null);
  const [isFollowupLoading, setIsFollowupLoading] = useState<boolean>(true);
  const { proposalId } = useParams();

  useEffect(() => {
    const fetchData = async () => {
      try {
        const snapshot = await followupRef(proposalId || "");
        const fetchedData = snapshot.val();
        setFollowupData(fetchedData);
        setIsFollowupLoading(false);
      } catch (error) {
        console.log(error);
        setIsFollowupLoading(false);
      }
    };
    fetchData();
  }, []);
  return { isFollowupLoading, followupData };
};
