/**
 * Whether this build may be indexed by search engines.
 *
 * Netlify sets CONTEXT at build time to "production", "deploy-preview",
 * "branch-deploy" or "dev". Every context except production is blocked, so a
 * preview or branch copy can never compete with the real site. Outside
 * Netlify (local builds) CONTEXT is unset and only NEXT_PUBLIC_ALLOW_INDEXING
 * applies. Pages are static, so the value is fixed per deploy.
 */
export const deployContext = process.env.CONTEXT ?? "";
export const isNonProductionDeploy = deployContext !== "" && deployContext !== "production";
export const allowIndexing = process.env.NEXT_PUBLIC_ALLOW_INDEXING !== "false" && !isNonProductionDeploy;
