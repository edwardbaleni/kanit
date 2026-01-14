// useConversationHistory.ts
// REMOVED: Execution disabled - stub types for removed execution types
import { Workspace } from 'shared/types';
import { useEffect, useRef } from 'react';

// Stub types for removed execution types (needed for type compatibility)
type NormalizedEntry = {
  entry_type: { type: string; [key: string]: any };
  content: string;
  timestamp: string | null;
};

type PatchType =
  | { type: 'STDOUT'; content: string }
  | { type: 'STDERR'; content: string }
  | { type: 'NORMALIZED_ENTRY'; content: NormalizedEntry };

export type PatchTypeWithKey = PatchType & {
  patchKey: string;
  executionProcessId: string;
};

export type AddEntryType = 'initial' | 'running' | 'historic';

export type OnEntriesUpdated = (
  newEntries: PatchTypeWithKey[],
  addType: AddEntryType,
  loading: boolean
) => void;

interface UseConversationHistoryParams {
  attempt: Workspace;
  onEntriesUpdated: OnEntriesUpdated;
}

interface UseConversationHistoryResult {}

// REMOVED: Execution disabled - conversation history hook simplified
// This hook now just calls onEntriesUpdated with empty data since execution is disabled
export const useConversationHistory = ({
  attempt,
  onEntriesUpdated,
}: UseConversationHistoryParams): UseConversationHistoryResult => {
  const onEntriesUpdatedRef = useRef<OnEntriesUpdated>(onEntriesUpdated);

  useEffect(() => {
    onEntriesUpdatedRef.current = onEntriesUpdated;
  }, [onEntriesUpdated]);

  // On mount or when attempt changes, emit empty entries
  useEffect(() => {
    // Call with empty array and loading false
    onEntriesUpdatedRef.current([], 'initial', false);
  }, [attempt.id]);

  return {};
};
