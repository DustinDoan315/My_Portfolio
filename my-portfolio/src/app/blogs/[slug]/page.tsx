import Layout from "@/app/page";

const ProjectDetailPage = ({ params }: { params: { slug: number } }) => {
  return (
    <Layout>
      <h1>Project Detail</h1>
      <p>Showing details for project ID {params?.slug}</p>
    </Layout>
  );
};

export default ProjectDetailPage;
