'use client';

import { MVTOrchestrator } from '@mvtlab/nextjs-orchestrator';

export function Providers({ children }: { children: React.ReactNode }) {
    return (
        <MVTOrchestrator orchestratorKey={process.env.NEXT_PUBLIC_MVT_PROJECT_KEY!}>
            {children}
        </MVTOrchestrator>
    );
}
