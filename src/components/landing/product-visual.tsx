"use client";

import { motion } from "framer-motion";
import { FileText, Users, AlertCircle, Shield } from "lucide-react";

const policyRow = { name: "Term life policy", carrier: "Carrier", status: "Active" };
const alerts = [
  { text: "Passport expires in 87 days", type: "warning" },
  { text: "Will review suggested", type: "info" },
];
const trustedAccess = [
  { name: "Spouse", access: "View only" },
  { name: "Executor", access: "View only" },
  { name: "Insurance advisor", access: "Expires in 30 days" },
];

export function ProductVisual() {
  return (
    <motion.div
      layout
      className="w-full overflow-hidden rounded-2xl border border-border bg-surface shadow-md transition-shadow hover:shadow-lg"
    >
      {/* Top bar: Policies tab active */}
      <div className="flex items-center justify-between border-b border-border bg-surface-2 px-6 py-4">
        <div className="flex items-center gap-6">
          <span className="text-sm font-medium text-foreground">Policies</span>
          <span className="text-sm text-muted-foreground">Documents</span>
          <span className="text-sm text-muted-foreground">Alerts</span>
        </div>
        <div className="flex items-center gap-2 text-xs text-muted-foreground">
          <span>Readiness</span>
          <span className="font-medium text-foreground">72%</span>
        </div>
      </div>

      <div className="grid gap-0 md:grid-cols-3">
        {/* Left: Policies + Beneficiaries */}
        <div className="border-b border-border md:border-b-0 md:border-r md:border-t-0">
          <div className="p-6">
            <h3 className="text-xs font-medium uppercase tracking-wider text-muted-foreground">
              Policies
            </h3>
            <motion.div
              initial={{ opacity: 0, x: -8 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.2 }}
              className="mt-4 rounded-lg border border-border bg-surface px-4 py-3"
            >
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <FileText className="h-4 w-4 text-muted-foreground" />
                  <span className="text-sm font-medium text-foreground">
                    {policyRow.name}
                  </span>
                </div>
                <span className="text-xs text-muted-foreground">
                  {policyRow.status}
                </span>
              </div>
              <p className="mt-1 text-xs text-muted-foreground">
                {policyRow.carrier}
              </p>
            </motion.div>
          </div>
          <div className="border-t border-border p-6">
            <h3 className="text-xs font-medium uppercase tracking-wider text-muted-foreground">
              Beneficiaries / ownership
            </h3>
            <motion.div
              initial={{ opacity: 0, x: -8 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.3 }}
              className="mt-4 rounded-lg border border-border bg-surface px-4 py-3"
            >
              <p className="text-sm text-foreground">
                Ownership and beneficiary coordination in one place.
              </p>
            </motion.div>
          </div>
        </div>

        {/* Center: Alerts */}
        <div className="border-b border-border md:border-b-0 md:border-r md:border-t-0">
          <div className="p-6">
            <h3 className="text-xs font-medium uppercase tracking-wider text-muted-foreground">
              Alerts
            </h3>
            <ul className="mt-4 space-y-3">
              {alerts.map((alert, i) => (
                <motion.li
                  key={alert.text}
                  initial={{ opacity: 0, x: -8 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.35 + i * 0.08 }}
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
            <p className="mt-4 text-xs text-muted-foreground">
              Missing document detection
            </p>
          </div>
        </div>

        {/* Right: Trusted access */}
        <div>
          <div className="p-6">
            <h3 className="text-xs font-medium uppercase tracking-wider text-muted-foreground">
              Trusted access
            </h3>
            <ul className="mt-4 space-y-3">
              {trustedAccess.map((advisor, i) => (
                <motion.li
                  key={advisor.name}
                  initial={{ opacity: 0, x: -8 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.45 + i * 0.08 }}
                  className="flex items-center justify-between rounded-lg border border-border bg-surface px-4 py-3"
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
                  <Shield className="h-4 w-4 shrink-0 text-muted-foreground" />
                </motion.li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </motion.div>
  );
}
