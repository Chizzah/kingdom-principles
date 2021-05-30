import { QueryClient, useQuery } from "react-query";
import { dehydrate } from "react-query/hydration";

import { getPodcasts } from "../lib/api";

import Layout from "../components/Shared/Layout/Layout";
import Episode from "../components/Episode/Episode";

export default function Index() {
  const { data: podcasts } = useQuery("podcasts", getPodcasts);

  return (
    <Layout>
      <section className="w-full my-20">
        <h2 className="text-4xl font-bold text-center text-gray-50">
          Kingdom Principles Podcasts
        </h2>
        <div>
          {podcasts.map((podcast) => {
            return <Episode episode={podcast} />;
          })}
        </div>
      </section>
    </Layout>
  );
}

export async function getStaticProps() {
  const queryClient = new QueryClient();

  await queryClient.prefetchQuery("podcasts", getPodcasts);

  return {
    props: {
      dehydratedState: dehydrate(queryClient),
    },
  };
}
