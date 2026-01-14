import WYSIWYGEditor from '@/components/ui/wysiwyg';
import type { WorkspaceWithSession } from '@/types/attempt';
// REMOVED: Execution disabled - retry functionality and related imports removed

const UserMessage = ({
  content,
  executionProcessId: _executionProcessId, // Kept for API compatibility but unused
  taskAttempt,
}: {
  content: string;
  executionProcessId?: string;
  taskAttempt?: WorkspaceWithSession;
}) => {
  // REMOVED: Execution disabled - all retry functionality removed
  // Component now just displays the user message

  return (
    <div className="py-2">
      <div className="bg-background px-4 py-2 text-sm">
        <div className="py-3">
          <WYSIWYGEditor
            value={content}
            disabled
            className="whitespace-pre-wrap break-words flex flex-col gap-1 font-light"
            taskAttemptId={taskAttempt?.id}
            // REMOVED: onEdit removed (no retry functionality)
          />
        </div>
      </div>
    </div>
  );
};

export default UserMessage;
