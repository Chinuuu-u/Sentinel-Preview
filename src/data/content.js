import {
  BrainCircuit,
  CircleAlert,
  Eye,
  FileSearch,
  Network,
} from "lucide-react";

export const navItems = [
  ["Problem", "#problem"],
  ["Architecture", "#architecture"],
  ["AI Engine", "#ai-engine"],
  ["Response", "#response"],
  ["Demo", "#demo"],
];

export const stats = [
  ["01", "One-way traffic visibility"],
  ["2×", "Detection layers: known + unknown"],
  ["24/7", "Continuous monitoring model"],
  ["0", "Required return path"],
];

export const detectionSteps = [
  {
    number: "01 / INGEST",
    title: "Passive capture",
    description:
      "Collect traffic without introducing a return path or modifying the monitored flow.",
    tag: "DPDK / eBPF",
    Icon: Network,
  },
  {
    number: "02 / EXTRACT",
    title: "Build features",
    description:
      "Parse headers and calculate flow statistics, byte patterns and timing characteristics.",
    tag: "FLOW FEATURES",
    Icon: FileSearch,
  },
  {
    number: "03 / DETECT",
    title: "AI inference",
    description:
      "Combine learned signatures with anomaly detection to surface known and unseen behavior.",
    tag: "CNN + AUTOENCODER",
    Icon: BrainCircuit,
  },
  {
    number: "04 / ALERT",
    title: "Risk scoring",
    description:
      "Generate a real-time alert with a confidence score and supporting traffic evidence.",
    tag: "REAL-TIME",
    Icon: CircleAlert,
  },
  {
    number: "05 / INVESTIGATE",
    title: "Analyst view",
    description:
      "Present the event, context and evidence in a dashboard built for fast investigation.",
    tag: "SOC DASHBOARD",
    Icon: Eye,
  },
];

export const dashboardBars = [
  28, 44, 38, 64, 52, 74, 58, 87, 68,
  94, 78, 66, 82, 58, 71, 49, 62, 76,
];

export const alerts = [
  ["HIGH", "anomalous flow", "93%"],
  ["HIGH", "suspicious burst", "89%"],
  ["MED", "unknown pattern", "67%"],
  ["LOW", "baseline deviation", "34%"],
  ["INFO", "capture healthy", "100%"],
];
