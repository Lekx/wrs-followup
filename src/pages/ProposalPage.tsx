import { useEffect, useState } from "react";
import { Helmet } from "react-helmet";
import { Alert, AlertTitle, Box, Container, Tab, Tabs } from "@mui/material";
import {
  useProposalCoverData,
  useProposalFullData,
} from "../hooks/useProposalData";
import { Cover } from "../shared/types";
import Loader from "../components/Loader";
import { TabPanel, a11yProps } from "../components/Tabs";
import ProposalSummary from "../components/ProposalSummary";
import ProposalPin from "../components/ProposalPin";
import ProposalBody from "../components/ProposalBody";
import ProposalFollowup from "../components/ProposalFollowup";
import ProposalResources from "../components/ProposalResources";

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
    <>
      <Helmet>
        <title>Followup - Propuesta {`${proposalCoverData?.uid}`}</title>
      </Helmet>
      <Box component="main" mx={{ sm: 0, md: 4 }} my={8}>
        <Container maxWidth="xl" component="div">
          {isCoverLoading ? (
            <Box textAlign={"center"}>
              <Loader />
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
                <ProposalPin
                  handleProposalCoverStorage={handlePinResponse}
                  coverSpecialNote={proposalCoverData.specialNote}
                />
              ) : (
                <Box sx={{ width: "100%" }} mt={5}>
                  <Box sx={{ borderBottom: 1, borderColor: "divider" }}>
                    <Tabs
                      value={tabValue}
                      onChange={handleChange}
                      scrollButtons="auto"
                      aria-label="tabs for proposal sections"
                      variant="scrollable"
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
                    <ProposalFollowup />
                  </TabPanel>
                  <TabPanel value={tabValue} index={2}>
                    <ProposalResources />
                  </TabPanel>
                </Box>
              )}
            </>
          )}
        </Container>
      </Box>
    </>
  );
}
