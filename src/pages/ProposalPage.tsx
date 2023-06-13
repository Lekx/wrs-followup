import { useState } from "react";
import { Alert, AlertTitle, Box, Container, Tabs } from "@mui/material";
import Tab from "@mui/material/Tab";
import { useProposalCoverData } from "../hooks/useProposalData";
import ProposalSummary from "../components/ProposalSummary";
import { TabPanel, a11yProps } from "../components/Tabs";
import ProposalPin from "../components/ProposalPin";

export default function ProposalPage() {
  const proposalCoverData = useProposalCoverData() as any;
  const [proposalAuthorized, setProposalAuthorized] = useState(false);
  const [tabValue, setTabValue] = useState<number>(0);

  const handleChange = (event: React.SyntheticEvent, newValue: string) => {
    setTabValue(Number(newValue));
    console.log(event);
  };
  // User already authorized
  const handlePinResponse = () => {
    const storageData = localStorage.getItem("wrs-followup-proposals");
    if (!storageData?.indexOf(`"FOLIO": "${proposalCoverData.folio}"`)) {
      let proposalsArray = [];
      if (storageData) proposalsArray = JSON.parse(storageData);
      proposalsArray.push(proposalCoverData);

      localStorage.setItem(
        "wrs-followup-proposals",
        JSON.stringify(proposalsArray)
      );
    }
    setProposalAuthorized(true);
  };

  return (
    <Box component="main" mx={4} my={8}>
      <Container maxWidth="xl" component="div">
        {!proposalCoverData ? (
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
              <Box sx={{ width: "100%" }}>
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
                  <h1>Propuestas</h1>
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
