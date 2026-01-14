import { useState } from 'react';
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
} from '@/components/ui/dialog';
import { Button } from '@/components/ui/button';
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select';
// REMOVED: Execution disabled - DropdownMenu components removed (agent selection removed)
import { Label } from '@/components/ui/label';
import { Input } from '@/components/ui/input';
import { Code, HandMetal } from 'lucide-react';
import { EditorType } from 'shared/types';
import type { EditorConfig } from 'shared/types';
// REMOVED: Execution disabled - ExecutorProfileId, BaseCodingAgent, agent-related imports removed

import { toPrettyCase } from '@/utils/string';
import NiceModal, { useModal } from '@ebay/nice-modal-react';
import { defineModal, type NoProps } from '@/lib/modals';
import { useEditorAvailability } from '@/hooks/useEditorAvailability';
import { EditorAvailabilityIndicator } from '@/components/EditorAvailabilityIndicator';

// REMOVED: Execution disabled - profile field removed from OnboardingResult
export type OnboardingResult = {
  editor: EditorConfig;
};

const OnboardingDialogImpl = NiceModal.create<NoProps>(() => {
  const modal = useModal();

  const [editorType, setEditorType] = useState<EditorType>(EditorType.VS_CODE);
  const [customCommand, setCustomCommand] = useState<string>('');

  const editorAvailability = useEditorAvailability(editorType);

  const handleComplete = () => {
    modal.resolve({
      editor: {
        editor_type: editorType,
        custom_command:
          editorType === EditorType.CUSTOM ? customCommand || null : null,
        remote_ssh_host: null,
        remote_ssh_user: null,
      },
    } as OnboardingResult);
  };

  const isValid =
    editorType !== EditorType.CUSTOM ||
    (editorType === EditorType.CUSTOM && customCommand.trim() !== '');

  return (
    <Dialog open={modal.visible} uncloseable={true}>
      <DialogContent className="sm:max-w-[600px] space-y-4">
        <DialogHeader>
          <div className="flex items-center gap-3">
            <HandMetal className="h-6 w-6 text-primary text-primary-foreground" />
            <DialogTitle>Welcome to Vibe Kanban</DialogTitle>
          </div>
          <DialogDescription className="text-left pt-2">
            Let's set up your editor preference. You can always change this
            later in Settings.
          </DialogDescription>
        </DialogHeader>

        {/* REMOVED: Execution disabled - agent selection section removed */}

        <div className="space-y-2">
          <h2 className="text-xl flex items-center gap-2">
            <Code className="h-4 w-4" />
            Choose Your Code Editor
          </h2>

          <div className="space-y-2">
            <Label htmlFor="editor">Preferred Editor</Label>
            <Select
              value={editorType}
              onValueChange={(value: EditorType) => setEditorType(value)}
            >
              <SelectTrigger id="editor">
                <SelectValue placeholder="Select your preferred editor" />
              </SelectTrigger>
              <SelectContent>
                {Object.values(EditorType).map((type) => (
                  <SelectItem key={type} value={type}>
                    {toPrettyCase(type)}
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>

            {/* Editor availability status indicator */}
            {editorType !== EditorType.CUSTOM && (
              <EditorAvailabilityIndicator availability={editorAvailability} />
            )}

            <p className="text-sm text-muted-foreground">
              This editor will be used to open task attempts and project files.
            </p>

            {editorType === EditorType.CUSTOM && (
              <div className="space-y-2">
                <Label htmlFor="custom-command">Custom Command</Label>
                <Input
                  id="custom-command"
                  placeholder="e.g., code, subl, vim"
                  value={customCommand}
                  onChange={(e) => setCustomCommand(e.target.value)}
                />
                <p className="text-sm text-muted-foreground">
                  Enter the command to run your custom editor. Use spaces for
                  arguments (e.g., "code --wait").
                </p>
              </div>
            )}
          </div>
        </div>

        <DialogFooter>
          <Button
            onClick={handleComplete}
            disabled={!isValid}
            className="w-full"
          >
            Continue
          </Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
});

export const OnboardingDialog = defineModal<void, OnboardingResult>(
  OnboardingDialogImpl
);
