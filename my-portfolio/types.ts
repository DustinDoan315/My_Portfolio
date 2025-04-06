// types.ts
export interface ExperimentParams {
  date: string;
  sampleId: string;
  concentration: string;
}

export interface Condition {
  name: string;
  total: number;
}

export interface TimePoint {
  time: number;
  measurements: number[];
}

export interface ExtractedData {
  experimentParams: ExperimentParams;
  initialValue: number;
  conditions: Condition[];
  timePoints: TimePoint[];
  metadata?: {
    source?: string;
    extractionMethod?: "ocr" | "text" | "json" | "api";
    processedAt?: Date;
    rawData?: unknown;
    confidence?: number;
  };
}
