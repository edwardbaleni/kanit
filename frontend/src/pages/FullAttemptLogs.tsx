// VS Code webview integration - install keyboard/clipboard bridge
import '@/vscode/bridge';

import { AppWithStyleOverride } from '@/utils/StyleOverride';
import { WebviewContextMenu } from '@/vscode/ContextMenu';
// REMOVED: Execution disabled - TaskAttemptPanel and ExecutionProcessesProvider removed

export function FullAttemptLogsPage() {
  // REMOVED: Execution disabled - attempt logs view simplified
  return (
    <AppWithStyleOverride>
      <div className="h-screen flex flex-col bg-muted">
        <WebviewContextMenu />
        <main className="flex-1 min-h-0 flex items-center justify-center">
          <div className="text-center space-y-4 p-6">
            <h2 className="text-xl font-semibold text-foreground">
              Execution Logs Unavailable
            </h2>
            <p className="text-sm text-muted-foreground max-w-md">
              Code execution has been disabled. This view previously showed
              execution logs and follow-up interactions.
            </p>
          </div>
        </main>
      </div>
    </AppWithStyleOverride>
  );
}
