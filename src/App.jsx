import { useState } from "react";
import Header from "./components/Header";
import Hero from "./components/Hero";
import Stats from "./components/Stats";
import Problem from "./components/Problem";
import Architecture from "./components/Architecture";
import DetectionPipeline from "./components/DetectionPipeline";
import AIEngine from "./components/AIEngine";
import IncidentResponse from "./components/IncidentResponse";
import Dashboard from "./components/Dashboard";
import FooterCTA from "./components/FooterCTA";
import FlowArchitecture from "./components/FlowArchitecture";
import { useTheme } from "./hooks/useTheme";
import { useReveal } from "./hooks/useReveal";

export default function App() {
  const { dark, toggleTheme } = useTheme();
  const [mobile, setMobile] = useState(false);

  useReveal();

  return (
    <>
      <Header
        dark={dark}
        toggleTheme={toggleTheme}
        mobile={mobile}
        setMobile={setMobile}
      />

      <main id="top">
        <Hero />
        <Stats />
        <Problem />
        {/* <Architecture /> */}
        <FlowArchitecture />
        <DetectionPipeline />
        <AIEngine />
        <IncidentResponse />
        <Dashboard />
        <FooterCTA />
      </main>
    </>
  );
}
