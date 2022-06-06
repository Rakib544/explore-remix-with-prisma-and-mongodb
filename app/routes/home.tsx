// app/routes/home.tsx
import type { LoaderFunction } from "@remix-run/node";
import { json } from "@remix-run/node";
import { Layout } from "~/components/layout";
import { UserPanel } from "~/components/user-panel";
import { requireUserId } from "~/utils/auth.server";
import { getOtherUsers } from "~/utils/users.server";

export const loader: LoaderFunction = async ({ request }) => {
  const userId = await requireUserId(request, "/");
  const users = await getOtherUsers(userId);
  return json({ users });
};

export default function Home() {
  return (
    <Layout>
      <div className="h-full flex">
        <UserPanel />
      </div>
    </Layout>
  );
}
