// REMOVED: Execution disabled - queueApi removed, stub types created
// Stub types for removed queue functionality
type QueueStatus = { status: 'empty' } | { status: 'queued'; message: { message: string; variant: string | null } };
type QueuedMessage = { message: string; variant: string | null };

interface UseQueueStatusResult {
  /** Current queue status */
  queueStatus: QueueStatus;
  /** Whether a message is currently queued */
  isQueued: boolean;
  /** The queued message if any */
  queuedMessage: QueuedMessage | null;
  /** Whether an operation is in progress */
  isLoading: boolean;
  /** Queue a new message */
  queueMessage: (message: string, variant: string | null) => Promise<void>;
  /** Cancel the queued message */
  cancelQueue: () => Promise<void>;
  /** Refresh the queue status from the server */
  refresh: () => Promise<void>;
}

// REMOVED: Execution disabled - queue functionality stubbed (always returns empty)
export function useQueueStatus(_sessionId?: string): UseQueueStatusResult {
  return {
    queueStatus: { status: 'empty' },
    isQueued: false,
    queuedMessage: null,
    isLoading: false,
    queueMessage: async () => {}, // No-op
    cancelQueue: async () => {}, // No-op
    refresh: async () => {}, // No-op
  };
}
