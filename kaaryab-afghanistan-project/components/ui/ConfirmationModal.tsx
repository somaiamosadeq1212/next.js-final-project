"use client";

import Button from "@/components/ui/Button";

type ConfirmationModalProps = {
  open: boolean;
  title: string;
  description: string;
  confirmText?: string;
  cancelText?: string;
  loading?: boolean;
  onConfirm: () => void;
  onCancel: () => void;
};

export default function ConfirmationModal({
  open,
  title,
  description,
  confirmText = "Confirm",
  cancelText = "Cancel",
  loading = false,
  onConfirm,
  onCancel,
}: ConfirmationModalProps) {
  if (!open) return null;

  return (
    <div
      className="
      fixed inset-0 z-50
      flex items-center justify-center
      bg-black/50
      p-4
      "
    >
      <div
        className="
        w-full
        max-w-md
        rounded-3xl
        border
        border-border
        bg-card
        p-6
        shadow-xl
        dark:border-slate-800
        dark:bg-slate-900
        "
      >
        <h2 className="text-xl font-bold">{title}</h2>

        <p className="mt-3 text-muted-foreground">
          {description}
        </p>

        <div className="mt-8 flex justify-end gap-3">
          <Button
            variant="outline"
            onClick={onCancel}
          >
            {cancelText}
          </Button>

          <Button
            disabled={loading}
            onClick={onConfirm}
          >
            {loading ? "Deleting..." : confirmText}
          </Button>
        </div>
      </div>
    </div>
  );
}