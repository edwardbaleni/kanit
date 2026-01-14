// REMOVED: Execution disabled - stub types for removed execution types
type NormalizedEntry = {
  entry_type: { type: string; [key: string]: any };
  content: string;
  timestamp: string | null;
};

type ExecutorAction = {
  action_type: string;
  [key: string]: any;
};

export interface UnifiedLogEntry {
  id: string;
  ts: number; // epoch-ms timestamp for sorting and react-window key
  processId: string;
  processName: string;
  channel: 'raw' | 'stdout' | 'stderr' | 'normalized' | 'process_start';
  payload: string | NormalizedEntry | ProcessStartPayload;
}

export interface ProcessStartPayload {
  processId: string;
  runReason: string;
  startedAt: string;
  status: string;
  action?: ExecutorAction;
}
