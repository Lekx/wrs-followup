import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { resourcesRef } from "../data/Firebase";
import { ResourceGroup, ResourcesResult } from "../shared/types";

export const useResourcesData = (): ResourcesResult => {
  const [resourceData, setResourcesData] = useState<ResourceGroup[] | null>(
    null
  );
  const [isResourceLoading, setIsResourceLoading] = useState<boolean>(true);
  const { proposalId } = useParams();

  useEffect(() => {
    const fetchData = async () => {
      try {
        const snapshot = await resourcesRef(proposalId || "");
        const fetchedData = snapshot.val();
        setResourcesData(fetchedData);
        setIsResourceLoading(false);
      } catch (error) {
        console.log(error);
        setIsResourceLoading(false);
      }
    };
    fetchData();
  }, []);
  return { isResourceLoading, resourceData };
};
