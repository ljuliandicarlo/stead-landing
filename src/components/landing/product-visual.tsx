"use client";

import { motion } from "framer-motion";
import {
  FileText,
  Shield,
  AlertCircle,
  Users,
  CheckCircle2,
  FolderOpen,
} from "lucide-react";

const categories = [
  { name: "Identity", count: 4, icon: Shield },
  { name: "Legal", count: 3, icon: FileText },
  { name: "Insurance", count: 5, icon: Shield },
  { name: "Financial", count: 6, icon: FolderOpen },
];

const alerts = [
  { text: "Passport expires in 87 days", type: "warning" },
  { text: "Will review suggested", type: "info" },
];

export function ProductVisual() {
  return (
    <motion.div
      layout
      className="w-full overflow-hidden rounded-2xl border border-border bg-muted/30 shadow-xl"
    >
      {/* Top bar */}
      <div className="flex items-center justify-between border-b border-border bg-background/80 px-6 py-4">
        <div className="flex items-center gap-3">
          <div className="h-2 w-2 rounded-full bg-emerald-500" />
          <span className="text-sm font-medium text-foreground">
            Life Vault
          </span>
        </div>
        <div className="flex items-center gap-2 text-xs text-muted-foreground">
          <span>Readiness</span>
          <span className="font-medium text-foreground">72%</span>
        </div>
      </div>

      <div className="grid gap-0 md:grid-cols-3">
        {/* Left: Readiness + Alerts */}
        <div className="border-b border-border md:border-b-0 md:border-r md:border-t-0">
          <div className="p-6">
            <h3 className="text-xs font-medium uppercase tracking-wider text-muted-foreground">
              Readiness score
            </h3>
            <div className="mt-4 flex items-end gap-2">
              <motion.div
                initial={{ height: 0 }}
                animate={{ height: "72%" }}
                transition={{ duration: 0.8, delay: 0.2 }}
                className="w-12 rounded-t bg-foreground/90"
              />
              <span className="text-3xl font-light tabular-nums text-foreground">
                72
              </span>
              <span className="mb-1 text-muted-foreground">/ 100</span>
            </div>
            <p className="mt-2 text-sm text-muted-foreground">
              3 items need attention
            </p>
          </div>
          <div className="border-t border-border p-6">
            <h3 className="text-xs font-medium uppercase tracking-wider text-muted-foreground">
              Alerts
            </h3>
            <ul className="mt-4 space-y-3">
              {alerts.map((alert, i) => (
                <motion.li
                  key={alert.text}
                  initial={{ opacity: 0, x: -8 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.3 + i * 0.1 }}
                  className="flex items-start gap-3 text-sm"
                >
                  <AlertCircle
                    className={
                      alert.type === "warning"
                        ? "h-4 w-4 shrink-0 text-amber-500"
                        : "h-4 w-4 shrink-0 text-muted-foreground"
                    }
                  />
                  <span className="text-foreground">{alert.text}</span>
                </motion.li>
              ))}
            </ul>
          </div>
        </div>

        {/* Center: Document categories */}
        <div className="border-b border-border md:border-b-0 md:border-r md:border-t-0">
          <div className="p-6">
            <h3 className="text-xs font-medium uppercase tracking-wider text-muted-foreground">
              Document vault
            </h3>
            <ul className="mt-4 space-y-2">
              {categories.map((cat, i) => (
                <motion.li
                  key={cat.name}
                  initial={{ opacity: 0, x: -8 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.4 + i * 0.08 }}
                  className="flex items-center justify-between rounded-lg border border-border bg-background/50 px-4 py-3"
                >
                  <div className="flex items-center gap-3">
                    <cat.icon className="h-4 w-4 text-muted-foreground" />
                    <span className="text-sm font-medium text-foreground">
                      {cat.name}
                    </span>
                  </div>
                  <span className="text-xs tabular-nums text-muted-foreground">
                    {cat.count}
                  </span>
                </motion.li>
              ))}
            </ul>
          </div>
        </div>

        {/* Right: Advisor access */}
        <div>
          <div className="p-6">
            <h3 className="text-xs font-medium uppercase tracking-wider text-muted-foreground">
              Advisor access
            </h3>
            <ul className="mt-4 space-y-3">
              {[
                { name: "Estate attorney", access: "View only", status: true },
                { name: "CPA", access: "View only", status: true },
                { name: "Insurance advisor", access: "Expires in 30 days", status: false },
              ].map((advisor, i) => (
                <motion.li
                  key={advisor.name}
                  initial={{ opacity: 0, x: -8 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.5 + i * 0.08 }}
                  className="flex items-center justify-between rounded-lg border border-border bg-background/50 px-4 py-3"
                >
                  <div className="flex items-center gap-3">
                    <Users className="h-4 w-4 text-muted-foreground" />
                    <div>
                      <p className="text-sm font-medium text-foreground">
                        {advisor.name}
                      </p>
                      <p className="text-xs text-muted-foreground">
                        {advisor.access}
                      </p>
                    </div>
                  </div>
                  {advisor.status ? (
                    <CheckCircle2 className="h-4 w-4 shrink-0 text-emerald-600" />
                  ) : (
                    <span className="text-xs text-amber-600">Review</span>
                  )}
                </motion.li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </motion.div>
  );
}
