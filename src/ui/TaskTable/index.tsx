"use client";

import {
  DndContext,
  closestCenter,
  KeyboardSensor,
  PointerSensor,
  useSensor,
  useSensors,
} from "@dnd-kit/core";
import {
  arrayMove,
  SortableContext,
  useSortable,
  verticalListSortingStrategy,
} from "@dnd-kit/sortable";
import { CSS } from "@dnd-kit/utilities";
import { useState } from "react";
import { Badge } from "@/components/ui/badge";
import { GripVertical } from "lucide-react";
import { cn } from "@/lib/utils";

type Task = {
  id: string;
  title: string;
  status: "todo" | "in-progress" | "done";
};

const initialTasks: Task[] = [
  { id: "1", title: "Fix bug in login", status: "todo" },
  { id: "2", title: "Design dashboard UI", status: "in-progress" },
  { id: "3", title: "Write documentation", status: "done" },
];

export default function TaskTable() {
  const [tasks, setTasks] = useState(initialTasks);

  const sensors = useSensors(
    useSensor(PointerSensor),
    useSensor(KeyboardSensor)
  );

  function handleDragEnd(event: any) {
    const { active, over } = event;
    if (!over || active.id === over.id) return;

    const oldIndex = tasks.findIndex((t) => t.id === active.id);
    const newIndex = tasks.findIndex((t) => t.id === over.id);
    setTasks(arrayMove(tasks, oldIndex, newIndex));
  }

  return (
    <div className="bg-white rounded-2xl shadow-md p-4 w-full max-w-3xl mx-auto mt-8">
      <h2 className="text-xl font-semibold mb-4">Task Manager</h2>
      <DndContext
        sensors={sensors}
        collisionDetection={closestCenter}
        onDragEnd={handleDragEnd}
      >
        <SortableContext
          items={tasks.map((t) => t.id)}
          strategy={verticalListSortingStrategy}
        >
          <table className="w-full border-separate border-spacing-y-2">
            <thead>
              <tr className="text-left text-muted-foreground text-sm">
                <th className="w-10" />
                <th>Task</th>
                <th>Status</th>
              </tr>
            </thead>
            <tbody>
              {tasks.map((task) => (
                <SortableRow key={task.id} task={task} />
              ))}
            </tbody>
          </table>
        </SortableContext>
      </DndContext>
    </div>
  );
}

function SortableRow({ task }: { task: Task }) {
  const {
    attributes,
    listeners,
    setNodeRef,
    transform,
    transition,
    isDragging,
  } = useSortable({ id: task.id });

  const style = {
    transform: CSS.Transform.toString(transform),
    transition,
  };

  return (
    <tr
      ref={setNodeRef}
      style={style}
      className={cn(
        "bg-muted/30 hover:bg-muted rounded-xl transition-colors",
        isDragging && "opacity-50"
      )}
    >
      <td className="px-3 py-2 align-middle">
        <button
          {...attributes}
          {...listeners}
          className="cursor-grab active:cursor-grabbing text-muted-foreground"
          aria-label="Drag"
        >
          <GripVertical size={18} />
        </button>
      </td>
      <td className="px-3 py-2 text-sm font-medium">{task.title}</td>
      <td className="px-3 py-2">
        <StatusBadge status={task.status} />
      </td>
    </tr>
  );
}

function StatusBadge({ status }: { status: Task["status"] }) {
  const statusMap = {
    todo: { label: "To Do", className: "bg-gray-200 text-gray-700" },
    "in-progress": {
      label: "In Progress",
      className: "bg-blue-100 text-blue-600",
    },
    done: { label: "Done", className: "bg-green-100 text-green-600" },
  };

  const { label, className } = statusMap[status];

  return (
    <Badge
      className={cn("px-2 py-1 text-xs font-medium rounded-md", className)}
    >
      {label}
    </Badge>
  );
}
