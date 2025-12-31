import { ChevronDown, ChevronRight, Users } from "lucide-react";
import { useState } from "react";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { cn } from "@/lib/utils";

interface OrgNodeProps {
  name: string;
  title: string;
  initials: string;
  children?: OrgNodeProps[];
  isRoot?: boolean;
}

export function OrgNode({ name, title, initials, children, isRoot = false }: OrgNodeProps) {
  const [expanded, setExpanded] = useState(true);
  const hasChildren = children && children.length > 0;

  return (
    <div className={cn("flex flex-col items-center", isRoot ? "" : "pt-4")}>
      {/* Connector line from parent */}
      {!isRoot && (
        <div className="w-px h-4 bg-border" />
      )}
      
      {/* Node card */}
      <div
        className={cn(
          "bg-card rounded-xl p-4 border border-border/50 card-elevated min-w-[200px] cursor-pointer transition-all hover:border-primary/30",
          isRoot && "bg-primary text-primary-foreground border-primary"
        )}
        onClick={() => hasChildren && setExpanded(!expanded)}
      >
        <div className="flex items-center gap-3">
          <Avatar className="h-10 w-10">
            <AvatarImage src="" />
            <AvatarFallback className={cn(
              "font-medium text-sm",
              isRoot ? "bg-primary-foreground/20 text-primary-foreground" : "bg-primary/10 text-primary"
            )}>
              {initials}
            </AvatarFallback>
          </Avatar>
          <div className="flex-1">
            <p className={cn(
              "font-medium text-sm",
              isRoot ? "text-primary-foreground" : "text-foreground"
            )}>
              {name}
            </p>
            <p className={cn(
              "text-xs",
              isRoot ? "text-primary-foreground/70" : "text-muted-foreground"
            )}>
              {title}
            </p>
          </div>
          {hasChildren && (
            <div className={cn(
              "text-muted-foreground",
              isRoot && "text-primary-foreground/70"
            )}>
              {expanded ? <ChevronDown className="h-4 w-4" /> : <ChevronRight className="h-4 w-4" />}
            </div>
          )}
        </div>
      </div>

      {/* Children */}
      {hasChildren && expanded && (
        <>
          <div className="w-px h-4 bg-border" />
          <div className="flex relative">
            {/* Horizontal connector */}
            {children.length > 1 && (
              <div 
                className="absolute top-0 h-px bg-border"
                style={{
                  left: `calc(50% - ${(children.length - 1) * 120}px)`,
                  right: `calc(50% - ${(children.length - 1) * 120}px)`,
                }}
              />
            )}
            <div className="flex gap-8">
              {children.map((child, index) => (
                <OrgNode key={index} {...child} />
              ))}
            </div>
          </div>
        </>
      )}
    </div>
  );
}
