import { useEffect, useState } from "react";
import {
  Alert,
  AlertTitle,
  Box,
  CircularProgress,
  Container,
  Tabs,
} from "@mui/material";
import Tab from "@mui/material/Tab";
import { TabPanel, a11yProps } from "../components/Tabs";
import {
  useProposalCoverData,
  useProposalFullData,
} from "../hooks/useProposalData";
import ProposalSummary from "../components/ProposalSummary";
import ProposalPin from "../components/ProposalPin";
import { Cover } from "../shared/types";
import ProposalBody from "../components/ProposalBody";

export default function ProposalPage() {
  const { isCoverLoading, proposalCoverData } = useProposalCoverData();
  const { proposalData } = useProposalFullData();
  const [proposalAuthorized, setProposalAuthorized] = useState<boolean>(false);
  const [storageData, setStorageData] = useState<Cover[]>([]);
  const [tabValue, setTabValue] = useState<number>(0);

  const handleChange = (_event: React.SyntheticEvent, newValue: number) => {
    setTabValue(newValue);
  };

  const getStorageData = () => {
    const storageData = localStorage.getItem("wrs-followup-proposals");
    if (storageData) {
      setStorageData(JSON.parse(storageData));
    }
  };

  useEffect(() => {
    getStorageData();

    if (
      !isCoverLoading &&
      storageData.filter(
        (proposal: Cover) => proposal.folio === proposalCoverData?.folio
      ).length > 0
    ) {
      setProposalAuthorized(true);
    }
    // }
  }, [isCoverLoading]);

  // User already authorized
  const handlePinResponse = () => {
    if (
      storageData.filter(
        (proposal: Cover) => proposal.folio === proposalCoverData?.folio
      )
    ) {
      if (proposalCoverData) storageData.push(proposalCoverData);

      localStorage.setItem(
        "wrs-followup-proposals",
        JSON.stringify(storageData)
      );
    }
    setProposalAuthorized(true);
  };

  return (
    <Box component="main" mx={4} my={8}>
      <Container maxWidth="xl" component="div">
        {isCoverLoading ? (
          <Box textAlign={"center"}>
            <CircularProgress
              color="warning"
              sx={{ margin: "auto" }}
              size="4em"
              thickness={4}
            />
          </Box>
        ) : !proposalCoverData ? (
          <Alert severity="warning">
            <AlertTitle>Propuesta no encontrada</AlertTitle>
            No se puedo localizar ninguna propuesta con este número de
            identificador, por favor póngase en contacto con su analista.
          </Alert>
        ) : (
          <>
            <ProposalSummary proposalCover={proposalCoverData} />

            {!proposalAuthorized ? (
              <ProposalPin handleProposalCoverStorage={handlePinResponse} />
            ) : (
              <Box sx={{ width: "100%" }} mt={5}>
                <Box sx={{ borderBottom: 1, borderColor: "divider" }}>
                  <Tabs
                    value={tabValue}
                    onChange={handleChange}
                    aria-label="basic tabs example"
                  >
                    <Tab label="Propuesta" {...a11yProps(0)} />
                    <Tab label="Seguimiento" {...a11yProps(1)} />
                    <Tab label="Recursos" {...a11yProps(2)} />
                  </Tabs>
                </Box>
                <TabPanel value={tabValue} index={0}>
                  <ProposalBody proposalData={proposalData} />
                </TabPanel>
                <TabPanel value={tabValue} index={1}>
                  <h1>Seguimiento</h1>
                </TabPanel>
                <TabPanel value={tabValue} index={2}>
                  <h1>Recursos</h1>
                </TabPanel>
              </Box>
            )}
          </>
        )}
      </Container>
    </Box>
  );
}
