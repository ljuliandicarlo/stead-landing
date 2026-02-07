import { OrganizationSchema, WebSiteSchema } from "./structured-data";

export function DefaultStructuredData() {
  return (
    <>
      <OrganizationSchema />
      <WebSiteSchema />
    </>
  );
}
