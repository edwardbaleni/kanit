import type { PatchTypeWithKey } from '@/hooks/useConversationHistory';

// REMOVED: Execution disabled - TodoItem and NormalizedEntry types removed, using stub
type TodoItem = {
  content: string;
  status: string;
};

interface UsePinnedTodosResult {
  todos: TodoItem[];
  lastUpdated: string | null;
}

/**
 * Hook that extracts and maintains the latest TODO state from normalized conversation entries.
 * REMOVED: Execution disabled - now always returns empty todos
 */
export const usePinnedTodos = (
  _entries: PatchTypeWithKey[]
): UsePinnedTodosResult => {
  // REMOVED: Execution disabled - no execution history to extract todos from
  return {
    todos: [],
    lastUpdated: null,
  };
};
